import {
  EnvironmentOutlined,
  FieldTimeOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Col, Row, Space, Tag, Typography } from "antd";
import { motion } from "framer-motion";

import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import styles from "./scss/map-detail.module.scss";

export default function MapDetail(): JSX.Element {
  return (
    <>
      <Title title="Tìm chi nhánh" />

      <Breadcrumb />

      <div className={styles.contentWrap}>
        <div className="inner">
          <motion.div
            initial={{ y: -50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.box}
          >
            <Row gutter={24}>
              <Col span={24} lg={12}>
                <Space>
                  <div className={styles.cardText}>
                    <div>
                      <Space>
                        <Tag style={{ borderRadius: "50px" }}>Seoul</Tag>
                        <Typography.Title level={5} style={{ margin: 0 }}>
                          Chi nhánh Gangnam
                        </Typography.Title>
                      </Space>
                    </div>
                    <div>
                      <Space>
                        <EnvironmentOutlined />
                        <Typography.Text>
                          Tầng 3, 775-2 Yeoksam-dong, Gangnam-gu, Seoul
                        </Typography.Text>
                      </Space>
                    </div>
                    <div>
                      <Space>
                        <FieldTimeOutlined />
                        <Typography.Text>
                          Các ngày trong tuần 14:00-22:00 / Cuối tuần
                          09:00-17:00
                        </Typography.Text>
                      </Space>
                    </div>
                    <div>
                      <Space>
                        <PhoneOutlined />
                        <Typography.Link
                          style={{ color: "#000" }}
                          href={`tel:02-558-2758`}
                        >
                          02-558-2758
                        </Typography.Link>
                      </Space>
                    </div>
                  </div>
                </Space>
              </Col>

              <Col span={24} lg={12}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.010313554387!2d127.08258708948775!3d37.507674899997156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5b20e50eec7%3A0xebd61d526b48400!2s3%2C%2031%20Baekjegobun-ro%2019-gil%2C%20Songpa-gu%2C%20Seoul%2C%20South%20Korea!5e0!3m2!1sen!2s!4v1700816786612!5m2!1sen!2s"
                  // width="600"
                  // height="450"
                  width={"100%"}
                  title="map"
                  style={{ border: 0, minHeight: 400 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Col>
            </Row>
          </motion.div>
        </div>
      </div>
    </>
  );
}
