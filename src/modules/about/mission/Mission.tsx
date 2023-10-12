import { Typography } from "antd";
import { useTranslation } from "react-i18next";

import Sidebar from "@/modules/shared/sidebar/Sidebar";

import { renderAboutMenus } from "../utils/render";
import styles from "./scss/mission.module.scss";

export default function Mission() {
  const { t } = useTranslation();

  const items = renderAboutMenus(t);

  const renderChildren = () => {
    return (
      <div className={styles.caption}>
        <Typography.Title level={2} className={styles.title}>
          Tầm nhìn
        </Typography.Title>
        <Typography.Text className={styles.content} style={{ maxWidth: 649 }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed odit
          doloribus magnam non quaerat at repellendus dolore corporis ipsa
          dolorum, error nisi maiores esse laudantium, eaque quam et quia
          consequuntur.
          <br />
          <br />
        </Typography.Text>
        <Typography.Title level={2} className={styles.title}>
          Sứ mệnh
        </Typography.Title>
        <Typography.Text className={styles.content} style={{ maxWidth: 649 }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed odit
          doloribus magnam non quaerat at repellendus dolore corporis ipsa
          dolorum, error nisi maiores esse laudantium, eaque quam et quia
          consequuntur.
          <br />
          <br />
        </Typography.Text>
      </div>
    );
  };

  return <Sidebar children={renderChildren()} items={items} />;
}
