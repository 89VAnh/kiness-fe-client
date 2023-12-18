import { Col, Divider, Image, Input, Pagination, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import imgPlay from "@/assets/img/others/play_btn.png";
import { ERROR_TIMEOUT } from "@/constant/config";
import { useSearchVideos } from "@/loader/video.loader";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import styles from "./scss/tv-world.module.scss";

export default function TVWorld(): JSX.Element {
  const { t } = useTranslation();

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchContent, setSearchContent] = useState<string | null>(
    searchParams.get("k") || "",
  );
  const [page, setPage] = useState<number | string>(
    searchParams.get("page") || 1,
  );
  const [pageSize, setPageSize] = useState<number | string>(
    searchParams.get("page_size") || 10,
  );

  const {
    data: videos,
    remove,
    refetch,
  } = useSearchVideos({
    params: {
      page_index: page,
      page_size: pageSize,
      search_content: searchContent,
      is_foreign: 1,
    },
    config: {
      onSuccess: (data) => {
        if (data.message === ERROR_TIMEOUT) {
          refetch();
        }
      },
      onError: (err) => {
        console.log(err);
      },
    },
  });

  useEffect(() => remove, [remove]);

  const handleSearch = (keyword: string) => {
    searchParams.set("k", keyword);
    setSearchParams(searchParams);
    setSearchContent(keyword);
  };

  function getThumbnail(video_link: string) {
    const videoId = extractVideoId(video_link);

    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

    return thumbnailUrl;
  }

  function extractVideoId(url: string) {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : null;
  }
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
              onSearch={handleSearch}
            />
          </div>
          <Divider />

          <Row gutter={60}>
            {videos?.data?.data?.map((item: any) => (
              <Col
                key={item.video_id}
                span={8}
                sm={12}
                md={8}
                lg={8}
                style={{ marginBottom: 16 }}
                className={styles.videoItem}
              >
                <Image
                  src={getThumbnail(item.video_link)}
                  wrapperStyle={{ width: "100%" }}
                  className={styles.thumbnail}
                  style={{ objectFit: "cover" }}
                  preview={{
                    mask: <img src={imgPlay} alt={"play"} />,
                    destroyOnClose: true,
                    imageRender: () => {
                      return (
                        <iframe
                          width="940"
                          height="529"
                          src={`https://www.youtube.com/embed/${extractVideoId(
                            item.video_link,
                          )}?autoplay=1`}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          frameBorder={0}
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
                    title={item.video_name}
                  >
                    {item.video_name}
                  </Typography.Title>
                </div>
              </Col>
            ))}
          </Row>

          <Pagination
            total={videos?.data?.total_items || 0}
            hideOnSinglePage
            current={Number(page)}
            pageSize={Number(pageSize)}
            onChange={(page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            }}
          />
        </div>
      </section>
    </>
  );
}
