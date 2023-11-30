import { Typography } from "antd";
import { motion } from "framer-motion";

import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import styles from "./scss/standing.module.scss";

export default function Height(): JSX.Element {
  return (
    <>
      <Title />

      <Breadcrumb />

      <section className={styles.contentWrap}>
        <div className="inner">
          <motion.div
            initial={{ x: -50, opacity: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.headerWrap}
          >
            <Typography.Title level={3}>
              Tư thế khom lưng cản trở sự phát triển chiều cao!
            </Typography.Title>
            <Typography.Paragraph className={styles.headerParagraph}>
              Nếu bạn có tư thế xấu, người ta thường cho rằng xương của bạn
              không thẳng hàng. Tuy nhiên, trên thực tế, sự cân bằng của các cơ
              giữ xương và khớp bị rối loạn, gây ra tư thế xấu. Để khắc phục
              điều này, bạn cần đo và phân tích chi tiết từ lòng bàn chân đến
              đỉnh đầu, đồng thời có thói quen sinh hoạt phù hợp và sự trợ giúp
              của chuyên gia để duy trì tư thế đúng.
            </Typography.Paragraph>

            <Typography.Paragraph className={styles.headerParagraph}>
              Để trẻ phát triển và sống khỏe mạnh, Kines tăng cường chức năng cơ
              bằng thiết bị đẳng vận động dành cho cơ yếu, tập thể dục cho cơ bị
              cứng và huấn luyện phản hồi thần kinh để giảm căng thẳng, cũng như
              CST (Liệu pháp Cranio-Sacral), PRT (Liệu pháp Thư giãn Tư thế), và
              MET. Thư giãn cơ và mất cân bằng tư thế được cải thiện thông qua
              nhiều phương pháp điều chỉnh khác nhau như (kỹ thuật năng lượng
              cơ), liệu pháp giải phóng cân cơ và liệu pháp thư giãn cơ quan.
            </Typography.Paragraph>
          </motion.div>
        </div>
      </section>
    </>
  );
}
