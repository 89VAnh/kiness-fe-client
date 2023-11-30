import { Space, Timeline, Typography } from "antd";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import { dataTimeline, getDataTimeline } from "./data/data-fake";
import styles from "./scss/history.module.scss";

export default function History(): JSX.Element {
  const [isTablet, setIsTablet] = useState<boolean>(window.innerWidth < 992);
  const [currentData, setCurrentData] = useState<any[]>([]);

  useEffect(() => {
    const data = getDataTimeline(dataTimeline);

    setCurrentData(data);
  }, []);

  useEffect(() => {
    const handleResize = (e: any) => {
      const width = e.target.innerWidth;
      setIsTablet(width < 992);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          >
            <Timeline
              className={styles.timeline}
              mode={!isTablet ? "alternate" : "left"}
              items={currentData.map((item, index) => ({
                label: !isTablet ? (
                  <div
                    key={index}
                    className={`${styles.timelineLabel} ${
                      index % 2 ? styles.right : styles.left
                    }`}
                  >
                    <Typography.Title
                      className={styles.timelineLabelText}
                      level={3}
                    >
                      {Object.keys(item)?.[0]}
                    </Typography.Title>
                  </div>
                ) : (
                  false
                ),
                dot: <div className={styles.timelineDot}></div>,
                children: (
                  <>
                    {window.innerWidth < 992 ? (
                      <div
                        className={`${styles.timelineLabel} ${styles.right}`}
                      >
                        <Typography.Title
                          className={styles.timelineLabelText}
                          level={3}
                        >
                          {Object.keys(item)?.[0]}
                        </Typography.Title>
                      </div>
                    ) : (
                      <></>
                    )}
                    <div
                      className={`${index % 2 ? styles.left : styles.right} ${
                        styles.timelineContent
                      }`}
                    >
                      {item?.[Object.keys(item)?.[0]]?.map(
                        (year: any, i: number) => (
                          <div style={{ marginBottom: 16 }} key={i}>
                            <Space
                              align="start"
                              style={{
                                flexDirection: isTablet
                                  ? "row"
                                  : index % 2
                                  ? "row-reverse"
                                  : "row",
                              }}
                            >
                              <Typography.Text
                                strong
                                className={styles.titleYear}
                              >
                                {Object.keys(year)?.[0]}
                              </Typography.Text>
                              <ul className={styles.listSub}>
                                {year?.[Object.keys(year)?.[0]]?.map(
                                  (content: string, i: number) => (
                                    <li
                                      key={i}
                                      className={
                                        isTablet
                                          ? ""
                                          : index % 2
                                          ? styles.odd
                                          : styles.even
                                      }
                                    >
                                      {content}
                                    </li>
                                  ),
                                )}
                              </ul>
                            </Space>
                          </div>
                        ),
                      )}
                    </div>
                  </>
                ),
              }))}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
