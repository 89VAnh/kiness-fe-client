import { TFunction } from "i18next";

import { renderRoutes } from "@/modules/app/AppRouter";
import { INTRO_URL, MISSION_URL, NEWS_URL } from "@/urls";

export const renderAboutMenus = (t: TFunction) => {
  const items = [
    ...renderRoutes(t, [INTRO_URL, NEWS_URL, MISSION_URL], "about")?.map(
      (route) => ({
        key: route.key || "",
        label: route.title,
        url: route.path,
      }),
    ),
  ];

  return items;
};
