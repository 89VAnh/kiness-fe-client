import { CheckOutlined, EditOutlined } from "@ant-design/icons";
import {
  Divider,
  Input,
  Space,
  Table,
  TableColumnsType,
  Typography,
} from "antd";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";

import { ERROR_TIMEOUT } from "@/constant/config";
import { useSearchRequests } from "@/loader/request.loader";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import { ADVICE_INQUIRY_WRITE_URL } from "@/urls";

import InquiryModal from "./components/InquiryModal";
import styles from "./scss/inquiry-list.module.scss";

export default function InquiryList(): JSX.Element {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchContent, setSearchContent] = useState(
    searchParams.get("k") || "",
  );

  const {
    data: dataInquiries,
    isLoading,
    refetch,
  } = useSearchRequests({
    params: {
      pageIndex: page,
      pageSize,
      search_content: isEmpty(searchContent) ? null : searchContent,
    },
    config: {
      onSuccess: (data) => {
        if (data.message === ERROR_TIMEOUT) {
          refetch();
        }
      },
    },
  });

  const columns: TableColumnsType<any> = [
    {
      key: "serial",
      title: "Trạng thái",
      width: 100,
      align: "center",
      render: (_, __) => (
        <Typography.Text className={styles.status}>
          <CheckOutlined /> Đã trả lời
        </Typography.Text>
      ),
    },
    {
      key: "subject",
      title: t("request.subject"),
      dataIndex: "subject",
      render: (_, record) => <InquiryModal record={record} styles={styles} />,
    },
    {
      key: "author_name",
      title: t("request.author_name"),
      dataIndex: "author_name",
      width: 150,
      render: (value) => <Typography.Text>{value}</Typography.Text>,
    },
  ];

  const [currentColumns, setCurrentColumns] =
    useState<TableColumnsType<any>>(columns);

  useEffect(() => {
    const handleResize = (e: any) => {
      if (e.target.innerWidth < 640) {
        const col = columns.filter(
          (c) => c.key === "title" || c.key === "author",
        );
        col && setCurrentColumns(col);
      } else {
        setCurrentColumns(columns);
      }
    };

    handleResize({ target: window });

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (keyword: string) => {
    searchParams.set("k", keyword);
    setSearchParams(searchParams);
    setSearchContent(keyword);
  };

  return (
    <>
      <Title />

      <Breadcrumb showLast={false} />

      <section className={styles.contentWrap}>
        <div className="inner">
          <div className={styles.headerContent}>
            <Typography.Text type="secondary">{`Tổng cộng ${dataInquiries?.data?.totalItems} mục, trang ${page}`}</Typography.Text>
            <Space>
              <Input.Search
                style={{ maxWidth: 300 }}
                placeholder={t("request.search_placeholder")}
                onSearch={handleSearch}
              />

              <Link to={ADVICE_INQUIRY_WRITE_URL} className={styles.pencil}>
                <EditOutlined />
              </Link>
            </Space>
          </div>

          <Divider />

          <Table
            className={styles.table}
            columns={currentColumns}
            dataSource={dataInquiries?.data?.data}
            loading={isLoading}
            pagination={{
              current: page,
              pageSize,
              onChange(page, pageSize) {
                setPage(page);
                setPageSize(pageSize);
              },
              total: dataInquiries?.data?.totalItems || 0,
              hideOnSinglePage: true,
            }}
            rowKey={"request_id"}
          />
        </div>
      </section>
    </>
  );
}
