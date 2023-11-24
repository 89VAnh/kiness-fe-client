import { Image, Typography } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import topBg from "@/assets/img/others/main_k_bg_top.png";

import { dataBanner, dataBenefit, dataStep } from "./data/data-fake";
import styles from "./scss/main-content.module.scss";

export default function MainContent(): JSX.Element {
  return (
    <section className={styles.mainContent}>
      <div className={styles.top}>
        {/* <Image preview={false} src={topBg} /> */}
        <img src={topBg} alt="top-bg" />
      </div>

      <div className={styles.main}>
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
                <span>Tăng trưởng chiều cao là </span>
                <span className="font-mint">yếu tố then chốt</span>
              </Typography.Title>
              <Typography.Paragraph>
                <span className="font-mint">D</span>
                <span>inh dưỡng</span> + <span className="font-mint">T</span>
                <span>hể dục</span> + <span className="font-mint">N</span>
                <span>gủ</span> + <span className="font-mint">Á</span>
                <span>p lực</span>
              </Typography.Paragraph>
            </motion.div>
          </div>

          <div className={styles.cardInfo}>
            <div className={styles.box}>
              <ul>
                {dataBenefit.map((item, index) => (
                  <li key={index}>
                    <Image
                      preview={false}
                      src={item.img}
                      style={{ paddingBottom: 25 }}
                    />
                    <span style={{ display: "block" }}>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.stepWrap}>
            <div style={{ position: "relative" }}>
              <ul>
                {dataStep.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -50, opacity: 0.5 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.step}>
                      <div className={styles.stepInner}>
                        <span className={styles.serial}>{index + 1}</span>
                        <span>{item}</span>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.banner}>
            {dataBanner.map((item, index) => (
              <motion.div
                viewport={{ once: true }}
                key={index}
                initial={{ y: 50, opacity: 0.3 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={styles.box}
              >
                <Link to={item.link}>
                  <Image preview={false} src={item.img} />
                  <Typography.Title level={4}>{item.title}</Typography.Title>
                  <Typography.Paragraph className={styles.bannerParagraph}>
                    {item.content}{" "}
                  </Typography.Paragraph>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <img src={topBg} alt="bottom-bg" />
      </div>
    </section>
  );
}
