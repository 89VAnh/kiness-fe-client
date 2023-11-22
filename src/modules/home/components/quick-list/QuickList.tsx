import { Card, Col, Row, Typography } from "antd";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { dataQuick } from "./data/data-fake";
import styles from "./scss/quick-list.module.scss";

export default function QuickList(): JSX.Element {
  const [isTablet, setIsTablet] = useState<boolean>(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = (e: any) => {
      const width = e.target.innerWidth;
      setIsTablet(width < 992);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.mainQuick}>
      <div className="inner">
        <div className={styles.titleWrap}>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={styles.mainTitle}
          >
            <Typography.Title level={2} className={styles.title}>
              <span className={styles.titleMint}>Kiness </span>
              <span>yêu thích</span>
            </Typography.Title>
          </motion.div>
        </div>

        <Card className={styles.card}>
          <Row gutter={0}>
            {(isTablet ? dataQuick.slice(0, 9) : dataQuick).map(
              (item, index) => (
                <Col span={8} lg={4.8} key={index}>
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 + index * 0.1 }}
                    className={`${styles.cardItem} ${
                      isTablet
                        ? index > 2
                          ? styles.borderTop
                          : ""
                        : index > 4
                        ? styles.borderTop
                        : ""
                    } ${
                      isTablet
                        ? (index + 1) % 3
                          ? styles.borderLeft
                          : ""
                        : (index + 1) % 5
                        ? styles.borderLeft
                        : ""
                    }`}
                  >
                    <Typography.Link
                      className={styles.linkWrap}
                      href={item.link}
                    >
                      <div className={styles.box}>
                        <p
                          className={
                            styles.linkIcon +
                            " " +
                            styles[`link-icon-${index + 1}`]
                          }
                        ></p>
                        {item.title}
                      </div>
                    </Typography.Link>
                  </motion.div>
                </Col>
              ),
            )}
          </Row>
        </Card>
      </div>
    </section>
  );
}
