import { ClockCircleFilled, EnvironmentFilled } from "@ant-design/icons";
import { Button, Card, Col, Row, Typography } from "antd";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import { dataEx } from "./data/data-fake";
import styles from "./scss/ex.module.scss";

export default function Ex(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <Title />

      <Breadcrumb />

      <section className={styles.contentWrap}>
        <div className="inner">
          <Row gutter={16}>
            {dataEx.map((item, index) => (
              <Col key={index} span={24} md={12} lg={8}>
                <motion.div
                  initial={{ y: -50, opacity: 0.5 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={styles.cardWrap}
                >
                  <Card>
                    <div>
                      <img src={item.thumb} alt={item.title} />
                    </div>
                    <div className={styles.textWrap}>
                      <div>
                        <Row gutter={16}>
                          <Col span={24} lg={12}>
                            <Typography.Title level={4}>{`${t("all.branch")} ${
                              item.title
                            }`}</Typography.Title>
                          </Col>
                          <Col span={24} lg={12}>
                            <Typography.Link href={`tel:${item.phone}`}>
                              <Typography.Title
                                level={4}
                                className={styles.fontMint}
                              >
                                {item.phone}
                              </Typography.Title>
                            </Typography.Link>
                          </Col>
                        </Row>
                      </div>

                      <div className={styles.textBox}>
                        <div>
                          <EnvironmentFilled />{" "}
                          <Typography.Text>{item.address}</Typography.Text>
                        </div>
                        <div>
                          <ClockCircleFilled />{" "}
                          <Typography.Text>{item.open}</Typography.Text>
                        </div>
                        <Typography.Text>{item.close}</Typography.Text>
                      </div>

                      <div className={styles.cardBottom}>
                        <Typography.Title level={5} style={{ margin: 0 }}>
                          {t("all.regis_day")}
                        </Typography.Title>
                        <Button
                          className={`btn-mint ${styles.btnRegis}`}
                          type="primary"
                        >
                          Đặt lịch
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
}
