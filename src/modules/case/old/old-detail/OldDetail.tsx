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
  useGetLateStoryDetail,
  useUpdateViewLateStory,
} from "@/loader/late-story.loader";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import { formatDateShow } from "@/utils/format-string";

import styles from "./scss/old-detail.module.scss";

export default function OldDetail(): JSX.Element {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: dataLate,
    isLoading,
    refetch,
  } = useGetLateStoryDetail({
    id: id!,
    config: {
      onSuccess: (data) => {
        if (data.message === ERROR_TIMEOUT) {
          refetch();
        }
      },
    },
  });

  const { mutate: mutateUpdateView } = useUpdateViewLateStory({});

  useEffect(() => {
    mutateUpdateView(id!);
  }, [id, mutateUpdateView]);

  return (
    <>
      <Title title={t("nav.case.old.title")} />

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

          <Typography.Title level={2}>{dataLate?.data?.title}</Typography.Title>

          <Typography.Title style={{ paddingTop: 20 }} level={5}>
            {dataLate?.data?.author_name}
          </Typography.Title>

          <Space>
            <Typography.Text>
              <EyeFilled /> {dataLate?.data?.view_count}
            </Typography.Text>
            <Typography.Text>
              <ClockCircleOutlined />{" "}
              {dayjs(dataLate?.data?.posted_date).format(formatDateShow)}
            </Typography.Text>
          </Space>
          <Divider />

          <Spin spinning={isLoading}>
            <div className={styles.content}>
              <div
                dangerouslySetInnerHTML={{
                  __html: dataLate?.data?.content + "",
                }}
              ></div>
            </div>
          </Spin>
        </div>
      </section>
    </>
  );
}
