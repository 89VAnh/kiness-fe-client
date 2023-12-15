import { LeftOutlined, LinkOutlined } from "@ant-design/icons";
import { Card, Divider, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import { useGetResearchArticleById } from "@/loader/research-article.loader";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import styles from "./scss/thesis.module.scss";

export default function ThesisDetail(): JSX.Element {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { data: article } = useGetResearchArticleById({
    id: Number(id) || 0,
    config: {
      onSuccess: (data) => {
        console.log(data);
      },
    },
  });

  return (
    <>
      <Title title={t("nav.info.lab.thesis.title")} />

      <Breadcrumb />
      {article ? (
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

            <Typography.Title level={2}>{article?.title}</Typography.Title>

            <Divider />

            <div>
              <Typography.Title level={4}>Thông tin tác giả</Typography.Title>
              {article?.list_json_author?.map((author: any, index: number) => (
                <Card size="small" style={{ marginBottom: 6 }} key={index}>
                  <Space>
                    <Typography.Text>{author.author_name}</Typography.Text>
                    <Typography.Link href={author.author_link} target="_blank">
                      <LinkOutlined /> Đi tới thông tin tác giả
                    </Typography.Link>
                  </Space>
                </Card>
              ))}

              <br />
              <Card size="small">
                <Typography.Link
                  href={article.article_link}
                  target="_blank"
                  ellipsis
                >
                  {article.article_link}
                </Typography.Link>
              </Card>
              <br />
              <br />
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}
