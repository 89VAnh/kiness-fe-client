import { Typography } from "antd";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import imgGiraffe1 from "@/assets/img/others/detail_img1.png";
import imgGiraffe2 from "@/assets/img/others/detail_img2.png";
import imgVs from "@/assets/img/others/img_vs.png";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import { dataListQuestion, dataStepQuestion } from "./data/data-fake";
import styles from "./scss/question.module.scss";

export default function Question(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <Title />

      <Breadcrumb />

      <div className={`${styles.contentWrap} ${styles.topContainer}`}>
        <div className="inner">
          <motion.div
            initial={{ y: -50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.textWrap}
          >
            <div className={styles.left}>
              <div className={styles.box}>
                <Typography.Title level={4} className={styles.title}>
                  Kiểm tra tấm tăng trưởng
                </Typography.Title>
                <div className={styles.textCon}>
                  <ul>
                    {dataListQuestion.left.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.img}>
                <img src={imgGiraffe1} alt="giraffe" />
              </div>
            </div>
            <div className={styles.center}>
              <img src={imgVs} alt="vs" />
            </div>
            <div className={styles.right}>
              <div className={styles.box}>
                <Typography.Title level={4} className={styles.title}>
                  Kiểm tra tăng trưởng chính xác
                </Typography.Title>
                <div className={styles.textCon}>
                  <ul>
                    {dataListQuestion.right.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className={`${styles.contentWrap}`}>
        <div className="inner">
          <div className={styles.stepWrap}>
            <Typography.Title level={5} className={styles.stepTitle}>
              Quy trình kiểm tra tăng trưởng chính xác
            </Typography.Title>

            <ul>
              {dataStepQuestion.map((item) => (
                <motion.li
                  key={item.id}
                  initial={{ y: -50, opacity: 0.5 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={styles.step}
                >
                  <div className={styles.img}>
                    <img src={item.icon} alt={item.step + ""} />
                  </div>
                  <div className={styles.text}>
                    <Typography.Title level={4}>
                      <div className={`${styles.badge} bg-mint`}>
                        {`${t("all.step")}: ` + item.step}
                      </div>
                      {item.title}
                    </Typography.Title>
                    <Typography.Paragraph className={styles.paragraph}>
                      {item.detail}
                    </Typography.Paragraph>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={`${styles.contentWrap} ${styles.bottomContainer}`}>
        <div className="inner">
          <motion.div
            initial={{ y: -50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.textWrap}
          >
            <div className={styles.left}>
              <Typography.Title level={4}>
                Đĩa tăng trưởng của mọi người đều mở 100% cho đến khoảng 10 tuổi
                .
              </Typography.Title>
              <Typography.Paragraph className={styles.paragraph}>
                Từ góc độ tăng trưởng chiều cao, nếu các đĩa tăng trưởng mở ra,
                điều đó có nghĩa là còn chỗ để phát triển nhiều hơn, còn nếu
                chúng đóng lại thì tốc độ tăng trưởng đang chậm lại, điều này
                chỉ tạo nên khái niệm phát triển ít hơn.
              </Typography.Paragraph>
              <Typography.Paragraph className={styles.paragraph}>
                Kines tạo ra một môi trường tăng trưởng giúp tối đa hóa tiềm
                năng tăng trưởng thông qua thử nghiệm tăng trưởng chi tiết.
              </Typography.Paragraph>
            </div>
            <div className={styles.right}>
              <img src={imgGiraffe2} alt="giraffe 2" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
