import { CheckOutlined, EditOutlined, LockOutlined } from "@ant-design/icons";
import {
  Divider,
  Input,
  Space,
  Table,
  TableColumnsType,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import { HOME_URL, THESIS_DETAIL_URL } from "@/urls";
import { getUrlToDetail } from "@/utils/format-string";

import { dataInquiry } from "./data/data-fake";
import styles from "./scss/inquiry-detail.module.scss";

export default function InquiryDetail(): JSX.Element {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

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
      key: "title",
      title: t("thesis.title"),
      dataIndex: "title",
      render: (value, record) => (
        <Space>
          {record.need_password ? <LockOutlined /> : ""}
          <Link
            to={getUrlToDetail(THESIS_DETAIL_URL, record.id)}
            className={styles.link}
          >
            <Typography.Text>{value}</Typography.Text>
          </Link>
        </Space>
      ),
    },
    {
      key: "author",
      title: t("thesis.author"),
      dataIndex: "author",
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

  return (
    <>
      <Title />

      <Breadcrumb />

      <div className={styles.contentWrap}>
        <div className="inner">
          <div className={styles.headerContent}>
            <Typography.Text type="secondary">{`Tổng cộng ${dataInquiry.length} mục, trang ${page}`}</Typography.Text>
            <Space>
              <Input.Search
                style={{ maxWidth: 300 }}
                placeholder={t("thesis.search_placeholder")}
              />

              <Link to={HOME_URL} className={styles.pencil}>
                <EditOutlined />
              </Link>
            </Space>
          </div>

          <Divider />

          <Table
            className={styles.table}
            columns={currentColumns}
            dataSource={dataInquiry}
            pagination={{
              current: page,
              pageSize,
              onChange(page, pageSize) {
                setPage(page);
                setPageSize(pageSize);
              },
            }}
            rowKey={"id"}
          />
        </div>
      </div>
    </>
  );
}
