import { ProLayoutProps } from "@ant-design/pro-components";
import { TFunction } from "i18next";
import { Link } from "react-router-dom";

import {
  GROWTH_FORECAST_URL,
  GROWTH_URL,
  HOME_URL,
  INTRO_URL,
  NEWS_URL,
  STAGES_GROWTH_URL,
} from "@/urls";

export const appRoute = (t: TFunction): ProLayoutProps["route"] => {
  return {
    path: HOME_URL,
    routes: [
      {
        path: INTRO_URL,
        name: <Link to={INTRO_URL}>{t("nav.about.title")}</Link>,
        routes: renderRoutes(
          t,
          [NEWS_URL, NEWS_URL, NEWS_URL, NEWS_URL, NEWS_URL],
          "about",
        ),
      },
      {
        path: GROWTH_URL,
        name: <Link to={GROWTH_URL}>{t("nav.training.title")}</Link>,
        routes: renderRoutes(
          t,
          [GROWTH_URL, GROWTH_URL, GROWTH_URL, GROWTH_URL, GROWTH_URL],
          "training",
        ),
      },
      {
        path: STAGES_GROWTH_URL,
        name: <Link to={STAGES_GROWTH_URL}>{t("nav.wiki.title")}</Link>,
        routes: renderRoutes(
          t,
          [
            STAGES_GROWTH_URL,
            STAGES_GROWTH_URL,
            STAGES_GROWTH_URL,
            STAGES_GROWTH_URL,
            STAGES_GROWTH_URL,
          ],
          "wiki",
        ),
      },
      {
        path: GROWTH_FORECAST_URL,
        name: <Link to={GROWTH_FORECAST_URL}>{t("nav.test.title")}</Link>,
        routes: renderRoutes(
          t,
          [
            GROWTH_FORECAST_URL,
            GROWTH_FORECAST_URL,
            GROWTH_FORECAST_URL,
            GROWTH_FORECAST_URL,
            GROWTH_FORECAST_URL,
          ],
          "wiki",
        ),
      },
    ],
  };
};

export const renderRoutes = (
  t: TFunction,
  listUrls: string[],
  prefixLocale: string,
  start: number = 1,
) => {
  return listUrls.map((url, index) => ({
    key: start + index,
    path: url,
    title: t(`nav.${prefixLocale}.children.${start + index}`),
    name: (
      <Link to={url}>{t(`nav.${prefixLocale}.children.${start + index}`)}</Link>
    ),
  }));
};
