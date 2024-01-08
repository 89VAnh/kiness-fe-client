import { Typography } from "antd";

import CurrentForm from "@/modules/expected/current/components/CurrentForm";
import DivTransition from "@/modules/shared/transition/DivTransition";

import styles from "./scss/calculate-height.module.scss";

export default function CalculateHeight(): JSX.Element {
  return (
    <section className={styles.mainChecklist}>
      <div className="inner" style={{ position: "relative" }}>
        <div className={styles.titleWrap}>
          <DivTransition className={styles.mainTitle}>
            <Typography.Title level={2} className={styles.title}>
              Dự đoán chiều cao của trẻ khi trưởng thành
            </Typography.Title>
            {/* <Typography.Paragraph>
              Nếu bất kỳ điều nào trong số này áp dụng cho bạn, vui lòng tham
              khảo ý kiến ​​​​của một chuyên gia quan trọng.
            </Typography.Paragraph> */}
          </DivTransition>
        </div>

        <CurrentForm styles={styles} />
      </div>
    </section>
  );
}
