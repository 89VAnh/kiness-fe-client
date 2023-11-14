import { Col, Row, Typography } from "antd";

import styles from "./scss/city-card-list.module.scss";

type City = {
  key: number;
  name: string;
  hotline: string;
};

const cities: City[] = [
  {
    key: 1,
    name: "Khu vực Hà Nội",
    hotline: "0983273723",
  },
  {
    key: 2,
    name: "Khu vực HCM",
    hotline: "0983565678",
  },
  {
    key: 3,
    name: "Khu vực Đà Nẵng",
    hotline: "0954565667",
  },
  {
    key: 4,
    name: "Khu vực Hải Phòng",
    hotline: "0945345345",
  },
];

export default function CityCardList() {
  return (
    <Row gutter={24} style={{ marginTop: 65 }}>
      {cities.map((city) => (
        <Col key={city.name} span={24 / cities.length}>
          <div className={styles.card}>
            <Typography.Title level={5} className={styles.card_title}>
              {city.name}
            </Typography.Title>
            <Typography.Title level={5} className={styles.card_hotline}>
              Hotline: {city.hotline}
            </Typography.Title>
          </div>
        </Col>
      ))}
    </Row>
  );
}
