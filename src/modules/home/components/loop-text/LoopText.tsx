import { Typography } from "antd";

import styles from "./scss/loop-text.module.scss";

export default function LoopText(): JSX.Element {
  return (
    <div className={styles.loopContainer}>
      {[...Array(4)].map((_, index) => (
        <div className={styles.loopText} key={index}>
          <Typography.Text strong style={{ fontSize: 16 }}>
            Nếu bạn bắt đầu quản lý{" "}
          </Typography.Text>
          <Typography.Text style={{ fontSize: 16 }}>
            con mình từ 8 đến 10 tuổi, trẻ có thể phát triển đến chiều cao như
            mong muốn.
          </Typography.Text>
        </div>
      ))}
    </div>
  );
}
