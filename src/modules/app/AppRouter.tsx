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
        routes: [
          {
            path: NEWS_URL,
            name: <Link to={NEWS_URL}>{t("nav.about.children.1")}</Link>,
          },
          {
            path: NEWS_URL,
            name: <Link to={NEWS_URL}>{t("nav.about.children.2")}</Link>,
          },
          {
            path: NEWS_URL,
            name: <Link to={NEWS_URL}>{t("nav.about.children.3")}</Link>,
          },
          {
            path: NEWS_URL,
            name: <Link to={NEWS_URL}>{t("nav.about.children.4")}</Link>,
          },
          {
            path: NEWS_URL,
            name: <Link to={NEWS_URL}>{t("nav.about.children.5")}</Link>,
          },
        ],
      },
      {
        path: GROWTH_URL,
        name: <Link to={GROWTH_URL}>{t("nav.training.title")}</Link>,
        routes: [
          {
            path: GROWTH_URL,
            name: <Link to={GROWTH_URL}>{t("nav.training.children.1")}</Link>,
          },
          {
            path: GROWTH_URL,
            name: <Link to={GROWTH_URL}>{t("nav.training.children.2")}</Link>,
          },
          {
            path: GROWTH_URL,
            name: <Link to={GROWTH_URL}>{t("nav.training.children.3")}</Link>,
          },
          {
            path: GROWTH_URL,
            name: <Link to={GROWTH_URL}>{t("nav.training.children.4")}</Link>,
          },
          {
            path: GROWTH_URL,
            name: <Link to={GROWTH_URL}>{t("nav.training.children.5")}</Link>,
          },
        ],
      },
      {
        path: STAGES_GROWTH_URL,
        name: <Link to={STAGES_GROWTH_URL}>{t("nav.wiki")}</Link>,
        routes: [
          {
            path: STAGES_GROWTH_URL,
            name: (
              <Link to={STAGES_GROWTH_URL}>{t("nav.training.children.1")}</Link>
            ),
          },
          {
            path: STAGES_GROWTH_URL,
            name: (
              <Link to={STAGES_GROWTH_URL}>{t("nav.training.children.2")}</Link>
            ),
          },
          {
            path: STAGES_GROWTH_URL,
            name: (
              <Link to={STAGES_GROWTH_URL}>{t("nav.training.children.3")}</Link>
            ),
          },
          {
            path: STAGES_GROWTH_URL,
            name: (
              <Link to={STAGES_GROWTH_URL}>{t("nav.training.children.4")}</Link>
            ),
          },
          {
            path: STAGES_GROWTH_URL,
            name: (
              <Link to={STAGES_GROWTH_URL}>{t("nav.training.children.5")}</Link>
            ),
          },
        ],
      },
      {
        path: GROWTH_FORECAST_URL,
        name: <Link to={GROWTH_FORECAST_URL}>{t("nav.test")}</Link>,
        routes: [
          {
            path: GROWTH_FORECAST_URL,
            name: (
              <Link to={GROWTH_FORECAST_URL}>
                {t("nav.training.children.1")}
              </Link>
            ),
          },
          {
            path: GROWTH_FORECAST_URL,
            name: (
              <Link to={GROWTH_FORECAST_URL}>
                {t("nav.training.children.2")}
              </Link>
            ),
          },
          {
            path: GROWTH_FORECAST_URL,
            name: (
              <Link to={GROWTH_FORECAST_URL}>
                {t("nav.training.children.3")}
              </Link>
            ),
          },
          {
            path: GROWTH_FORECAST_URL,
            name: (
              <Link to={GROWTH_FORECAST_URL}>
                {t("nav.training.children.4")}
              </Link>
            ),
          },
          {
            path: GROWTH_FORECAST_URL,
            name: (
              <Link to={GROWTH_FORECAST_URL}>
                {t("nav.training.children.5")}
              </Link>
            ),
          },
        ],
      },
    ],
  };
};
