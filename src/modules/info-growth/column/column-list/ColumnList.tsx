import {
  Divider,
  Input,
  Space,
  Table,
  TableColumnsType,
  Typography,
} from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";

import { ERROR_TIMEOUT } from "@/constant/config";
import { useSearchClientGrowthArticles } from "@/loader/growth-articles.loader";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import { INFO_GROWTH_COLUMN_DETAIL_URL } from "@/urls";
import { formatDateShow, getUrlToDetail } from "@/utils/format-string";

import styles from "./scss/column-list.module.scss";

export default function ColumnList(): JSX.Element {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchContent, setSearchContent] = useState<string | null>(
    searchParams.get("k") || "",
  );
  const [page, setPage] = useState<number | string>(
    searchParams.get("page") || 1,
  );
  const [pageSize, setPageSize] = useState<number | string>(
    searchParams.get("page_size") || 10,
  );

  const columns: TableColumnsType<any> = [
    {
      key: "serial",
      title: t("info_fat.serial"),
      width: 50,
      align: "center",
      render: (_, __, index) =>
        Number(pageSize) * (Number(page) - 1) + index + 1,
    },
    {
      key: "title",
      title: t("info_fat.title"),
      dataIndex: "title",
      render: (value, record) => (
        <Link
          className={styles.link}
          to={getUrlToDetail(
            INFO_GROWTH_COLUMN_DETAIL_URL,
            record.growth_article_id,
          )}
        >
          {value}
        </Link>
      ),
    },
    {
      key: "posted_date",
      title: t("info_fat.date"),
      dataIndex: "posted_date",
      align: "center",
      width: 150,
      render: (value: string) => (
        <Typography.Text>{dayjs(value).format(formatDateShow)}</Typography.Text>
      ),
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

  const {
    data: articles,
    remove,
    refetch,
  } = useSearchClientGrowthArticles({
    params: {
      page_index: page,
      page_size: pageSize,
      search_content: searchContent,
    },
    config: {
      onSuccess: (data) => {
        if (data.message === ERROR_TIMEOUT) {
          refetch();
        }
      },
      onError: (err) => {
        console.log(err);
      },
    },
  });

  useEffect(() => remove, [remove]);

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
            <Typography.Text type="secondary">{`Tổng cộng ${
              articles?.total_items || 0
            } mục, trang ${page}`}</Typography.Text>
            <Space>
              <Input.Search
                style={{ maxWidth: 300 }}
                placeholder={t("info_fat.search_placeholder")}
                onSearch={handleSearch}
              />
            </Space>
          </div>

          <Divider />

          <Table
            className={styles.table}
            columns={currentColumns}
            dataSource={articles?.data?.data}
            pagination={{
              current: Number(page),
              pageSize: Number(pageSize),
              onChange(page, pageSize) {
                setPage(page);
                setPageSize(pageSize);
              },
            }}
            rowKey={"growth_article_id"}
          />
        </div>
      </section>
    </>
  );
}
