import { TFunction } from "i18next";

import { renderRoutes } from "@/modules/app/AppRouter";
import {
  LOGIN_URL,
  PRIVACY_POLICY_URL,
  REGISTER_URL,
  TERMS_USE_URL,
} from "@/urls";

export const renderUserMenus = (t: TFunction) => {
  const items = [
    ...renderRoutes(
      t,
      [LOGIN_URL, REGISTER_URL, PRIVACY_POLICY_URL, TERMS_USE_URL],
      "user",
    )?.map((route) => ({
      key: route.key || "",
      label: route.title,
      url: route.path,
    })),
  ];

  return items;
};
