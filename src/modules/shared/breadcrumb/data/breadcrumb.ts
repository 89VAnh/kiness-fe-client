import { MenuItemType } from "antd/es/menu/hooks/useItems";
import { t } from "i18next";

import {
  ADVICE_EX_URL,
  ADVICE_FAQ_URL,
  ADVICE_INQUIRY_URL,
  ADVICE_OVERHAUL_URL,
  BOOK_URL,
  CASE_FAT_URL,
  CASE_OLD_URL,
  CASE_POSTURE_URL,
  CASE_STORY_URL,
  EXPECTED_CHART_URL,
  EXPECTED_CURRENT_URL,
  EXPECTED_GEN_URL,
  GREETING_URL,
  HISTORY_URL,
  INFO_BRANCH_URL,
  INFO_GROWTH_COLUMN_URL,
  INFO_GROWTH_FAT_URL,
  INFO_GROWTH_HEIGHT_URL,
  INFO_GROWTH_PERIOD_URL,
  INFO_GROWTH_STANDING_URL,
  INFO_HISTORY_URL,
  INFO_LAB_URL,
  MAP_URL,
  ORGAN_URL,
  PATENT_URL,
  PROGRAM_METHOD_URL,
  PROGRAM_QUESTION_URL,
  PROGRAM_SYSTEM_URL,
  RESEARCHER_URL,
  THESIS_URL,
  TV_LOCAL_URL,
  TV_WORLD_URL,
} from "@/urls";

export const menuDefault: MenuItemType[] = [
  {
    label: t("nav.info.title"),
    key: GREETING_URL,
  },
  {
    label: t("nav.advice.title"),
    key: ADVICE_OVERHAUL_URL,
  },
  {
    label: t("nav.program.title"),
    key: PROGRAM_QUESTION_URL,
  },
  {
    label: t("nav.case.title"),
    key: CASE_STORY_URL,
  },
  {
    label: t("nav.info-growth.title"),
    key: INFO_GROWTH_HEIGHT_URL,
  },
  {
    label: t("nav.tv.title"),
    key: TV_LOCAL_URL,
  },
  {
    label: t("nav.expected.title"),
    key: EXPECTED_GEN_URL,
  },
];

export const getMenuLevel = (
  path: string,
  level: number = 2,
): MenuItemType[] => {
  const listLevel2 = [
    INFO_HISTORY_URL,
    INFO_BRANCH_URL,
    INFO_LAB_URL,
    GREETING_URL,
    HISTORY_URL,
    ORGAN_URL,
    MAP_URL,
    RESEARCHER_URL,
    THESIS_URL,
    PATENT_URL,
    BOOK_URL,
    ADVICE_OVERHAUL_URL,
    ADVICE_EX_URL,
    ADVICE_FAQ_URL,
    ADVICE_INQUIRY_URL,
    PROGRAM_QUESTION_URL,
    PROGRAM_METHOD_URL,
    PROGRAM_SYSTEM_URL,
    CASE_STORY_URL,
    CASE_POSTURE_URL,
    CASE_FAT_URL,
    CASE_OLD_URL,
    INFO_GROWTH_HEIGHT_URL,
    INFO_GROWTH_COLUMN_URL,
    INFO_GROWTH_FAT_URL,
    INFO_GROWTH_PERIOD_URL,
    INFO_GROWTH_STANDING_URL,
    TV_LOCAL_URL,
    TV_WORLD_URL,
    EXPECTED_GEN_URL,
    EXPECTED_CHART_URL,
    EXPECTED_CURRENT_URL,
  ];

  const keyPath = path.split("/")[1];

  const result = listLevel2
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
