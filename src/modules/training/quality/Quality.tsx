import { Image, Typography } from "antd";
import { useTranslation } from "react-i18next";

import quality01 from "@/assets/img/training/quality/quality01.jpg";
import quality02 from "@/assets/img/training/quality/quality02.jpg";
import Sidebar from "@/modules/shared/sidebar/Sidebar";

import { renderAboutMenus } from "../utils/render";
import styles from "./scss/quality.module.scss";

export default function Quality() {
  const { t } = useTranslation();

  const items = renderAboutMenus(t);

  const renderChildren = () => {
    return (
      <div className={styles.container}>
        <Typography.Title level={2} className={styles.title}>
          Hệ thống đảm bảo trách nhiệm tăng trưởng K i NESS
        </Typography.Title>
        <div className={styles.titleDivider}></div>
        <Typography.Title level={4} className={styles.titleSub}>
          Kines đã tích lũy bí quyết tăng trưởng trong 20 năm! Tỷ lệ khóa mục
          tiêu thành công là 90%! Chúng tôi triển khai hệ thống đảm bảo trách
          nhiệm tăng trưởng bằng cách sử dụng các kỹ thuật tăng trưởng độc đáo
          của Kines .
        </Typography.Title>
        <div className={styles.steps}>
          <Typography.Title level={3} className={styles.btnTitle}>
            Đảm bảo trách nhiệm tăng
          </Typography.Title>
          <Image src={quality01} preview={false} />
          <Typography.Title level={3} className={styles.btnTitle}>
            Chương trình tăng trưởng{" "}
          </Typography.Title>
          <Image src={quality02} preview={false} />
        </div>
      </div>
    );
  };

  return <Sidebar children={renderChildren()} items={items} />;
}
