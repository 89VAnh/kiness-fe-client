import { ProLayoutProps } from "@ant-design/pro-components";
import { Typography } from "antd";
import { TFunction } from "i18next";
import { Link } from "react-router-dom";

import {
  BOOK_URL,
  GREETING_URL,
  HISTORY_URL,
  HOME_URL,
  INFO_URL,
  MAP_URL,
  ORGAN_URL,
  PATENT_URL,
  RESEARCHER_URL,
  THESIS_URL,
} from "@/urls";
import { getKeyFromPath } from "@/utils/format-string";

export const appRoute = (t: TFunction): ProLayoutProps["route"] => {
  return {
    path: HOME_URL,
    routes: [
      {
        path: INFO_URL,
        key: t("nav.info.title"),
        name: (
          <Typography.Link href={GREETING_URL}>
            {t("nav.info.title")}
          </Typography.Link>
        ),
        children: [
          {
            path: GREETING_URL,
            key: t("nav.info.children.history.title"),
            name: (
              <Typography.Link href={GREETING_URL}>
                {t("nav.info.children.history.title")}
              </Typography.Link>
            ),
            children: [
              {
                path: GREETING_URL,
                name: (
                  <Typography.Link href={GREETING_URL}>
                    {t("nav.info.children.history.greeting")}
                  </Typography.Link>
                ),
              },
              {
                path: HISTORY_URL,
                name: (
                  <Typography.Link href={HISTORY_URL}>
                    {t("nav.info.children.history.history")}
                  </Typography.Link>
                ),
              },
            ],
          },
          {
            path: ORGAN_URL,
            key: t("nav.info.children.organ.title"),
            name: (
              <Typography.Link href={ORGAN_URL}>
                {t("nav.info.children.organ.title")}
              </Typography.Link>
            ),
            children: [
              {
                path: ORGAN_URL,
                name: (
                  <Typography.Link href={ORGAN_URL}>
                    {t("nav.info.children.organ.organ")}
                  </Typography.Link>
                ),
              },
              {
                path: MAP_URL,
                name: (
                  <Typography.Link href={MAP_URL}>
                    {t("nav.info.children.organ.map")}
                  </Typography.Link>
                ),
              },
            ],
          },
          {
            path: RESEARCHER_URL,
            key: t("nav.info.children.researcher.title"),
            name: (
              <Typography.Link href={RESEARCHER_URL}>
                {t("nav.info.children.researcher.title")}
              </Typography.Link>
            ),
            children: [
              {
                path: RESEARCHER_URL,
                name: (
                  <Typography.Link href={RESEARCHER_URL}>
                    {t("nav.info.children.researcher.researcher")}
                  </Typography.Link>
                ),
              },
              {
                path: THESIS_URL,
                name: (
                  <Typography.Link href={THESIS_URL}>
                    {t("nav.info.children.researcher.thesis")}
                  </Typography.Link>
                ),
              },
              {
                path: PATENT_URL,
                name: (
                  <Typography.Link href={PATENT_URL}>
                    {t("nav.info.children.researcher.patent")}
                  </Typography.Link>
                ),
              },
              {
                path: BOOK_URL,
                name: (
                  <Typography.Link href={BOOK_URL}>
                    {t("nav.info.children.researcher.book")}
                  </Typography.Link>
                ),
              },
            ],
          },
        ],
      },
    ],
  };
};

export const renderRoutes = (
  t: TFunction,
  listUrls: string[],
  prefixLocale: string,
  disabled: boolean = false,
) => {
  return listUrls.map((url) => ({
    key: getKeyFromPath(url),
    path: url,
    title: t(`nav.${prefixLocale}.children.${getKeyFromPath(url)}`),
    name: (
      <Link to={url} onClick={(e) => disabled && e.preventDefault()}>
        {t(`nav.${prefixLocale}.children.${getKeyFromPath(url)}`)}
      </Link>
    ),
  }));
};
