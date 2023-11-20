import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  Typography,
  message,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";

import { useCreateBranchRegister } from "@/loader/branch-register.loader";
import { useCityDropdown } from "@/loader/city.loader";
import { UserState } from "@/store/auth/atom";
import { RULES_FORM } from "@/utils/validator";

import styles from "./scss/registerForm.module.scss";

export default function RegisterForm() {
  const userProfile = useRecoilValue(UserState);
  const [form] = useForm();

  const { data: cityOptions, isLoading: isLoadingCity } = useCityDropdown({});
  const { t } = useTranslation();

  const createBranchRegister = useCreateBranchRegister({
    config: {
      onSuccess: () => {
        message.success("Đăng ký thành công!");
      },
    },
  });

  const items = [
    {
      key: "city_id",
      label: (
        <Typography.Text>
          Thành phố <Typography.Text type="danger">*</Typography.Text>
        </Typography.Text>
      ),
      input: (
        <Col span={8}>
          <Form.Item name="city_id" rules={[...RULES_FORM.required]}>
            <Select
              loading={isLoadingCity}
              placeholder={t("branch_register.city_id")}
              options={cityOptions || []}
            />
          </Form.Item>
        </Col>
      ),
    },
    {
      key: "branch_name",
      label: (
        <Typography.Text>
          {t("branch_register.branch_name")}
          <Typography.Text type="danger">*</Typography.Text>
        </Typography.Text>
      ),
      input: (
        <Col span={7}>
          <Form.Item name="branch_name" rules={[...RULES_FORM.required]}>
            <Input placeholder={t("branch_register.branch_name")} />
          </Form.Item>
        </Col>
      ),
    },
    {
      key: "phone_number",
      label: (
        <Typography.Text>
          {t("branch_register.phone_number")}{" "}
          <Typography.Text type="danger">*</Typography.Text>
        </Typography.Text>
      ),
      input: (
        <Form.Item
          name="phone_number"
          wrapperCol={{ span: 7 }}
          rules={[...RULES_FORM.required, ...RULES_FORM.phone]}
        >
          <Input placeholder={t("branch_register.phone_number")} />
        </Form.Item>
      ),
    },
    {
      key: "email",
      label: (
        <Typography.Text>
          {t("branch_register.email")}{" "}
          <Typography.Text type="danger">*</Typography.Text>
        </Typography.Text>
      ),
      input: (
        <Form.Item
          name="email"
          wrapperCol={{ span: 7 }}
          rules={[...RULES_FORM.required, ...RULES_FORM.email]}
        >
          <Input placeholder={t("branch_register.email")} />
        </Form.Item>
      ),
    },
    {
      key: "address",
      label: (
        <Typography.Text>
          {t("branch_register.address")}{" "}
          <Typography.Text type="danger">*</Typography.Text>
        </Typography.Text>
      ),
      input: (
        <Form.Item
          name="address"
          wrapperCol={{ span: 20 }}
          rules={[...RULES_FORM.required]}
        >
          <Input placeholder={t("branch_register.address")} />
        </Form.Item>
      ),
    },
  ];

  const onFinish = (value: object) => {
    createBranchRegister.mutate({
      ...value,
      created_by_user_id: userProfile.user_id || 1,
    });

    form.resetFields();
  };

  return (
    <Form className={styles.form} form={form} onFinish={onFinish}>
      {items?.map((item) => (
        <Row key={item.key} className={styles.row}>
          <Col className={styles.label} style={{ width: 200 }}>
            {item.label}
          </Col>
          <Col flex="auto" className={styles.input}>
            {item.input}
          </Col>
        </Row>
      ))}
      <Row gutter={24} className={styles.btns}>
        <Col offset={12}>
          <Form.Item>
            <Button type="default" htmlType="reset">
              {t("all.btn_cancel")}
            </Button>
          </Form.Item>
        </Col>
        <Col>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {t("all.btn_register")}
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
