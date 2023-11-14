import { Carousel, Image, Typography } from "antd";

import hero01 from "@/assets/img/hero/hero01.png";
import hero02 from "@/assets/img/hero/hero02.jpg";
import hero03 from "@/assets/img/hero/hero03.png";

import styles from "./scss/hero.module.scss";

export default function Hero(): JSX.Element {
  return (
    <div className={styles.container}>
      <Carousel autoplay autoplaySpeed={3000} draggable>
        <Image
          wrapperClassName={styles.img}
          className={styles.img}
          preview={false}
          src={hero01}
        />
        <Image
          wrapperClassName={styles.img}
          className={styles.img}
          preview={false}
          src={hero02}
        />
        <Image
          wrapperClassName={styles.img}
          className={styles.img}
          preview={false}
          src={hero03}
        />
      </Carousel>
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
