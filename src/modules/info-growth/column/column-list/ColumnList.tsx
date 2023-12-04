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
import { INFO_GROWTH_COLUMN_DETAIL_URL } from "@/urls";
import { getUrlToDetail } from "@/utils/format-string";

import { dataColumn } from "./data/data-fake";
import styles from "./scss/column-list.module.scss";

export default function ColumnList(): JSX.Element {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const columns: TableColumnsType<any> = [
    {
      key: "serial",
      title: t("info_fat.serial"),
      width: 50,
      align: "center",
      render: (_, __, index) => pageSize * (page - 1) + index + 1,
    },
    {
      key: "title",
      title: t("info_fat.title"),
      dataIndex: "title",
      render: (value, record) => (
        <Link
          className={styles.link}
          to={getUrlToDetail(INFO_GROWTH_COLUMN_DETAIL_URL, record.id)}
        >
          {value}
        </Link>
      ),
    },
    {
      key: "date",
      title: t("info_fat.date"),
      dataIndex: "date",
      align: "center",
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
          (c) => c.key === "title" || c.key === "date",
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
  }, [page, pageSize]);

  return (
    <>
      <Title />

      <Breadcrumb showLast={false} />

      <section className={styles.contentWrap}>
        <div className="inner">
          <div className={styles.headerContent}>
            <Typography.Text type="secondary">{`Tổng cộng ${dataColumn.length} mục, trang ${page}`}</Typography.Text>
            <Space>
              <Input.Search
                style={{ maxWidth: 300 }}
                placeholder={t("info_fat.search_placeholder")}
              />
            </Space>
          </div>

          <Divider />

          <Table
            className={styles.table}
            columns={currentColumns}
            dataSource={dataColumn}
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
      </section>
    </>
  );
}
