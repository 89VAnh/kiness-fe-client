import { TFunction } from "i18next";

import { renderRoutes } from "@/modules/app/AppRouter";
import { BRANCH_URL, REGISTER_EXPERIENCE_URL, TEST_REGISTER_URL } from "@/urls";

export const renderBrandMenus = (t: TFunction) => {
  const items = [
    ...renderRoutes(
      t,
      [BRANCH_URL, TEST_REGISTER_URL, REGISTER_EXPERIENCE_URL],
      "branch",
    )?.map((route) => ({
      key: route.key || "",
      label: route.title,
      url: route.path,
    })),
  ];

  return items;
};
