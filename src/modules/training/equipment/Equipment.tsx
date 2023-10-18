import { Image, Typography } from "antd";
import { useTranslation } from "react-i18next";

import cost02 from "@/assets/img/training/equipment/cost_img02.jpg";
import Sidebar from "@/modules/shared/sidebar/Sidebar";

import { renderAboutMenus } from "../utils/render";
import styles from "./scss/equipment.module.scss";

export default function Equipment() {
  const { t } = useTranslation();

  const items = renderAboutMenus(t);

  const renderChildren = () => {
    return (
      <div className={styles.container}>
        <Typography.Title level={2} className={styles.title}>
          Phương pháp tăng trưởng chiều cao Kines! Làm thế nào để tôi phát triển
          hơn?
        </Typography.Title>
        <div className={styles.titleDivider}></div>
        <Typography.Title level={4} className={styles.titleSub}>
          Thiết bị đặc biệt của Kines được sử dụng để cải thiện các chức năng
          của cơ thể và giúp bạn cao hơn.
        </Typography.Title>
        <div style={{ textAlign: "justify" }}>
          <Typography.Paragraph>
            Dưới sự hướng dẫn của các chuyên gia trong từng lĩnh vực, các chức
            năng của cơ thể được cải thiện bằng cách sử dụng các thiết bị đặc
            biệt phù hợp với đặc điểm từng cá nhân .
          </Typography.Paragraph>
          <Image
            src={cost02}
            preview={false}
            wrapperStyle={{ width: "100%" }}
          />
        </div>
      </div>
    );
  };

  return <Sidebar children={renderChildren()} items={items} />;
}
