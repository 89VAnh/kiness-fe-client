import { Col, Image, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";

import girl from "@/assets/img/branch/Girl.png";
import CityCardList from "@/modules/shared/city-card-list/CityCard";
import Sidebar from "@/modules/shared/sidebar/Sidebar";

import { renderBrandMenus } from "../utils/render";
import { RegisterForm } from "./register-form";
import styles from "./scss/registerExperience.module.scss";

export default function RegisterExperience() {
  const { t } = useTranslation();

  // Get menus
  const items = renderBrandMenus(t);

  const renderChildren = () => {
    return (
      <div className={styles.container}>
        <Row>
          <Col span={19}>
            <Typography.Title level={2} className={styles.title}>
              Kiểm tra tăng trưởng Kiness tại các khu vực :
            </Typography.Title>
            <CityCardList />
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
