import { Col, Divider, Image, Input, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";

import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import { dataPatent } from "./data/data-fake";
import styles from "./scss/patent.module.scss";

export default function Patent(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <Title />

      <Breadcrumb />

      <section className={styles.contentWrap}>
        <div className="inner">
          <div className={styles.headerContent}>
            <div></div>
            <Input.Search
              style={{ maxWidth: 300 }}
              placeholder={t("patent.search_placeholder")}
            />
          </div>
          <Divider />

          <Row gutter={16}>
            {dataPatent.map((item) => (
              <Col
                key={item.key}
                span={24}
                md={12}
                lg={8}
                style={{ marginBottom: 16 }}
              >
                <div>
                  <Image
                    src={item.thumb}
                    wrapperStyle={{ width: "100%" }}
                    className={styles.thumbnail}
                    style={{ maxHeight: 300, objectFit: "cover" }}
                  />

                  <div className={styles.textWrap}>
                    <Typography.Title level={4}>
                      {item.title}{" "}
                      <Typography.Text type="secondary">
                        số {item.number}
                      </Typography.Text>
                    </Typography.Title>

                    <div
                      className={styles.description}
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
}
