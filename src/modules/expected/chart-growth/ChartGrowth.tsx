import { Typography } from "antd";

import familyImg from "@/assets/img/expected/img_family.png";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import DivTransition from "@/modules/shared/transition/DivTransition";

import styles from "./scss/chart-growth.module.scss";

export default function ChartGrowth(): JSX.Element {
  return (
    <>
      <Title />

      <Breadcrumb />

      <section className={styles.contentWrap}>
        <div className="inner">
          <div className={styles.headerWrap}>
            <DivTransition position="x" className={styles.headerTitle}>
              <Typography.Title level={2}>
                Chiều cao cũng là một kỹ năng.
                <br />
                <b>“Bạn có thể phát triển nhiều như bạn biết”</b>
              </Typography.Title>

              <Typography.Paragraph className={styles.headerParagraph}>
                Người ta nói rằng điểm số của trẻ bị ảnh hưởng trực tiếp bởi kỹ
                năng thông tin của mẹ phải không?
              </Typography.Paragraph>
              <Typography.Paragraph className={styles.headerParagraph}>
                Vậy bạn có biết rằng tăng chiều cao đồng nghĩa với việc có được
                môi trường thuận lợi để học tập tốt?
              </Typography.Paragraph>
              <Typography.Paragraph className={styles.headerParagraph}>
                Bây giờ bạn có thể tăng chiều cao của mình nhiều như bạn biết.
              </Typography.Paragraph>
            </DivTransition>
            <DivTransition position="x" point={50} className={styles.img}>
              <img src={familyImg} alt="doctor" />
            </DivTransition>
          </div>

          <div className={styles.genWrap}>
            <Typography.Title level={5} className={styles.title}>
              Giá trị tiêu chuẩn cho sự phát triển của thanh niên Việt Nam (nam)
            </Typography.Title>

            <Typography.Title level={5} className={styles.title}>
              Giá trị tiêu chuẩn cho sự phát triển thanh niên ở Việt Nam (nữ)
            </Typography.Title>
          </div>
        </div>
      </section>
    </>
  );
}
