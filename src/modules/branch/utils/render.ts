import { TFunction } from "i18next";

import { renderRoutes } from "@/modules/app/AppRouter";
import { BRANCH_URL, TEST_REGISTER_URL } from "@/urls";

export const renderAboutMenus = (t: TFunction) => {
  const items = [
    ...renderRoutes(t, [BRANCH_URL, TEST_REGISTER_URL], "branch")?.map(
      (route) => ({
        key: route.key || "",
        label: route.title,
        url: route.path,
      }),
    ),
  ];

  return items;
};
