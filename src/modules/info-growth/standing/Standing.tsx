import { Typography } from "antd";
import { motion } from "framer-motion";

import postureImg1 from "@/assets/img/info-growth/img_posture01.png";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import DivTransition from "@/modules/shared/transition/DivTransition";

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
      <section className={`${styles.contentWrap} ${styles.postureArea}`}>
        <div className="inner">
          <Typography.Title level={5} className={styles.postureTitle}>
            Cổ thẳng (cổ rùa)/Vai tròn
          </Typography.Title>

          <DivTransition className={styles.img}>
            <img src={postureImg1} alt="posture-1" />
          </DivTransition>

          <DivTransition className={styles.box}>
            <span>
              Trong tình huống các cơ xung quanh cột sống bị suy yếu do ít vận
              động, trẻ ít vận động do học tập hoặc sử dụng thiết bị di động
              thường phát triển cổ thẳng (cổ rùa) và tư thế vai khom.
            </span>
            <br />
            <br />
            <span>
              Khi đầu cúi về phía trước so với đường cột sống, các cơ ở cổ và
              vai dễ bị cứng và mỏi do phải vật lộn để chịu đựng sức nặng của
              đầu, trong các tình huống các cơ xung quanh cột sống bị suy yếu do
              thiếu thể lực. khối lượng lớn, thời gian học tập hoặc sử dụng
              thiết bị di động tăng lên... Ở trẻ em, cùng với cổ thẳng (cổ rùa),
              vai cong vào trong, làm tăng căng thẳng về thể chất và cản trở sự
              phát triển chiều cao. Nếu tình trạng nặng hơn có thể tác động tiêu
              cực đến việc học và cuộc sống hàng ngày, chẳng hạn như đau đầu và
              giảm khả năng tập trung trong não do lưu lượng máu lên não giảm.
            </span>
            <br />
            <br />
            <span>
              Trong trường hợp vai cong, khoảng trống giữa các xương cánh luôn
              bị kéo lại, điều này không chỉ làm giảm khả năng vận động của chóp
              xoay mà còn khiến vai bị đông cứng khi còn trẻ và bị tê ở cánh
              tay. Sự mất cân bằng ở cổ và vai khiến cột sống ngực bị cong, làm
              rối loạn tín hiệu và sự tuần hoàn của dây thần kinh trung ương và
              các mạch máu lớn xung quanh cột sống, cản trở sự phát triển và
              trong trường hợp nghiêm trọng, chất lượng cuộc sống và khả năng
              học tập bị giảm sút do đến nỗi đau.
            </span>
            <br />
            <br />
            <span>
              Kines là một thiết bị isokinetic không chỉ tăng cường chức năng cơ
              cột sống một cách nhanh chóng, an toàn và thư giãn các cơ cứng để
              tăng lưu lượng máu não mà còn tạo điều kiện thuận lợi cho dòng
              chảy của hệ thần kinh trung ương cơ bản thông qua CST, dạy và duy
              trì tư thế đúng trong cuộc sống hàng ngày.
            </span>
          </DivTransition>
        </div>
      </section>
    </>
  );
}
