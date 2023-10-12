import {
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Typography,
} from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Sidebar from "@/modules/shared/sidebar/Sidebar";
import { REGISTER_URL } from "@/urls";
import { RULES_FORM } from "@/utils/validator";

import { renderUserMenus } from "../utils/render";
import styles from "./scss/login.module.scss";

export default function Login(): JSX.Element {
  const { t } = useTranslation();

  const items = renderUserMenus(t);

  const renderChildren = () => {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Typography.Title level={3}>Đăng nhập</Typography.Title>
          <Divider />
          <Form className={styles.content}>
            <Row gutter={27}>
              <Col span={16}>
                <div className={styles.contentForm}>
                  <Form.Item
                    name={"username"}
                    label={"Tài khoản"}
                    rules={[...RULES_FORM.required]}
                  >
                    <Input placeholder={t("user.username") || ""} />
                  </Form.Item>
                  <Form.Item
                    name={"password"}
                    label={t("user.password")}
                    rules={[...RULES_FORM.required]}
                  >
                    <Input.Password placeholder={t("user.username") || ""} />
                  </Form.Item>
                  <Checkbox>Lưu tài khoản </Checkbox>
                </div>
              </Col>
              <Col span={8}>
                <div className={styles.btnSubmit}>
                  <Button type="text" htmlType="submit" size="large">
                    Đăng nhập
                  </Button>
                </div>
              </Col>
            </Row>
            <Divider />
            <div className={styles.wrapperOption}>
              <Row
                gutter={27}
                style={{ alignItems: "center", marginBottom: 12 }}
              >
                <Col span={16}>
                  <div>
                    <Typography.Text>Quên Tài khoản/Mật khẩu?</Typography.Text>
                  </div>
                </Col>
                <Col span={8}>
                  <div>
                    <Button className={styles.btnAmber} type="text">
                      Tìm tài khoản/mật khẩu
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row gutter={27} style={{ alignItems: "center" }}>
                <Col span={16}>
                  <div>
                    <Typography.Text style={{ whiteSpace: "nowrap" }}>
                      Nếu bạn chưa có tài khoản, vui lòng đăng ký làm thành viên
                    </Typography.Text>
                  </div>
                </Col>
                <Col span={8}>
                  <Link to={REGISTER_URL}>
                    <Button type="text">Đăng ký tài khoản</Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </Form>
        </div>
      </div>
    );
  };

  return <Sidebar children={renderChildren()} items={items} />;
}
