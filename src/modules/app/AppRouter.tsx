import { ProLayoutProps } from "@ant-design/pro-components";
import { t } from "i18next";
import { Link } from "react-router-dom";

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
  HOME_URL,
  INFO_GROWTH_COLUMN_URL,
  INFO_GROWTH_FAT_URL,
  INFO_GROWTH_HEIGHT_URL,
  INFO_GROWTH_PERIOD_URL,
  INFO_GROWTH_STANDING_URL,
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

export const appRoute = (): ProLayoutProps["route"] => {
  const routes = [...generateRoutes(functions)].sort((a, b) => a.sort - b.sort);
  return {
    path: HOME_URL,
    routes,
  };
};

const generateRoutes = (tree: any[] = []) => {
  const routes: any[] = [];
  if (tree.length === 0) return routes;
  for (let i = 0; i < tree.length; i++) {
    const route = {
      key: tree[i].title,
      path: tree[i].url,
      title: tree[i].title,
      name: <Link to={tree[i].url}>{tree[i].title}</Link>,
      routes: generateRoutes(tree[i].children),
      sort: tree[i].sort_order,
    };

    routes.push(route);
  }

  return routes;
};

const functions = [
  {
    title: t("nav.info.title"),
    url: GREETING_URL,
    children: [
      {
        title: t("nav.info.history.title"),
        url: GREETING_URL,
        children: [
          {
            title: t("nav.info.history.greetings.title"),
            url: GREETING_URL,
            children: [],
            sort_order: 0,
            is_leaf: true,
          },
          {
            title: t("nav.info.history.history.title"),
            url: HISTORY_URL,
            children: [],
            sort_order: 1,
            is_leaf: true,
          },
        ],
        sort_order: 0,
        is_leaf: false,
      },
      {
        title: t("nav.info.branch.title"),
        url: ORGAN_URL,
        children: [
          {
            title: t("nav.info.branch.organ.title"),
            url: ORGAN_URL,
            children: [],
            sort_order: 0,
            is_leaf: true,
          },
          {
            title: t("nav.info.branch.map.title"),
            url: MAP_URL,
            children: [],
            sort_order: 1,
            is_leaf: true,
          },
        ],
        sort_order: 1,
        is_leaf: false,
      },
      {
        title: t("nav.info.lab.title"),
        url: RESEARCHER_URL,
        children: [
          {
            title: t("nav.info.lab.researcher.title"),
            url: RESEARCHER_URL,
            children: [],
            sort_order: 0,
            is_leaf: true,
          },
          {
            title: t("nav.info.lab.thesis.title"),
            url: THESIS_URL,
            children: [],
            sort_order: 1,
            is_leaf: true,
          },
          {
            title: t("nav.info.lab.patent.title"),
            url: PATENT_URL,
            children: [],
            sort_order: 2,
            is_leaf: true,
          },
          {
            title: t("nav.info.lab.book.title"),
            url: BOOK_URL,
            children: [],
            sort_order: 3,
            is_leaf: true,
          },
        ],
        sort_order: 1,
        is_leaf: false,
      },
    ],
    sort_order: 0,
    is_leaf: false,
  },
  {
    title: t("nav.advice.title"),
    url: ADVICE_OVERHAUL_URL,
    children: [
      {
        title: t("nav.advice.overhaul.title"),
        url: ADVICE_OVERHAUL_URL,
        children: [],
        sort_order: 0,
        is_leaf: true,
      },
      {
        title: t("nav.advice.ex.title"),
        url: ADVICE_EX_URL,
        children: [],
        sort_order: 1,
        is_leaf: true,
      },
      {
        title: t("nav.advice.faq.title"),
        url: ADVICE_FAQ_URL,
        children: [],
        sort_order: 2,
        is_leaf: true,
      },
      {
        title: t("nav.advice.inquiry.title"),
        url: ADVICE_INQUIRY_URL,
        children: [],
        sort_order: 3,
        is_leaf: true,
      },
    ],
    sort_order: 1,
    is_leaf: false,
  },
  {
    title: t("nav.program.title"),
    url: PROGRAM_QUESTION_URL,
    children: [
      {
        title: t("nav.program.question.title"),
        url: PROGRAM_QUESTION_URL,
        children: [],
        sort_order: 0,
        is_leaf: true,
      },
      {
        title: t("nav.program.method.title"),
        url: PROGRAM_METHOD_URL,
        children: [],
        sort_order: 1,
        is_leaf: true,
      },
      {
        title: t("nav.program.system.title"),
        url: PROGRAM_SYSTEM_URL,
        children: [],
        sort_order: 2,
        is_leaf: true,
      },
    ],
    sort_order: 2,
    is_leaf: false,
  },
  {
    title: t("nav.case.title"),
    url: CASE_STORY_URL,
    children: [
      {
        title: t("nav.case.story.title"),
        url: CASE_STORY_URL,
        children: [],
        sort_order: 0,
        is_leaf: true,
      },
      {
        title: t("nav.case.posture.title"),
        url: CASE_POSTURE_URL,
        children: [],
        sort_order: 1,
        is_leaf: true,
      },
      {
        title: t("nav.case.old.title"),
        url: CASE_OLD_URL,
        children: [],
        sort_order: 2,
        is_leaf: true,
      },
      {
        title: t("nav.case.fat.title"),
        url: CASE_FAT_URL,
        children: [],
        sort_order: 3,
        is_leaf: true,
      },
    ],
    sort_order: 3,
    is_leaf: false,
  },
  {
    title: t("nav.info-growth.title"),
    url: INFO_GROWTH_HEIGHT_URL,
    children: [
      {
        title: t("nav.info-growth.height.title"),
        url: INFO_GROWTH_HEIGHT_URL,
        children: [],
        sort_order: 0,
        is_leaf: true,
      },
      {
        title: t("nav.info-growth.standing.title"),
        url: INFO_GROWTH_STANDING_URL,
        children: [],
        sort_order: 1,
        is_leaf: true,
      },
      {
        title: t("nav.info-growth.period.title"),
        url: INFO_GROWTH_PERIOD_URL,
        children: [],
        sort_order: 2,
        is_leaf: true,
      },
      {
        title: t("nav.info-growth.fat.title"),
        url: INFO_GROWTH_FAT_URL,
        children: [],
        sort_order: 3,
        is_leaf: true,
      },
      {
        title: t("nav.info-growth.column.title"),
        url: INFO_GROWTH_COLUMN_URL,
        children: [],
        sort_order: 4,
        is_leaf: true,
      },
    ],
    sort_order: 4,
    is_leaf: false,
  },
  {
    title: t("nav.tv.title"),
    url: TV_LOCAL_URL,
    children: [
      {
        title: t("nav.tv.local.title"),
        url: TV_LOCAL_URL,
        children: [],
        sort_order: 0,
        is_leaf: true,
      },
      {
        title: t("nav.tv.world.title"),
        url: TV_WORLD_URL,
        children: [],
        sort_order: 1,
        is_leaf: true,
      },
    ],
    sort_order: 5,
    is_leaf: false,
  },
  {
    title: t("nav.expected.title"),
    url: EXPECTED_GEN_URL,
    children: [
      {
        title: t("nav.expected.gen.title"),
        url: EXPECTED_GEN_URL,
        children: [],
        sort_order: 0,
        is_leaf: true,
      },
      {
        title: t("nav.expected.current.title"),
        url: EXPECTED_CURRENT_URL,
        children: [],
        sort_order: 1,
        is_leaf: true,
      },
      {
        title: t("nav.expected.chart.title"),
        url: EXPECTED_CHART_URL,
        children: [],
        sort_order: 2,
        is_leaf: true,
      },
    ],
    sort_order: 6,
    is_leaf: false,
  },
];
