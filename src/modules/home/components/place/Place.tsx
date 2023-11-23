import { List, Space, Typography } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { MAP_URL } from "@/urls";

import styles from "./scss/place.module.scss";

export default function Place(): JSX.Element {
  return (
    <section className={styles.place}>
      <div className="inner">
        <div className={styles.titleWrap}>
          <motion.div
            viewport={{ once: true }}
            initial={{ y: -50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={styles.mainTitle}
          >
            <Typography.Title level={2} className={styles.title}>
              <span>Tìm chi nhánh Kiness</span>
            </Typography.Title>
            <Typography.Paragraph>
              <span>Sử dụng Kiness thuận tiện gần đó.</span>
            </Typography.Paragraph>
          </motion.div>
        </div>

        <List className={styles.listPlace}>
          {[...Array(3)].map((_, index) => (
            <List.Item key={index} className={styles.listItem}>
              <Space align="start">
                <Typography.Title level={5} className={styles.listTitle}>
                  Khu vực Hà Nội
                </Typography.Title>

                <Space align="center" wrap>
                  <Link to={MAP_URL}>Chi nhánh Thanh Xuân</Link>
                  <Link to={MAP_URL}>Chi nhánh Thanh Xuân</Link>
                  <Link to={MAP_URL} className="last">
                    Chi nhánh Thanh Xuân
                  </Link>
                </Space>
              </Space>
            </List.Item>
          ))}
        </List>
      </div>
    </section>
  );
}
