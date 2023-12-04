import { Col, Divider, Image, Input, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";

import imgPlay from "@/assets/img/others/play_btn.png";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import { dataTvWorld } from "./data/data-fake";
import styles from "./scss/tv-world.module.scss";

export default function TVWorld(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <Title />

      <Breadcrumb />

      <section className={styles.contentWrap}>
        <div className="inner">
          <div className={styles.headerContent}>
            <div></div>
            <Input.Search
              style={{ maxWidth: 300 }}
              placeholder={t("thesis.search_placeholder")}
            />
          </div>
          <Divider />

          <Row gutter={16}>
            {dataTvWorld.map((item, index) => (
              <Col
                key={index}
                span={24}
                sm={12}
                md={8}
                lg={6}
                style={{ marginBottom: 16 }}
              >
                <div className={styles.img}>
                  <Image
                    src={item.thumb}
                    wrapperStyle={{ width: "100%" }}
                    className={styles.thumbnail}
                    style={{ objectFit: "cover" }}
                    preview={{
                      mask: <img src={imgPlay} alt={"play"} />,
                      destroyOnClose: true,
                      imageRender: () => {
                        return (
                          <iframe
                            width="560"
                            height="315"
                            src={item.video_url + "&autoplay=1"}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        );
                      },
                      toolbarRender: () => null,
                    }}
                  />

                  <div className={styles.textWrap}>
                    <Typography.Title
                      level={4}
                      ellipsis={{ rows: 2 }}
                      title={item.caption}
                    >
                      {item.caption}{" "}
                    </Typography.Title>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
}
