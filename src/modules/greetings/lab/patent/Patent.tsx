import { Image, Typography } from "antd";
import { motion } from "framer-motion";

import personImg from "@/assets/img/info/img_greet_doctor.png";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import { greetingData } from "./data/data-fake";
import styles from "./scss/greeting.module.scss";

export default function Patent(): JSX.Element {
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
            <Typography.Title level={4}>
              Xin chào?{" "}
              <Typography.Text strong>
                Đây là Tiến sĩ Yangsoo Kim, Giám đốc điều hành của
              </Typography.Text>
              <br />
              Trung tâm Tăng trưởng Kiness.
            </Typography.Title>

            <Image
              preview={false}
              src={personImg}
              wrapperClassName={styles.img}
            />
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.boxText}
          >
            <div
              className={"inner-text"}
              dangerouslySetInnerHTML={{ __html: greetingData }}
            ></div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
