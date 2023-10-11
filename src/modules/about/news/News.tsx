import { Col, Divider, Input, List, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";

import { renderRoutes } from "@/modules/app/AppRouter";
import Sidebar from "@/modules/shared/sidebar/Sidebar";
import { INTRO_URL, NEWS_URL } from "@/urls";

import styles from "./scss/news.module.scss";

export default function News() {
  const { t } = useTranslation();

  const items = [
    ...renderRoutes(t, [INTRO_URL, NEWS_URL], "about", 0)?.map((route) => ({
      key: route.key + "",
      label: route.title,
      url: route.path,
    })),
  ];

  const renderChildren = () => {
    return (
      <div className={styles.container}>
        <Row style={{ width: "100%", justifyContent: "space-between" }}>
          <Col>
            <Typography.Title style={{ margin: 0 }} level={2}>
              Tin tức Kiness
            </Typography.Title>
          </Col>
          <Col span={12} md={16}>
            <Input.Search />
          </Col>
        </Row>
        <Divider />
        <List>
          {[...Array(7)].map((_, index) => (
            <List.Item key={index}>
              <div className={styles.thumbNews}>
                <Typography.Title level={1}>NEW</Typography.Title>
              </div>
              <div className={styles.contentNews}>
                <div>
                  <Typography.Title level={5}>
                    Key Growth Clinic Kines , tổ chức sự kiện đăng ký vào ngày
                    tháng 6
                  </Typography.Title>
                  <Typography.Text>
                    Phòng khám Kinesis Key Growth Kines, nơi quản lý sự tăng
                    trưởng, tư thế đúng, béo phì và trưởng thành nhanh chóng, đã
                    thông báo vào ngày 9 rằng họ sẽ tổ chức một sự kiện đăng ký
                    vào cùng ngày của tháng Sáu . Kines tiến hành 10 bài kiểm
                    tra độ chính xác về tăng trưởng khoa học. Nguyên nhân thấp
                    lùn và các giai đoạn sinh trưởng...
                  </Typography.Text>
                </div>

                <div style={{ textAlign: "right" }}>
                  <Typography.Text>09/06/2023</Typography.Text>
                </div>
              </div>
            </List.Item>
          ))}
        </List>
      </div>
    );
  };

  return <Sidebar children={renderChildren()} items={items} />;
}
