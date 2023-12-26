import { Typography } from "antd";
import { motion } from "framer-motion";

import imgPlus from "@/assets/img/others/ico_growth_plus.png";
import imgCalGrowth from "@/assets/img/program/img_growth.png";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import { dataNessProgram } from "./data/data-fake";
import styles from "./scss/growth-method.module.scss";

export default function GrowthMethod(): JSX.Element {
  return (
    <>
      <Title />

      <Breadcrumb />

      <div className={`${styles.contentWrap}`}>
        <div className="inner">
          <Typography.Title level={4} className={styles.growthTitle}>
            <span className="font-mint text-underline">KINESS</span> Làm sao để
            trưởng thành?
          </Typography.Title>

          <motion.div
            initial={{ y: -50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.box}
          >
            <Typography.Paragraph className={styles.info}>
              Sau khi phân tích kết quả của 10 bài kiểm tra tăng trưởng chi
              tiết, chuyên gia về chiều cao tùy chỉnh phương pháp tăng trưởng
              cho từng cá nhân dựa trên phương pháp tăng trưởng NESS và tăng
              chiều cao thông qua sự quản lý có hệ thống của giáo viên chủ nhiệm
              1:1.
            </Typography.Paragraph>
            <Typography.Paragraph className={`${styles.info} ${styles.info2}`}>
              <Typography.Text>KI</Typography.Text>
              <Typography.Text>
                <img src={imgPlus} alt="plus" />
              </Typography.Text>
              <Typography.Text>Dinh dưỡng</Typography.Text>
              <Typography.Text>
                <img src={imgPlus} alt="plus" />
              </Typography.Text>
              <Typography.Text>Thể dục</Typography.Text>
              <Typography.Text>
                <img src={imgPlus} alt="plus" />
              </Typography.Text>
              <Typography.Text>Ngủ</Typography.Text>
              <Typography.Text>
                <img src={imgPlus} alt="plus" />
              </Typography.Text>
              <Typography.Text>Áp lực</Typography.Text>
            </Typography.Paragraph>

            <div className={styles.boxImg}>
              <img src={imgCalGrowth} alt="cal growth" />
            </div>
          </motion.div>

          <div className={styles.nessArea}>
            {dataNessProgram.map((item) => (
              <motion.div
                key={item.id}
                initial={{ y: -50, opacity: 0.5 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={styles.cardItem}
              >
                <div className={styles.cardImg}>
                  <img src={item.img} alt={item.title} />
                </div>
                <div className={styles.cardText}>
                  <Typography.Title className={styles.cardTitle}>
                    {item.title}
                  </Typography.Title>
                  {item.description.map((des, i) => (
                    <div
                      key={i}
                      className={styles.cardDescription}
                      dangerouslySetInnerHTML={{ __html: des }}
                    ></div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
