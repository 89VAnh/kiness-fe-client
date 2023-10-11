import { Image } from "antd";

import intro_banner from "@/assets/img/intro_banner.png";

import styles from "./scss/hero.module.scss";

export default function Hero(): JSX.Element {
  return (
    <div className={styles.container}>
      <Image
        wrapperClassName={styles.img}
        className={styles.img}
        preview={false}
        src={intro_banner}
      />
    </div>
  );
}
