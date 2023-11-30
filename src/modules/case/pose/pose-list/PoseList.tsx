import { Col, Input, Pagination, Row, Space, Typography } from "antd";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import { CASE_POSTURE_DETAIL_URL } from "@/urls";
import { getUrlToDetail } from "@/utils/format-string";

import { dataStory } from "./data/data-fake";
import styles from "./scss/pose-list.module.scss";

export default function PoseList(): JSX.Element {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(8);
  const [currentData, setCurrentData] = useState<any[]>([]);

  useEffect(() => {
    setCurrentData(
      _.slice(
        _.clone(dataStory),
        (page - 1) * pageSize,
        (page - 1) * pageSize + pageSize,
      ),
    );
  }, [page, pageSize]);

  return (
    <>
      <Title />

      <Breadcrumb showLast={false} />

      <div className={styles.contentWrap}>
        <div className="inner">
          <div className={styles.headerContent}>
            <Typography.Text type="secondary">{`Tổng cộng ${dataStory.length} mục, trang ${page}`}</Typography.Text>
            <Space>
              <Input.Search
                style={{ maxWidth: 300 }}
                placeholder={t("thesis.search_placeholder")}
              />
            </Space>
          </div>

          <Row gutter={32} className={styles.cardWrap}>
            {currentData.map((item) => (
              <Col key={item.id} span={24} sm={12} lg={6}>
                <Link
                  to={getUrlToDetail(CASE_POSTURE_DETAIL_URL, item.id)}
                  className={styles.cardItem}
                >
                  <div className={styles.img}>
                    <img src={item.thumb} alt="thumb" />
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

          <div style={{ textAlign: "right" }}>
            <Pagination
              current={page}
              pageSize={pageSize}
              total={dataStory.length}
              onChange={(page, pageSize) => {
                setPage(page);
                setPageSize(pageSize);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
