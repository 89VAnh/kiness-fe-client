import { ProLayoutProps } from "@ant-design/pro-components";
import { TFunction } from "i18next";
import { Link } from "react-router-dom";

import { HOME_URL } from "@/urls";

export const appRoute = (t: TFunction): ProLayoutProps["route"] => {
  return {
    path: HOME_URL,
    routes: [
      {
        path: HOME_URL,
        name: <Link to={HOME_URL}>{t("nav.about")}</Link>,
      },
      {
        path: HOME_URL,
        name: <Link to={HOME_URL}>{t("nav.training")}</Link>,
      },
      {
        path: HOME_URL,
        name: <Link to={HOME_URL}>{t("nav.wiki")}</Link>,
      },
      {
        path: HOME_URL,
        name: <Link to={HOME_URL}>{t("nav.test")}</Link>,
      },
    ],
  };
};
