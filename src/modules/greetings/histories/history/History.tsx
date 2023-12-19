import { Space, Timeline, Typography } from "antd";
import { motion } from "framer-motion";
import _ from "lodash";
import { useEffect, useState } from "react";

import { useSearchHistories } from "@/loader/history.loader";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import styles from "./scss/history.module.scss";

export default function History(): JSX.Element {
  const [isTablet, setIsTablet] = useState<boolean>(window.innerWidth < 992);
  const [data, setData] = useState<any[]>([]);

  const { remove } = useSearchHistories({
    params: {},
    config: {
      onSuccess: (data) => {
        if (data?.success) {
          setData(getDataTimeline(data.data.data));
        }
      },
    },
  });
  useEffect(() => remove, [remove]);

  const getDataTimeline = (dataTimeline: any[]) => {
    const years = _.chain(dataTimeline.map((i) => i.year))
      .uniq()
      .sort((a, b) => a - b)
      .value();

    let lenYear = years.length;
    let data = [];
    while (lenYear > 0) {
      if (lenYear < 6) {
        const obj: any = {};
        const values = [...Array(lenYear)].map((_, index) => {
          const data: any = {};
          data[years[index].toString()] = dataTimeline
            .filter((i) => i.year === years[index])
            .map((i) => i.content);

          return data;
        });
        obj[`${years[0]} ~ ${years[lenYear - 1]}`] = _.reverse(values);
        years.splice(0, lenYear);
        data.push(obj);
      } else {
        const obj: any = {};
        const values = [...Array(6)].map((_, index) => {
          const data: any = {};
          data[years[index].toString()] = dataTimeline
            .filter((i) => i.year === years[index])
            .map((i) => i.content);

          return data;
        });
        obj[`${years[0]} ~ ${years[5]}`] = _.reverse(values);
        years.splice(0, 6);
        data.push(obj);
      }
      lenYear = years.length;
    }

    return _.reverse(data);
  };

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
              items={data?.map((item, index) => ({
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
