import { Spin, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import backGroundImg from "@/assets/img/title_background-image.png";
import { useGetPageById } from "@/loader/page.loader";
import Sidebar from "@/modules/shared/sidebar/Sidebar";
import { getLastPath } from "@/utils/format-string";

import styles from "./scss/templatePage.module.scss";

export default function TemplatePage(renderMenu: Function) {
  const { t } = useTranslation();
  const location = useLocation();

  const items = renderMenu(t);

  const page = useGetPageById({ id: getLastPath(location.pathname) });

  const renderChildren = () => {
    return (
      <>
        {page.data?.page_title && (
          <Typography.Title
            level={2}
            className={styles.title}
            style={{
              background: `url(${backGroundImg}) left bottom no-repeat`,
            }}
          >
            {page.data?.page_title}
          </Typography.Title>
        )}
        {page.isLoading ? (
          <Spin />
        ) : (
          <div
            style={{ fontSize: 16, lineHeight: 2 }}
            dangerouslySetInnerHTML={{ __html: page.data?.content }}
          ></div>
        )}
      </>
    );
  };

  return <Sidebar children={renderChildren()} items={items} />;
}
