import { Typography } from "antd";
import { motion } from "framer-motion";

import imgProgram from "@/assets/img/others/img_program_center.png";
import imgGuarantee from "@/assets/img/program/img_guarantee.png";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import styles from "./scss/growth-system.module.scss";

export default function GrowthSystem(): JSX.Element {
  return (
    <>
      <Title />

      <Breadcrumb />

      <section className={`${styles.contentWrap}`}>
        <div className="inner">
          <motion.div
            initial={{ y: -50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography.Title level={4} className={styles.growthTitle}>
              Từ năm 1999, Kines đã tích lũy bí quyết tăng trưởng!
              <br />
              <span className={`text-underline`}>
                Tỷ lệ thành công của khóa mục tiêu 92%
              </span>
            </Typography.Title>
          </motion.div>

          <motion.div
            initial={{ y: -50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography.Paragraph className={styles.info}>
              <Typography.Text>
                Chúng tôi triển khai hệ thống đảm bảo trách nhiệm tăng trưởng
                bằng cách sử dụng các kỹ thuật tăng trưởng độc đáo của Kines.
              </Typography.Text>
              <br />
              <Typography.Text>
                Hãy khỏe mạnh bằng cách phục hồi chức năng thể chất và cải thiện
                thói quen sinh hoạt mà không cần dùng thuốc! Chúng tôi hứa sẽ
                giúp con bạn phát triển chiều cao!
              </Typography.Text>
            </Typography.Paragraph>
          </motion.div>

          <motion.div
            initial={{ y: -50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={imgGuarantee} alt="guarantee" />
          </motion.div>
        </div>
      </section>

      <section className={`${styles.programArea}`}>
        <div className="inner">
          <motion.div
            initial={{ y: -50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.titleWrap}
          >
            <Typography.Title level={4}>
              Đảm bảo trách nhiệm tăng trưởng của Kines là gì?
            </Typography.Title>
            <Typography.Paragraph className={styles.subTitle}>
              Hệ thống đảm bảo trách nhiệm tăng trưởng là chương trình đặt ra
              chiều cao mục tiêu sau khi kiểm tra tăng trưởng chi tiết và <br />{" "}
              so sánh chiều cao tăng trưởng trong một năm với chiều cao mục tiêu
              bằng phương pháp tăng trưởng Kines <br /> để xác định và chịu
              trách nhiệm về sự thành công. <br /> (Phí giáo dục = 50% số tiền
              đăng ký)
            </Typography.Paragraph>
          </motion.div>

          <div className={styles.way}>
            <motion.div
              initial={{ x: -50, opacity: 0.5 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={styles.left}
            >
              <Typography.Text>
                Khi đạt dưới 70% chiều cao mục tiêu
              </Typography.Text>
              <Typography.Title level={5}>
                Hoàn trả toàn bộ phí đào tạo
              </Typography.Title>
            </motion.div>
            <div className={styles.center}>
              <img src={imgProgram} alt="center" />
            </div>
            <motion.div
              initial={{ x: 50, opacity: 0.5 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={styles.right}
            >
              <Typography.Text>
                Khi đạt được chiều cao mục tiêu trên 70% ~ dưới 100%
              </Typography.Text>
              <Typography.Title level={5}>
                Chúng tôi sẽ kéo dài thời gian để tăng chiều cao mục tiêu của
                bạn.
              </Typography.Title>
            </motion.div>
          </div>
          <span>
            * Loại trừ: Tiêu chuẩn tăng trưởng dưới 10%, người đang dùng thuốc
          </span>
        </div>
      </section>
    </>
  );
}
