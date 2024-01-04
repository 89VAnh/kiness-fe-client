import { MenuItemType } from "antd/es/menu/hooks/useItems";
import { t } from "i18next";

import * as urls from "@/urls";

export const menuDefault: MenuItemType[] = [
  {
    label: t("nav.info.title"),
    key: urls.GREETING_URL,
  },
  {
    label: t("nav.advice.title"),
    key: urls.ADVICE_OVERHAUL_URL,
  },
  {
    label: t("nav.program.title"),
    key: urls.PROGRAM_QUESTION_URL,
  },
  {
    label: t("nav.case.title"),
    key: urls.CASE_STORY_URL,
  },
  {
    label: t("nav.info-growth.title"),
    key: urls.INFO_GROWTH_HEIGHT_URL,
  },
  {
    label: t("nav.tv.title"),
    key: urls.TV_LOCAL_URL,
  },
  {
    label: t("nav.expected.title"),
    key: urls.EXPECTED_GEN_URL,
  },
];

export const getMenuLevel = (
  path: string,
  level: number = 2,
): MenuItemType[] => {
  const listLevel = Object.values(urls.listUrls);

  const keyPath = path.split("/")[1];

  const result = listLevel
    .filter(
      (item) =>
        item.includes(
          "/" + keyPath + "/" + (level === 2 ? "" : path.split("/")[2]),
        ) && item.split("/").length === level + 1,
    )
    .map((item) => {
      const listKeys = item.split("/");
      const label = listKeys.join(".");

      return {
        label: t(`nav${label}.title`),
        key: item,
      };
    });

  return result;
};
