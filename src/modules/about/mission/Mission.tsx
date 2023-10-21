import { Spin } from "antd";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { useGetPageById } from "@/loader/page.loader";
import Sidebar from "@/modules/shared/sidebar/Sidebar";
import { getLastPath } from "@/utils/format-string";

import { renderAboutMenus } from "../utils/render";

export default function Mission() {
  const { t } = useTranslation();
  const location = useLocation();

  const page = useGetPageById({ id: getLastPath(location.pathname) });

  const items = renderAboutMenus(t);

  const renderChildren = () => {
    return page.isLoading ? (
      <Spin />
    ) : (
      <div
        style={{ fontSize: 16, lineHeight: 2 }}
        dangerouslySetInnerHTML={{ __html: page.data?.content }}
      ></div>
    );
    // <div className={styles.caption}>
    //   <Typography.Title level={2} className={styles.title}>
    //     Tầm nhìn
    //   </Typography.Title>
    //   <Typography.Text className={styles.content} style={{ maxWidth: 649 }}>
    //     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed odit
    //     doloribus magnam non quaerat at repellendus dolore corporis ipsa
    //     dolorum, error nisi maiores esse laudantium, eaque quam et quia
    //     consequuntur.
    //     <br />
    //     <br />
    //   </Typography.Text>
    //   <Typography.Title level={2} className={styles.title}>
    //     Sứ mệnh
    //   </Typography.Title>
    //   <Typography.Text className={styles.content} style={{ maxWidth: 649 }}>
    //     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed odit
    //     doloribus magnam non quaerat at repellendus dolore corporis ipsa
    //     dolorum, error nisi maiores esse laudantium, eaque quam et quia
    //     consequuntur.
    //     <br />
    //     <br />
    //   </Typography.Text>
    // </div>
  };

  return <Sidebar children={renderChildren()} items={items} />;
}
