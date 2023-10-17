import {
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Typography,
  notification,
} from "antd";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import { LOCAL_USER } from "@/constant/config";
import { useLogin } from "@/loader/user.loader";
import Sidebar from "@/modules/shared/sidebar/Sidebar";
import { REGISTER_URL } from "@/urls";
import storage, { storageService } from "@/utils/storage";
import { RULES_FORM } from "@/utils/validator";

import { renderUserMenus } from "../utils/render";
import styles from "./scss/login.module.scss";

export default function Login(): JSX.Element {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const items = renderUserMenus(t);

  const login = useLogin({
    config: {
      onSuccess: (data) => {
        if (!data || data?.message) {
          notification.error({
            message:
              data.response?.data?.message || t("messages.login_failure"),
          });
          return navigate("/login");
        } else {
          storage.setToken(data.token);
          storageService.setStorage(LOCAL_USER, JSON.stringify(data));
          notification.success({
            message: t("messages.login_success"),
          });
          window.open("/", "_parent");
        }
      },
      onError: (data) => {
        notification.error({
          message: data.response?.data?.message || t("messages.login_failure"),
        });
      },
    },
  });

  const handleLogin = () => {
    form.validateFields().then((values) => {
      login.mutate(values);
    });
  };

  const renderChildren = () => {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Typography.Title level={3}>Đăng nhập</Typography.Title>
          <Divider />
          <Form form={form} className={styles.content}>
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
                  <Checkbox defaultChecked style={{ userSelect: "none" }}>
                    Lưu tài khoản{" "}
                  </Checkbox>
                </div>
              </Col>
              <Col span={8}>
                <div className={styles.btnSubmit}>
                  <Button
                    type="text"
                    htmlType="submit"
                    size="large"
                    onClick={handleLogin}
                    loading={login.isLoading}
                  >
                    {t("user.login")}
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
