import { ClockCircleOutlined, LeftOutlined } from "@ant-design/icons";
import { Divider, Space, Typography } from "antd";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import {
  useGetDetailClientGrowthArticle,
  useUpdateViewCountGrowthArticle,
} from "@/loader/growth-articles.loader";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import { formatDateShow } from "@/utils/format-string";

import styles from "./scss/column-detail.module.scss";

export default function ColumnDetail(): JSX.Element {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: article } = useGetDetailClientGrowthArticle({
    id: Number(id) || 0,
  });

  const { mutate: mutateUpdateView } = useUpdateViewCountGrowthArticle({});

  useEffect(() => {
    mutateUpdateView(Number(id) || 0);
  }, [id, mutateUpdateView]);

  return (
    <>
      <Title title={t("nav.case.story.title")} />

      <Breadcrumb showLast={false} />

      <section className={styles.contentWrap}>
        <div className="inner">
          <Typography.Link
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            <Typography.Title level={4} type="secondary">
              <LeftOutlined /> {t("all.back")}
            </Typography.Title>
          </Typography.Link>

          <Typography.Title level={2}>{article?.data?.title}</Typography.Title>

          <Typography.Title style={{ paddingTop: 20 }} level={5}>
            {article?.data?.author_name}
          </Typography.Title>

          <Space>
            <Typography.Text>
              <ClockCircleOutlined />{" "}
              {dayjs(article?.data?.posted_date).format(formatDateShow)}
            </Typography.Text>
          </Space>
          <Divider />

          <div className={styles.content}>
            <div
              dangerouslySetInnerHTML={{ __html: article?.data?.content + "" }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}
