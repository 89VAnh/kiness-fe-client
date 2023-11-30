import { LeftOutlined, LinkOutlined } from "@ant-design/icons";
import { Card, Divider, Space, Typography } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import { dataThesis } from "../thesis-list/data/data-fake";
import styles from "./scss/thesis.module.scss";

export default function ThesisDetail(): JSX.Element {
  const { id } = useParams();
  const { t } = useTranslation();
  const [data] = useState<any>(dataThesis.find((i) => i.id === Number(id)));
  const navigate = useNavigate();

  return (
    <>
      <Title title={t("nav.info.lab.thesis.title")} />

      <Breadcrumb />

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

          <Divider />

          <div>
            <Typography.Title level={4}>Thông tin tác giả</Typography.Title>
            {data?.author?.map((author: any, index: number) => (
              <Card size="small" style={{ marginBottom: 6 }} key={index}>
                <Space>
                  <Typography.Text>{author.name}</Typography.Text>
                  <Typography.Link href={author.link} target="_blank">
                    <LinkOutlined /> Đi tới thông tin tác giả
                  </Typography.Link>
                </Space>
              </Card>
            ))}

            <br />
            <Card size="small">
              <Typography.Link href={data.origin_link} target="_blank" ellipsis>
                {data.origin_link}
              </Typography.Link>
            </Card>
            <br />
            <br />
          </div>
        </div>
      </section>
    </>
  );
}
