import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Typography,
} from "antd";
import { useTranslation } from "react-i18next";

import Sidebar from "@/modules/shared/sidebar/Sidebar";

import { renderUserMenus } from "../utils/render";
import styles from "./scss/login.module.scss";

export default function RegisterMember(): JSX.Element {
  const { t } = useTranslation();

  const items = renderUserMenus(t);

  const renderChildren = () => {
    return (
      <div className={styles.container}>
        <Typography.Title level={3}>
          Đăng ký tham gia thành viên KINESS
        </Typography.Title>
        <Divider />
        <Form className={styles.content}>
          <Row gutter={24} className={styles.listItem}>
            <Col span={6}>
              <Typography.Text className={styles.label}>
                Trung tâm Kiness
              </Typography.Text>
            </Col>
            <Col span={6}>
              <Form.Item>
                <Select placeholder="Chọn tỉnh, thành phố" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item>
                <Select placeholder="Chọn chi nhánh" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} className={styles.listItem}>
            <Col span={6}>
              <Typography.Text className={styles.label}>
                Tên tài khoản
              </Typography.Text>
            </Col>
            <Col span={6}>
              <Form.Item>
                <Input placeholder="Tên tài khoản" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Typography.Text type="secondary">
                (Tối đa 6-8 chữ/số)
              </Typography.Text>
            </Col>
          </Row>
          <Row gutter={24} className={styles.listItem}>
            <Col span={6}>
              <Typography.Text className={styles.label}>
                Mật khẩu
              </Typography.Text>
            </Col>
            <Col span={6}>
              <Form.Item>
                <Input.Password placeholder="Mật khẩu" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} className={styles.listItem}>
            <Col span={6}>
              <Typography.Text className={styles.label}>
                Xác nhận mật khẩu
              </Typography.Text>
            </Col>
            <Col span={6}>
              <Form.Item>
                <Input.Password placeholder=" Xác nhận mật khẩu" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} className={styles.listItem}>
            <Col span={6}>
              <Typography.Text className={styles.label}>
                Tên thành viên
              </Typography.Text>
            </Col>
            <Col span={6}>
              <Form.Item>
                <Input placeholder="Tên thành viên" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} className={styles.listItem}>
            <Col span={6}>
              <Typography.Text className={styles.label}>
                Ngày sinh
              </Typography.Text>
            </Col>
            <Col span={6}>
              <Form.Item>
                <DatePicker
                  style={{ width: "100%" }}
                  format={"dd/mm/yyyy"}
                  placeholder="dd/mm/yyyy"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} className={styles.listItem}>
            <Col span={6}>
              <Typography.Text className={styles.label}>
                Giới tính
              </Typography.Text>
            </Col>
            <Col span={6}>
              <Form.Item initialValue={1}>
                <Radio.Group defaultValue={1}>
                  <Radio value={1}>Nam</Radio>
                  <Radio value={0}>Nữ</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} className={styles.listItem}>
            <Col span={6}>
              <Typography.Text className={styles.label}>
                Địa chỉ
              </Typography.Text>
            </Col>
            <Col span={18}>
              <Form.Item>
                <Input placeholder="Địa chỉ" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} className={styles.listItem}>
            <Col span={6}>
              <Typography.Text className={styles.label}>
                Số điện thoại
              </Typography.Text>
            </Col>
            <Col span={6}>
              <Form.Item>
                <Input placeholder="Số điện thoại" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} className={styles.listItem}>
            <Col span={6}>
              <Typography.Text className={styles.label}>Email</Typography.Text>
            </Col>
            <Col span={6}>
              <Form.Item>
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
          </Row>
          <Row className={styles.footerForm}>
            <Col span={24}>
              <Button>{t("all.btn_cancel")}</Button>
              <Button className="filled" htmlType="submit">
                {t("all.btn_confirm")}
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  };

  return <Sidebar children={renderChildren()} items={items} />;
}
