import { Typography } from "antd";
import { useTranslation } from "react-i18next";

import Sidebar from "@/modules/shared/sidebar/Sidebar";

import { renderUserMenus } from "../utils/render";
import styles from "./scss/terms-use.module.scss";

export default function TermsUse() {
  const { t } = useTranslation();

  const items = renderUserMenus(t);

  const renderChildren = () => {
    return (
      <div className={styles.caption}>
        <div className={styles.caption}>
          <Typography.Title level={2} className={styles.title}>
            {t("nav.user.children.terms-use")}
          </Typography.Title>
          <Typography.Text className={styles.content}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            eveniet in nostrum accusantium, doloremque nobis. Voluptates
            corporis sint nobis pariatur at, ratione numquam voluptatibus
            voluptas earum culpa quibusdam perferendis aperiam. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Velit doloremque cumque
            ipsam ducimus fuga pariatur et aut inventore minus commodi! Id
            dolorum repudiandae corporis vitae nobis, debitis fuga numquam
            dicta.
          </Typography.Text>
        </div>
      </div>
    );
  };

  return <Sidebar children={renderChildren()} items={items} />;
}
