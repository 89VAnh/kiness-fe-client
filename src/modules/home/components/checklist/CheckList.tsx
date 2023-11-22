import { Typography } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import characterLeft from "@/assets/img/checklist/img_list_left.png";
import characterRight from "@/assets/img/checklist/img_list_right.png";
import { ADVICE_EX_URL } from "@/urls";

import { dataChecklist } from "./data/data-fake";
import styles from "./scss/checklist.module.scss";

export default function Checklist(): JSX.Element {
  return (
    <section className={styles.mainChecklist}>
      <div className="inner" style={{ position: "relative" }}>
        <div className={styles.titleWrap}>
          <motion.div
            viewport={{ once: true }}
            initial={{ y: -50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={styles.mainTitle}
          >
            <Typography.Title level={2} className={styles.title}>
              Danh sách kiểm tra tự chẩn đoán
            </Typography.Title>
            <Typography.Paragraph>
              Nếu bất kỳ điều nào trong số này áp dụng cho bạn, vui lòng tham
              khảo ý kiến ​​​​của một chuyên gia quan trọng.
            </Typography.Paragraph>
          </motion.div>
        </div>

        <div className={styles.note}>
          <div className={styles.paper + " " + styles.left}>
            <ul>
              {dataChecklist.left.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.paper}>
            <ul>
              {dataChecklist.right.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`${styles.character} ${styles.characterLeft}`}>
          <img src={characterLeft} alt="" />
        </div>
        <div className={`${styles.character} ${styles.characterRight}`}>
          <img src={characterRight} alt="" />
        </div>
      </div>

      <div className="inner">
        <Link to={ADVICE_EX_URL} className="btn-link btn-mint">
          Đặt chỗ tư vấn
        </Link>
      </div>
    </section>
  );
}
