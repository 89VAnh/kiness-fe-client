import { Image, Typography } from "antd";

import banner from "@/assets/img/banner.png";

import styles from "./scss/hero.module.scss";

export default function Hero(): JSX.Element {
  return (
    <div className={styles.container}>
      <Image
        wrapperClassName={styles.img}
        className={styles.img}
        preview={false}
        src={banner}
      />
      <div className={styles.caption}>
        <Typography.Title level={1} className={styles.title}>
          KINESS Việt Nam
        </Typography.Title>
        <Typography.Title level={2} className={styles.subTitle}>
          Chiều cao của con tôi có thể phát triển thêm bao nhiêu ?
        </Typography.Title>
        <Typography.Text className={styles.content}>
          Thông qua thử nghiệm độ chính xác tăng trưởng Kiness Nếu môi trường
          tăng trưởng được cải thiện bằng phương pháp tăng trưởng vận động trước
          tuổi dậy thì, thì ngay cả khi chiều cao của cha mẹ thấp, con cái vẫn
          có thể trở nên cao lớn.
        </Typography.Text>
      </div>
    </div>
  );
}
