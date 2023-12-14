import { Card, Col, Divider, Row, Spin, Typography } from "antd";
import { motion } from "framer-motion";
import _ from "lodash";
import { useState } from "react";

import { BASE_URL, ERROR_TIMEOUT } from "@/constant/config";
import { useSearchResearchers } from "@/loader/researcher.loader";
import { IResearcher } from "@/models/researcher";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import styles from "./scss/researcher.module.scss";

const position = "giám đốc đại diện";
export default function Researcher(): JSX.Element {
  const [representor, setRepresentor] = useState<IResearcher>();
  const [listResearchers, setListResearchers] = useState<IResearcher[]>([]);

  const { isLoading, refetch } = useSearchResearchers({
    params: {},
    config: {
      onSuccess: (data) => {
        if (data.message === ERROR_TIMEOUT) {
          refetch();
        }
        if (data?.data?.length > 0) {
          const index = _.findIndex(
            data.data,
            (item: IResearcher) =>
              item.position_name?.toLowerCase() === position,
          );
          setRepresentor(data.data[index]);
          const cloneData: IResearcher[] = _.clone(data.data);
          index >= 0 && cloneData.splice(index, 1);
          setListResearchers(cloneData);
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
                    <img
                      src={`${BASE_URL}/${representor?.image_url}`}
                      alt={representor?.name}
                    />
                  </div>
                </Col>
                <Col span={24} lg={15}>
                  <div>
                    <Typography.Text className="font-mint">
                      {representor?.position_name}
                    </Typography.Text>
                    <Typography.Title level={2} style={{ marginTop: 10 }}>
                      {representor?.name}
                    </Typography.Title>
                  </div>
                  <Divider />

                  <div>
                    <Typography.Title level={3}>
                      Lịch sử tóm tắt
                    </Typography.Title>
                    <ul className={styles.list}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: representor?.story || "",
                        }}
                      ></div>
                    </ul>
                  </div>
                  <div>
                    <Typography.Title level={3}>Bài báo</Typography.Title>
                    <ul className={styles.list}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: representor?.paper || "",
                        }}
                      ></div>
                    </ul>
                  </div>
                </Col>
              </Row>
            </motion.div>
            <Row gutter={16} style={{ marginTop: 16 }}>
              {listResearchers.map((item, index) => (
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
                        src={`${BASE_URL}/${item.image_url}`}
                        alt={item.name}
                        width={"100%"}
                        style={{ maxHeight: 100, objectFit: "contain" }}
                      />
                    </Card>
                    <div style={{ textAlign: "center" }}>
                      <Typography.Text>{item.position_name}</Typography.Text>
                      <br />
                      <Typography.Text>
                        {item.degree} <b>{item.name}</b>
                      </Typography.Text>
                    </div>
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
