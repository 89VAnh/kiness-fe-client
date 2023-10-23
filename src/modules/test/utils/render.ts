import { TFunction } from "i18next";

import { renderRoutes } from "@/modules/app/AppRouter";
import { ADVISE_URL, GROWTH_FORECAST_URL, SCHEDULE_TRAIN_URL } from "@/urls";

export const renderTestMenu = (t: TFunction) => {
  const items = [
    ...renderRoutes(
      t,
      [GROWTH_FORECAST_URL, SCHEDULE_TRAIN_URL, ADVISE_URL],
      "test",
    )?.map((route) => ({
      key: route.key || "",
      label: route.title,
      url: route.path,
    })),
  ];

  return items;
};
