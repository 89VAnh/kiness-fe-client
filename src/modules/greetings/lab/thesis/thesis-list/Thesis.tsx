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
import { Link, useSearchParams } from "react-router-dom";

import { ERROR_TIMEOUT } from "@/constant/config";
import { useSearchResearchArticle } from "@/loader/research-article.loader";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import { THESIS_DETAIL_URL } from "@/urls";
import { getUrlToDetail } from "@/utils/format-string";

import styles from "./scss/thesis.module.scss";

export default function Thesis(): JSX.Element {
  const { t } = useTranslation();

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchContent, setSearchContent] = useState<string | null>(
    searchParams.get("k") || "",
  );
  const [page, setPage] = useState<number | string>(
    searchParams.get("page") || 1,
  );
  const [pageSize, setPageSize] = useState<number | string>(
    searchParams.get("page_size") || 15,
  );

  const {
    data: articles,
    remove,
    refetch,
  } = useSearchResearchArticle({
    params: {
      pageIndex: 0,
      pageSize: 0,
      search_content: searchContent,
    },
    config: {
      onSuccess: (data) => {
        console.log(data);
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

  const handleSearch = (value: string) => {
    searchParams.delete("page");

    if (value === "") searchParams.delete("k");
    else searchParams.set("k", value);

    setSearchParams(searchParams);

    setSearchContent(value);
  };

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
          <Link to={getUrlToDetail(THESIS_DETAIL_URL, record.article_id)}>
            <Typography.Title level={5}>{value}</Typography.Title>
          </Link>
          <Typography.Link href={record.article_link} target="_blank">
            <Button className="bg-mint">
              <LinkOutlined />
            </Button>
          </Typography.Link>
        </Space>
      ),
    },
    {
      key: "authors",
      title: t("thesis.author"),
      dataIndex: "authors",
      width: "15%",
    },
    {
      key: "issuers",
      title: t("thesis.organ"),
      dataIndex: "issuers",
      width: "24%",
    },
    {
      key: "year_of_release",
      title: t("thesis.year_release"),
      dataIndex: "year_of_release",
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
            <Typography.Text type="secondary">{`Tổng cộng ${
              articles ? articles.totalItems : 0
            } mục, trang ${page}`}</Typography.Text>
            <Input.Search
              style={{ maxWidth: 300 }}
              placeholder={t("thesis.search_placeholder")}
              onSearch={handleSearch}
            />
          </div>
          <Divider />

          <Table
            size="small"
            columns={currentColumns}
            dataSource={articles ? articles.data : []}
            rowKey={"article_id"}
          />

          <Pagination
            current={Number(page) || 1}
            pageSize={Number(pageSize) || 15}
            total={articles ? articles.totalItems : 0}
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
