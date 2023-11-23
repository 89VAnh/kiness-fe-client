import { Typography } from "antd";
import { motion } from "framer-motion";

import styles from "./scss/title.module.scss";

export default function Title(): JSX.Element {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ y: -50, opacity: 0.5 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={styles.subVisual}
    >
      <div className={styles.titleWrap}>
        <div className={styles.titlePage}>
          <Typography.Title level={1}>Lời chào của CEO</Typography.Title>
        </div>
      </div>
    </motion.div>
  );
}
