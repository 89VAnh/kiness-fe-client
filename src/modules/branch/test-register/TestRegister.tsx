import { Col, Image, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";

import girl from "@/assets/img/branch/Girl.png";
import Sidebar from "@/modules/shared/sidebar/Sidebar";

import { renderAboutMenus } from "../utils/render";
import { RegisterForm } from "./register-form";
import styles from "./scss/testRegister.module.scss";

type City = {
  key: number;
  name: string;
  hotline: string;
};

function CityCard(city: City) {
  return (
    <div className={styles.card}>
      <Typography.Title level={5} className={styles.card_title}>
        {city.name}
      </Typography.Title>
      <Typography.Title level={5} className={styles.card_hotline}>
        Hotline: {city.hotline}
      </Typography.Title>
    </div>
  );
}

export default function TestRegister() {
  const { t } = useTranslation();
  // Get menus
  const items = renderAboutMenus(t);

  const cities: City[] = [
    {
      key: 1,
      name: "Khu vực Hà Nội",
      hotline: "",
    },
    {
      key: 2,
      name: "Khu vực HCM",
      hotline: "",
    },
    {
      key: 3,
      name: "Khu vực Đà Nẵng",
      hotline: "",
    },
    {
      key: 4,
      name: "Khu vực Hải Phòng",
      hotline: "",
    },
  ];

  const renderChildren = () => {
    return (
      <div className={styles.container}>
        <Row>
          <Col span={19}>
            <Typography.Title level={2} className={styles.title}>
              Kiểm tra độ chính xác tăng trưởng Kinesthesia có sẵn tại văn phòng
              chính ở mỗi khu vực sau
            </Typography.Title>
            <Row gutter={24} style={{ marginTop: 65 }}>
              {cities.map((city) => (
                <Col key={city.name} span={24 / cities.length}>
                  {CityCard(city)}
                </Col>
              ))}
            </Row>
          </Col>
          <Col span={5}>
            <Image preview={false} src={girl} />
          </Col>
        </Row>
        <RegisterForm />
      </div>
    );
  };

  return <Sidebar children={renderChildren()} items={items} />;
}
