import {
  ClockCircleFilled,
  EnvironmentFilled,
  PhoneFilled,
  SyncOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Input,
  Row,
  Select,
  Space,
  Tag,
  Typography,
} from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import locationIco from "@/assets/img/others/markerStar1.png";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import { MAP_DETAIL_URL } from "@/urls";
import { getUrlToDetail } from "@/utils/format-string";

import styles from "./scss/map-list.module.scss";

export default function MapList(): JSX.Element {
  return (
    <>
      <Title />

      <Breadcrumb />

      <div className={styles.contentWrap}>
        <div className="inner">
          <div className={styles.filterBar}>
            <Space style={{ width: "100%", justifyContent: "space-between" }}>
              <Select
                className={styles.filterSelect}
                defaultValue={""}
                options={[{ label: "Tất cả", value: "" }]}
              />

              <Space>
                <Button>
                  <SyncOutlined />
                </Button>
                <Input.Search placeholder="Nhập thông tin..." />
              </Space>
            </Space>
          </div>
          <div>
            <Row gutter={24}>
              {[...Array(10)].map((_, index) => (
                <Col span={24} lg={12} key={index}>
                  <motion.div
                    initial={{ y: -20, opacity: 0.5 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Card className={styles.cardItem}>
                      <Space>
                        <div>
                          <img src={locationIco} alt="location-ico" />
                        </div>
                        <div className={styles.cardText}>
                          <div>
                            <Link
                              to={getUrlToDetail(MAP_DETAIL_URL, index + 1)}
                            >
                              <Space>
                                <Tag style={{ borderRadius: "50px" }}>
                                  Seoul
                                </Tag>
                                <Typography.Title
                                  level={5}
                                  style={{ margin: 0 }}
                                >
                                  Chi nhánh Gangnam
                                </Typography.Title>
                              </Space>
                            </Link>
                          </div>
                          <div>
                            <Space>
                              <EnvironmentFilled />
                              <Typography.Text>
                                Tầng 3, 775-2 Yeoksam-dong, Gangnam-gu, Seoul
                              </Typography.Text>
                            </Space>
                          </div>
                          <div>
                            <Space>
                              <ClockCircleFilled />
                              <Typography.Text>
                                Các ngày trong tuần 14:00-22:00 / Cuối tuần
                                09:00-17:00
                              </Typography.Text>
                            </Space>
                          </div>
                          <div>
                            <Space>
                              <PhoneFilled />
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
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
