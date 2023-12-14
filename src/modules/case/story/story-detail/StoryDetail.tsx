import {
  ClockCircleOutlined,
  EyeFilled,
  LeftOutlined,
} from "@ant-design/icons";
import { Divider, Space, Spin, Typography } from "antd";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import { ERROR_TIMEOUT } from "@/constant/config";
import {
  useGetGrowthStoryDetail,
  useUpdateViewGrowthStory,
} from "@/loader/growth-story.loader";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import { formatDateShow } from "@/utils/format-string";

import styles from "./scss/story-detail.module.scss";

export default function StoryDetail(): JSX.Element {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: dataStory,
    isLoading,
    refetch,
  } = useGetGrowthStoryDetail({
    id: id!,
    config: {
      onSuccess: (data) => {
        if (data.message === ERROR_TIMEOUT) {
          refetch();
        }
      },
    },
  });

  const { mutate: mutateUpdateView } = useUpdateViewGrowthStory({});

  useEffect(() => {
    mutateUpdateView(id!);
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

          <Typography.Title level={2}>
            {dataStory?.data?.title}
          </Typography.Title>

          <Typography.Title style={{ paddingTop: 20 }} level={5}>
            {dataStory?.data?.author_name}
          </Typography.Title>

          <Space>
            <Typography.Text>
              <EyeFilled /> {dataStory?.data?.view_count}
            </Typography.Text>
            <Typography.Text>
              <ClockCircleOutlined />{" "}
              {dayjs(dataStory?.data?.posted_date).format(formatDateShow)}
            </Typography.Text>
          </Space>
          <Divider />

          <Spin spinning={isLoading}>
            <div className={styles.content}>
              <div
                dangerouslySetInnerHTML={{
                  __html: dataStory?.data?.content + "",
                }}
              ></div>
            </div>
          </Spin>
        </div>
      </section>
    </>
  );
}
