import { ClockCircleFilled, EnvironmentFilled } from "@ant-design/icons";
import { Card, Col, Row, Spin, Typography } from "antd";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { ERROR_TIMEOUT } from "@/constant/config";
import { useSearchBranches } from "@/loader/branch.loader";
import { IBranch } from "@/models/branch";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import ExModal from "./components/ExModal";
import { dataEx } from "./data/data-fake";
import styles from "./scss/ex.module.scss";

export default function Ex(): JSX.Element {
  const { t } = useTranslation();

  const {
    data: dataBranches,
    isLoading,
    refetch,
  } = useSearchBranches({
    params: {},
    config: {
      onSuccess: (data) => {
        if (data.message === ERROR_TIMEOUT) {
          refetch();
        }
      },
    },
  });

  return (
    <>
      <Title />

      <Breadcrumb />

      <section className={styles.contentWrap}>
        <div className="inner">
          <Spin spinning={isLoading}>
            <Row gutter={[16, 16]}>
              {dataBranches?.data?.map((item: IBranch, index: number) => (
                <Col key={index} span={24} md={12} lg={8}>
                  <motion.div
                    initial={{ y: -50, opacity: 0.5 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={styles.cardWrap}
                  >
                    <Card className={styles.card}>
                      <div>
                        <img
                          src={item.thumbnail || dataEx?.[0]?.thumb}
                          alt={item.branch_name}
                        />
                      </div>
                      <div className={styles.textWrap}>
                        <div>
                          <div>
                            <Row gutter={16}>
                              <Col lg={24}>
                                <Typography.Title
                                  level={4}
                                >{`${item.branch_name}`}</Typography.Title>
                              </Col>
                              <Col lg={24}>
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
                              <Typography.Text>
                                {item.open_time}
                              </Typography.Text>
                            </div>
                            <Typography.Text>{item.close_time}</Typography.Text>
                          </div>
                        </div>

                        <div className={styles.cardBottom}>
                          <Typography.Title level={5} style={{ margin: 0 }}>
                            {t("all.regis_day")}
                          </Typography.Title>
                          <ExModal branch={item} />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Spin>
        </div>
      </section>
    </>
  );
}
