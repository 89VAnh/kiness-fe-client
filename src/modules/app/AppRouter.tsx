import { ProLayoutProps } from "@ant-design/pro-components";
import { TFunction } from "i18next";
import { Link } from "react-router-dom";

import {
  FEE_URL,
  GROWTH_FORECAST_URL,
  GROWTH_URL,
  HOME_URL,
  INTRO_URL,
  MISSION_URL,
  NEWS_URL,
  QUALITY_URL,
  STAGES_GROWTH_URL,
  SUPPORT_EQUIP_URL,
  TRAINING_PROGRAM_URL,
  TRAINING_URL,
} from "@/urls";
import { getKeyFromPath } from "@/utils/format-string";

export const appRoute = (t: TFunction): ProLayoutProps["route"] => {
  return {
    path: HOME_URL,
    routes: [
      {
        path: INTRO_URL,
        name: <Link to={INTRO_URL}>{t("nav.about.title")}</Link>,
        routes: renderRoutes(t, [NEWS_URL, MISSION_URL], "about"),
      },
      {
        path: TRAINING_URL,
        name: <Link to={TRAINING_URL}>{t("nav.training.title")}</Link>,
        routes: renderRoutes(
          t,
          [
            GROWTH_URL,
            SUPPORT_EQUIP_URL,
            TRAINING_PROGRAM_URL,
            FEE_URL,
            QUALITY_URL,
          ],
          "training",
        ),
      },
      {
        path: STAGES_GROWTH_URL,
        name: <Link to={STAGES_GROWTH_URL}>{t("nav.wiki.title")}</Link>,
        routes: renderRoutes(t, [STAGES_GROWTH_URL], "wiki"),
      },
      {
        path: GROWTH_FORECAST_URL,
        name: <Link to={GROWTH_FORECAST_URL}>{t("nav.test.title")}</Link>,
        routes: renderRoutes(t, [GROWTH_FORECAST_URL], "test"),
      },
    ],
  };
};

export const renderRoutes = (
  t: TFunction,
  listUrls: string[],
  prefixLocale: string,
) => {
  return listUrls.map((url) => ({
    key: getKeyFromPath(url),
    path: url,
    title: t(`nav.${prefixLocale}.children.${getKeyFromPath(url)}`),
    name: (
      <Link to={url}>
        {t(`nav.${prefixLocale}.children.${getKeyFromPath(url)}`)}
      </Link>
    ),
  }));
};
