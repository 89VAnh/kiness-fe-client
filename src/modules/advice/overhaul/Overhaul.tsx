import { Card, Col, Image, Row, Typography } from "antd";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import imgTitle from "@/assets/img/advice/img_overhaul_tit.png";
import imgCloudTop from "@/assets/img/others/img_cloud_top.png";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import { dataOverhaul, dataOverhaulBranch } from "./data/data-fake";
import styles from "./scss/overhaul.module.scss";

export default function Overhaul(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <Title />

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
            <Typography.Title level={3}>
              {dataOverhaulBranch.title}
            </Typography.Title>
            <Typography.Paragraph>
              {dataOverhaulBranch.description}
            </Typography.Paragraph>

            <Row gutter={16}>
              {dataOverhaulBranch.branches.map((branch, index) => (
                <Col key={index} span={8}>
                  <motion.div
                    initial={{ y: -25, opacity: 0.5 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={styles.cardWrap}
                  >
                    <Link
                      className={styles.cardItem}
                      to={branch.url}
                      style={{ background: branch.color }}
                    >
                      <Typography.Text>{branch.title}</Typography.Text>
                    </Link>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>

          <motion.div
            initial={{ y: -50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography.Title className={styles.overhaulTitle} level={4}>
              <Image preview={false} src={imgTitle} />
              <br />
              Nguyên nhân tầm vóc thấp! Bạn có thể tìm hiểu qua
              <br />
              <span className="font-mint">
                {dataOverhaul.length} bài kiểm tra tăng trưởng chi tiết
              </span>
            </Typography.Title>
          </motion.div>
        </div>

        <div>
          <img
            src={imgCloudTop}
            alt="cloud top"
            style={{ width: "100%", verticalAlign: "middle" }}
          />

          <div className={styles.cloudArea}>
            <div className="inner">
              <Row gutter={32}>
                {dataOverhaul.map((item, index) => (
                  <Col
                    key={index}
                    span={24}
                    md={12}
                    style={{ marginBottom: 16 }}
                  >
                    <motion.div
                      initial={{ y: -50, opacity: 0.5 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <Card className={styles.cardItem}>
                        <div className={styles.cardImg}>
                          <img
                            src={item.thumb}
                            style={{ maxWidth: 400 }}
                            alt=""
                          />
                        </div>

                        <Typography.Title level={4}>
                          <div className={`${styles.badge} bg-mint`}>
                            {`${t("all.step")}: ` + item.step}
                          </div>
                          {item.title}
                        </Typography.Title>

                        <Typography.Paragraph className={styles.paragraph}>
                          {item.description}
                        </Typography.Paragraph>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </div>

            <div className={styles.textBottom}>
              ※ Kiểm tra tăng trưởng chỉ có ở Hà Nội, Đà Nẵng và TP. Hồ Chí
              Minh.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
