import { Col, Input, Pagination, Row, Space, Spin, Typography } from "antd";
import { isEmpty } from "lodash";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";

import { BASE_URL, ERROR_TIMEOUT } from "@/constant/config";
import { useSearchGrowthStories } from "@/loader/growth-story.loader";
import { IGrowthStory } from "@/models/growth-story";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import { CASE_STORY_DETAIL_URL } from "@/urls";
import { getUrlToDetail } from "@/utils/format-string";

import styles from "./scss/story-list.module.scss";

export default function StoryList(): JSX.Element {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(8);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchContent, setSearchContent] = useState(
    searchParams.get("k") || "",
  );

  const {
    data: dataStories,
    isLoading,
    refetch,
  } = useSearchGrowthStories({
    params: {
      page_index: page,
      page_size: pageSize,
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
              dataStories?.data?.total_items || 0
            } mục, trang ${page}`}</Typography.Text>
            <Space>
              <Input.Search
                style={{ maxWidth: 300 }}
                placeholder={t("thesis.search_placeholder")}
                onSearch={handleSearch}
              />
            </Space>
          </div>

          <Spin spinning={isLoading}>
            <Row gutter={32} className={styles.cardWrap}>
              {dataStories?.data?.data?.map((item: IGrowthStory) => (
                <Col key={item.growth_story_id} span={24} sm={12} lg={6}>
                  <Link
                    to={getUrlToDetail(
                      CASE_STORY_DETAIL_URL,
                      item.growth_story_id,
                    )}
                    className={styles.cardItem}
                  >
                    <div className={styles.img}>
                      <img src={`${BASE_URL}/` + item.image_link} alt="thumb" />
                    </div>

                    <Typography.Paragraph
                      ellipsis={{ rows: 2 }}
                      title={item.title}
                      style={{ fontSize: 16 }}
                      className={styles.cardTitle}
                    >
                      {item.title}
                    </Typography.Paragraph>
                  </Link>
                </Col>
              ))}
            </Row>
          </Spin>

          <div style={{ textAlign: "right" }}>
            <Pagination
              current={page}
              pageSize={pageSize}
              total={dataStories?.data?.total_items || 0}
              onChange={(page, pageSize) => {
                setPage(page);
                setPageSize(pageSize);
              }}
              hideOnSinglePage
            />
          </div>
        </div>
      </section>
    </>
  );
}
