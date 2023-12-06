import {
  EnvironmentOutlined,
  FieldTimeOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Col, Row, Space, Tag, Typography } from "antd";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { useGetBranchById } from "@/loader/branch.loader";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import styles from "./scss/map-detail.module.scss";

export default function MapDetail(): JSX.Element {
  const { t } = useTranslation();
  const { id } = useParams();

  const { data: branch } = useGetBranchById({
    id: +id!,
    enabled: !!id,
  });

  return (
    <>
      <Title title={t("nav.info.branch.map.title")} />

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
            <Row gutter={24}>
              <Col span={24} lg={12}>
                <Space>
                  <div className={styles.cardText}>
                    <div>
                      <Space>
                        <Tag style={{ borderRadius: "50px" }}>
                          {branch?.city_name}
                        </Tag>
                        <Typography.Title level={5} style={{ margin: 0 }}>
                          {branch?.branch_name}
                        </Typography.Title>
                      </Space>
                    </div>
                    <div>
                      <Space>
                        <EnvironmentOutlined />
                        <Typography.Text>{branch?.address}</Typography.Text>
                      </Space>
                    </div>
                    <div>
                      <Space>
                        <FieldTimeOutlined />
                        <Typography.Text>{branch?.open_time}</Typography.Text>
                      </Space>
                    </div>
                    <div>
                      <Space>
                        <PhoneOutlined />
                        <Typography.Link
                          style={{ color: "#000" }}
                          href={`tel:${branch?.phone}`}
                        >
                          {branch?.phone}
                        </Typography.Link>
                      </Space>
                    </div>
                  </div>
                </Space>
              </Col>

              <Col span={24} lg={12}>
                <div
                  dangerouslySetInnerHTML={{ __html: branch?.embed_map }}
                  className={styles.embed}
                ></div>
              </Col>
            </Row>
          </motion.div>
        </div>
      </section>
    </>
  );
}
