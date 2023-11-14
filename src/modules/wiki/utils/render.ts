import { TFunction } from "i18next";

import { renderRoutes } from "@/modules/app/AppRouter";
import {
  BENEFIT_GROWTH_URL,
  EXAM_GROWTH_URL,
  HORMONE_URL,
  INFO_GROWTH_URL,
  POINT_GROWTH_URL,
  RANGE_GROWTH_URL,
  REASONS_GROWTH_URL,
  STAGES_GROWTH_URL,
} from "@/urls";

export const renderWikiMenu = (t: TFunction) => {
  const items = [
    ...renderRoutes(
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
    )?.map((route) => ({
      key: route.key || "",
      label: route.title,
      url: route.path,
    })),
  ];

  return items;
};
