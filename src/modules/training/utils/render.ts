import { TFunction } from "i18next";

import { renderRoutes } from "@/modules/app/AppRouter";
import {
  FEE_URL,
  GROWTH_URL,
  QUALITY_URL,
  SUPPORT_EQUIP_URL,
  TRAINING_PROGRAM_URL,
} from "@/urls";

export const renderTrainMenus = (t: TFunction) => {
  const items = [
    ...renderRoutes(
      t,
      [
        GROWTH_URL,
        SUPPORT_EQUIP_URL,
        TRAINING_PROGRAM_URL,
        FEE_URL,
        QUALITY_URL,
      ],
      "training",
    )?.map((route) => ({
      key: route.key || "",
      label: route.title,
      url: route.path,
    })),
  ];

  return items;
};
