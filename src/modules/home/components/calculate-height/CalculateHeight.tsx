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
              Dự đoán chiều cao của trẻ{" "}
              <span className="font-mint">khi trưởng thành</span>
            </Typography.Title>
            <Typography.Paragraph>
              Dựa trên những thông tin tăng trưởng hiện tại của trẻ, Kiness dự
              đoán chiều cao của trẻ khi trưởng thành (18 tuổi)
            </Typography.Paragraph>
          </DivTransition>
        </div>

        <CurrentForm styles={styles} />
      </div>
    </section>
  );
}
