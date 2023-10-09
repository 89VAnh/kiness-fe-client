import { Image } from "antd";

import banner from "@/assets/img/banner.png";

import styles from "./scss/banner.module.scss";

export default function Banner(): JSX.Element {
  return (
    <div className={styles.container}>
      <Image
        wrapperClassName={styles.img}
        className={styles.img}
        preview={false}
        src={banner}
      />
    </div>
  );
}
