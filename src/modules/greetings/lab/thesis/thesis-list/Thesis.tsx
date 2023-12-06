import { LinkOutlined } from "@ant-design/icons";
import {
  Button,
  Divider,
  Input,
  Pagination,
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
import { THESIS_DETAIL_URL } from "@/urls";
import { getUrlToDetail } from "@/utils/format-string";

import { dataThesis } from "./data/data-fake";
import styles from "./scss/thesis.module.scss";

export default function Thesis(): JSX.Element {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(15);

  const columns: TableColumnsType<any> = [
    {
      key: "serial",
      title: t("thesis.serial"),
      width: 50,
      align: "center",
      render: (_, __, index) => index + 1,
    },
    {
      key: "title",
      title: t("thesis.title"),
      dataIndex: "title",
      render: (value, record) => (
        <Space>
          <Link to={getUrlToDetail(THESIS_DETAIL_URL, record.id)}>
            <Typography.Title level={5}>{value}</Typography.Title>
          </Link>
          <Typography.Link href={record.origin_link} target="_blank">
            <Button className="bg-mint">
              <LinkOutlined />
            </Button>
          </Typography.Link>
        </Space>
      ),
    },
    {
      key: "author",
      title: t("thesis.author"),
      dataIndex: "author",
      width: "15%",
      render: (value) => value.map((i: any) => i.name).join(", "),
    },
    {
      key: "organ",
      title: t("thesis.organ"),
      dataIndex: "organ",
      width: "24%",
      render: (value) => value.join(", "),
    },
    {
      key: "year_release",
      title: t("thesis.year_release"),
      dataIndex: "year",
      align: "center",
      width: 100,
    },
  ];

  const [currentColumns, setCurrentColumns] =
    useState<TableColumnsType<any>>(columns);

  useEffect(() => {
    const handleResize = (e: any) => {
      if (e.target.innerWidth < 768) {
        const col = columns.find((c) => c.key === "title");
        col && setCurrentColumns([col]);
      } else if (e.target.innerWidth < 992) {
        const cols = columns.filter(
          (c) => c.key === "title" || c.key === "author",
        );
        setCurrentColumns(cols);
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

      <section className={styles.contentWrap}>
        <div className="inner">
          <div className={styles.headerContent}>
            <Typography.Text type="secondary">{`Tổng cộng ${dataThesis.length} mục, trang ${page}`}</Typography.Text>
            <Input.Search
              style={{ maxWidth: 300 }}
              placeholder={t("thesis.search_placeholder")}
            />
          </div>
          <Divider />

          <Table
            size="small"
            columns={currentColumns}
            dataSource={dataThesis}
            rowKey={"id"}
          />

          <Pagination
            current={page}
            pageSize={pageSize}
            total={dataThesis.length}
            hideOnSinglePage
            onChange={(page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            }}
          />
        </div>
      </section>
    </>
  );
}
