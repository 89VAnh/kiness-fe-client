import {
  ClockCircleOutlined,
  EyeFilled,
  LeftOutlined,
} from "@ant-design/icons";
import { Divider, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import { dataStory } from "../old-list/data/data-fake";
import styles from "./scss/old-detail.module.scss";

export default function OldDetail(): JSX.Element {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  const data = dataStory.find((i) => i.id === +id!);

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

          <Typography.Title level={2}>{data?.title}</Typography.Title>

          <Typography.Title style={{ paddingTop: 20 }} level={5}>
            {data?.author}
          </Typography.Title>

          <Space>
            <Typography.Text>
              <EyeFilled /> {data?.view}
            </Typography.Text>
            <Typography.Text>
              <ClockCircleOutlined /> {data?.date}
            </Typography.Text>
          </Space>
          <Divider />

          <div className={styles.content}>
            <div dangerouslySetInnerHTML={{ __html: data?.html + "" }}></div>
          </div>
        </div>
      </section>
    </>
  );
}
