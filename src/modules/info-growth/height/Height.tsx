import { Button, Typography } from "antd";
import { motion } from "framer-motion";

import doctorImg from "@/assets/img/info-growth/img_growth_doctor.png";
import lineImg from "@/assets/img/info-growth/img_rate_graph.png";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import { dataHeight } from "./data/data-fake";
import styles from "./scss/height.module.scss";

export default function Height(): JSX.Element {
  return (
    <>
      <Title />

      <Breadcrumb />

      <section className={styles.contentWrap}>
        <div className="inner">
          <div className={styles.headerWrap}>
            <motion.div
              initial={{ x: -50, opacity: 0.5 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={styles.img}
            >
              <img src={doctorImg} alt="doctor" />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0.5 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={styles.headerTitle}
            >
              <Typography.Title level={2}>
                Chiều cao cũng là một kỹ năng.
                <br />
                <b className="font-mint">
                  “Bạn có thể phát triển nhiều như bạn biết.”
                </b>
              </Typography.Title>

              <Typography.Paragraph className={styles.headerParagraph}>
                Người ta nói rằng điểm số của trẻ bị ảnh hưởng trực tiếp bởi kỹ
                năng thông tin của mẹ phải không? Vậy bạn có biết rằng tăng
                chiều cao đồng nghĩa với việc có được môi trường thuận lợi để
                học tập tốt không ? Bây giờ bạn có thể tăng chiều cao của mình
                nhiều như bạn biết.
              </Typography.Paragraph>

              <Typography.Paragraph className={styles.headerParagraph}>
                Kines quản lý sự tăng trưởng bằng cách chia giai đoạn tăng
                trưởng và nếu tốc độ tăng trưởng thấp, nó có thể phát triển lên
                loại cao hơn bằng cách nhận sự quản lý của Kines. Nếu bạn được
                quản lý thể chất trước tuổi dậy thì, chiều cao dự đoán của bạn
                sẽ tăng thêm 10 cm.
              </Typography.Paragraph>
            </motion.div>
          </div>

          <motion.div
            initial={{ x: -50, opacity: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.yellowBox}
          >
            <Button type="primary" className={styles.boxButton}>
              Biểu đồ tốc độ tăng trưởng của con người
            </Button>

            <img src={lineImg} alt="line chart" />
          </motion.div>
        </div>
        <section className={styles.listStep}>
          <div className="inner">
            {dataHeight.map((item) => (
              <div key={item.id} className={styles.step}>
                <div className={styles.stepBadge}>{item.id}</div>
                <div>
                  <Typography.Title level={5}>{item.title}</Typography.Title>
                  {item.description.map((item, index) => (
                    <Typography.Paragraph key={index} className={styles.txt}>
                      {item}
                    </Typography.Paragraph>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
