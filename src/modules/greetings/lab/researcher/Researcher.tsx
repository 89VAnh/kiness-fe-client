import { Card, Col, Divider, Row, Typography } from "antd";
import { motion } from "framer-motion";
import _ from "lodash";

import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import { dataResearcher } from "./data/data-fake";
import styles from "./scss/researcher.module.scss";

const main = dataResearcher[0];
export default function Researcher(): JSX.Element {
  return (
    <>
      <Title />

      <Breadcrumb />

      <section className={styles.contentWrap}>
        <div className="inner">
          <motion.div
            initial={{ y: -50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.box}
          >
            <Row gutter={16}>
              <Col span={24} lg={9}>
                <div className={styles.img}>
                  <img src={main.img} alt={main.full_name} />
                </div>
              </Col>
              <Col span={24} lg={15}>
                <div>
                  <Typography.Text className="font-mint">
                    {main.position}
                  </Typography.Text>
                  <Typography.Title level={2} style={{ marginTop: 10 }}>
                    {main.full_name}
                  </Typography.Title>
                </div>
                <Divider />

                <div>
                  <Typography.Title level={3}>Lịch sử tóm tắt</Typography.Title>
                  <ul className={styles.list}>
                    {main.story?.map((item, index) => (
                      <li key={index}>
                        <Typography.Text>{item}</Typography.Text>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Typography.Title level={3}>Bài báo</Typography.Title>
                  <ul className={styles.list}>
                    {main.paper?.map((item, index) => (
                      <li key={index}>
                        <Typography.Text>{item}</Typography.Text>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </motion.div>
          <Row gutter={16} style={{ marginTop: 16 }}>
            {_.slice(dataResearcher, 1).map((item, index) => (
              <Col
                key={index}
                span={12}
                md={8}
                lg={4.8}
                style={{ marginBottom: 16 }}
              >
                <motion.div
                  initial={{ y: -50, opacity: 0.5 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className={styles.listCard}>
                    <img
                      src={item.img}
                      alt={item.full_name}
                      width={"100%"}
                      style={{ maxHeight: 100, objectFit: "contain" }}
                    />
                  </Card>
                  <div style={{ textAlign: "center" }}>
                    <Typography.Text>{item.position}</Typography.Text>
                    <br />
                    <Typography.Text>{item.full_name}</Typography.Text>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
}
