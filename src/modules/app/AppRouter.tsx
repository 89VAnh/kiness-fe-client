import { ProLayoutProps } from "@ant-design/pro-components";
import { TFunction } from "i18next";
import { Link } from "react-router-dom";

import {
  ADVISE_URL,
  BENEFIT_GROWTH_URL,
  EXAM_GROWTH_URL,
  FEE_URL,
  GROWTH_FORECAST_URL,
  GROWTH_URL,
  HOME_URL,
  HORMONE_URL,
  INFO_GROWTH_URL,
  INTRO_URL,
  MISSION_URL,
  NEWS_URL,
  POINT_GROWTH_URL,
  QUALITY_URL,
  RANGE_GROWTH_URL,
  REASONS_GROWTH_URL,
  SCHEDULE_TRAIN_URL,
  STAGES_GROWTH_URL,
  SUPPORT_EQUIP_URL,
  TESTING_URL,
  TRAINING_PROGRAM_URL,
  TRAINING_URL,
  WIKI_URL,
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
        path: WIKI_URL,
        name: (
          <Link to={WIKI_URL} onClick={(e) => e.preventDefault()}>
            {t("nav.wiki.title")}
          </Link>
        ),
        routes: renderRoutes(
          t,
          [
            STAGES_GROWTH_URL,
            BENEFIT_GROWTH_URL,
            HORMONE_URL,
            REASONS_GROWTH_URL,
            POINT_GROWTH_URL,
            RANGE_GROWTH_URL,
            INFO_GROWTH_URL,
            EXAM_GROWTH_URL,
          ],
          "wiki",
          true,
        ),
      },
      {
        // path: TESTING_URL,
        path: "/testing",
        name: (
          <Link to={TESTING_URL} onClick={(e) => e.preventDefault()}>
            {t("nav.test.title")}
          </Link>
        ),
        routes: renderRoutes(
          t,
          [GROWTH_FORECAST_URL, SCHEDULE_TRAIN_URL, ADVISE_URL],
          "test",
          true,
        ),
      },
    ],
  };
};

export const renderRoutes = (
  t: TFunction,
  listUrls: string[],
  prefixLocale: string,
  disabled: boolean = false,
) => {
  return listUrls.map((url) => ({
    key: getKeyFromPath(url),
    path: url,
    title: t(`nav.${prefixLocale}.children.${getKeyFromPath(url)}`),
    name: (
      <Link to={url} onClick={(e) => disabled && e.preventDefault()}>
        {t(`nav.${prefixLocale}.children.${getKeyFromPath(url)}`)}
      </Link>
    ),
  }));
};
