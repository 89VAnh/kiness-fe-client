import { Col, Divider, Image, Input, List, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import { useSearchNews } from "@/loader/news.loader";
import Sidebar from "@/modules/shared/sidebar/Sidebar";
import { formatToDate } from "@/utils/format-string";

import { renderAboutMenus } from "../utils/render";
import NewsDetail from "./components/NewsDetail";
import styles from "./scss/news.module.scss";

export default function News() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [newsIdSelected, setNewsIdSelected] = useState<string>();

  let searchContent = searchParams.get("k") || "";

  const { data, isLoading: isLoadingNews } = useSearchNews({
    params: { search_content: searchContent },
    config: {},
  });

  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    setNews(data ? data.data : []);
  }, [data]);

  // Get menus
  const items = renderAboutMenus(t);

  const handleSearch = (value: string) => {
    searchParams.set("k", value);
    setSearchParams(searchParams);
  };

  const handleSelectNews = (id: string) => {
    setNewsIdSelected(id);
  };

  const renderChildren = () => {
    return (
      <>
        <div className={styles.container}>
          <Row style={{ width: "100%", justifyContent: "space-between" }}>
            <Col>
              <Typography.Title style={{ margin: 0 }} level={2}>
                Tin tức Kiness
              </Typography.Title>
            </Col>
            <Col span={12} md={16}>
              <Input.Search
                defaultValue={searchContent}
                allowClear
                onSearch={handleSearch}
                placeholder="Tìm kiếm"
              />
            </Col>
          </Row>
          <Divider />
          <List
            loading={isLoadingNews}
            pagination={{
              position: "bottom",
              align: "end",
              pageSize: 6,
              pageSizeOptions: [],
            }}
            dataSource={news}
            renderItem={(newsItem) =>
              newsItem ? (
                <List.Item
                  key={newsItem.news_id}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSelectNews(newsItem.news_id)}
                >
                  {/* <div className={styles.thumbNews}> */}
                  <div style={{ paddingRight: 10 }}>
                    <Image src={"/api/" + newsItem.thumbnail} preview={false} />
                  </div>
                  {/* <Typography.Title level={1}>NEW</Typography.Title> */}
                  {/* </div> */}
                  <div className={styles.contentNews}>
                    <div>
                      {/* <Link to={`news/${newsItem.news_id}`}> */}
                      <Typography.Title className={styles.news_title} level={5}>
                        {newsItem.news_title}
                      </Typography.Title>
                      {/* </Link> */}
                      {newsItem.content}
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <Typography.Text>
                        {formatToDate(newsItem.created_date_time)}
                      </Typography.Text>
                    </div>
                  </div>
                </List.Item>
              ) : (
                <></>
              )
            }
          />
        </div>
        <NewsDetail id={newsIdSelected} setNewsIdSelected={setNewsIdSelected} />
      </>
    );
  };

  return <Sidebar children={renderChildren()} items={items} />;
}
