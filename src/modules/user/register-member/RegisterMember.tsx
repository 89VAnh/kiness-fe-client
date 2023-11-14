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
  message,
} from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import { DefaultOptionType } from "antd/es/select";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { useCityDropdown } from "@/loader/city.loader";
import { useCreateCustomer } from "@/loader/customer.loader";
// import { useNavigate } from "react-router-dom";
import Sidebar from "@/modules/shared/sidebar/Sidebar";
import { getBranchesDropdown } from "@/services/branch.service";
import { LOGIN_URL } from "@/urls";
import { formatDatePost, formatDateShow } from "@/utils/format-string";
import { RULES_FORM } from "@/utils/validator";

import { renderUserMenus } from "../utils/render";
import styles from "./scss/login.module.scss";

export default function RegisterMember(): JSX.Element {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [birthday, setBirthday] = useState<Dayjs | null>();
  const items = renderUserMenus(t);
  const [branchOptions, setBranchOptions] = useState<DefaultOptionType[]>([]);
  const [isLoadingBranch, setIsLoadingBranch] = useState<boolean>(false);

  const { data: cityOptions, isLoading: isLoadingCity } = useCityDropdown({});

  const createCustomer = useCreateCustomer({
    config: {
      onSuccess: (data) => {
        if (!data.results) {
          message.error(data.message);
          return;
        }
        message.success("Đăng ký thành công!");

        setBirthday(undefined);
        form.resetFields();
      },
      onError: (err) => {
        message.error(err.message);
      },
    },
  });

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      createCustomer.mutate({
        ...values,
        birthday: dayjs(birthday).format(formatDatePost),
      });
    });
  };

  const handleReset = () => {
    form.resetFields();
    setBirthday(undefined);
  };

  const handleChangeCity = async (city_id: string) => {
    setIsLoadingBranch(true);
    const dropdown = await getBranchesDropdown({ city_id });
    if (!dropdown.message) setBranchOptions(dropdown);
    form.setFieldValue("branch_id", dropdown[0].value);
    setIsLoadingBranch(false);
  };

  // eslint-disable-next-line arrow-body-style
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    // Can not select days before today and today
    return current && current > dayjs().endOf("day");
  };

  const renderChildren = () => {
    return (
      <div className={styles.container}>
        <Typography.Title level={3}>
          Đăng ký tham gia thành viên KINESS
        </Typography.Title>
        <Divider />
        <Form form={form} className={styles.content}>
          <Row gutter={24} className={styles.listItem}>
            <Col span={6}>
              <Typography.Text className={styles.label}>
                Trung tâm Kiness{" "}
                <Typography.Text type="danger">*</Typography.Text>
              </Typography.Text>
            </Col>
            <Col span={6}>
              <Form.Item name={"city_id"} rules={[...RULES_FORM.required]}>
                <Select
                  loading={isLoadingCity}
                  onSelect={handleChangeCity}
                  options={cityOptions || []}
                  placeholder="Chọn tỉnh, thành phố"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name={"branch_id"} rules={[...RULES_FORM.required]}>
                <Select
                  placeholder="Chọn chi nhánh"
                  loading={isLoadingBranch}
                  options={branchOptions || []}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} className={styles.listItem}>
            <Col span={6}>
              <Typography.Text className={styles.label}>
                Tên tài khoản <Typography.Text type="danger">*</Typography.Text>
              </Typography.Text>
            </Col>
            <Col span={6}>
              <Form.Item
                name={"customer_id"}
                rules={[...RULES_FORM.required, ...RULES_FORM.username]}
              >
                <Input placeholder="Tên tài khoản" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Typography.Text type="secondary">
                (Tối đa 6-10 chữ/số)
              </Typography.Text>
            </Col>
          </Row>
          <Row gutter={24} className={styles.listItem}>
            <Col span={6}>
              <Typography.Text className={styles.label}>
                Mật khẩu <Typography.Text type="danger">*</Typography.Text>
              </Typography.Text>
            </Col>
            <Col span={6}>
              <Form.Item
                name={"password"}
                rules={[...RULES_FORM.required, ...RULES_FORM.password]}
              >
                <Input.Password placeholder="Mật khẩu" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} className={styles.listItem}>
            <Col span={6}>
              <Typography.Text className={styles.label}>
                Xác nhận mật khẩu{" "}
                <Typography.Text type="danger">*</Typography.Text>
              </Typography.Text>
            </Col>
            <Col span={6}>
              <Form.Item
                name={"confirm-password"}
                rules={[
                  ...RULES_FORM.required,
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Mật khẩu phải trùng nhau "),
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder=" Xác nhận mật khẩu" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} className={styles.listItem}>
            <Col span={6}>
              <Typography.Text className={styles.label}>
                Tên thành viên{" "}
                <Typography.Text type="danger">*</Typography.Text>
              </Typography.Text>
            </Col>
            <Col span={6}>
              <Form.Item
                name={"customer_name"}
                rules={[...RULES_FORM.required]}
              >
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
                  onChange={setBirthday}
                  value={birthday?.isValid() ? birthday : undefined}
                  format={formatDateShow}
                  placeholder={formatDateShow.toLowerCase()}
                  disabledDate={disabledDate}
                  name="birthday"
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
              <Form.Item name={"gender"} initialValue={1}>
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
              <Form.Item name={"address"}>
                <Input placeholder="Địa chỉ" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} className={styles.listItem}>
            <Col span={6}>
              <Typography.Text className={styles.label}>
                Số điện thoại <Typography.Text type="danger">*</Typography.Text>
              </Typography.Text>
            </Col>
            <Col span={6}>
              <Form.Item
                name={"phone_number"}
                rules={[...RULES_FORM.required, ...RULES_FORM.phone]}
              >
                <Input placeholder="Số điện thoại" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} className={styles.listItem}>
            <Col span={6}>
              <Typography.Text className={styles.label}>
                Email <Typography.Text type="danger">*</Typography.Text>
              </Typography.Text>
            </Col>
            <Col span={6}>
              <Form.Item
                name="email"
                rules={[...RULES_FORM.required, ...RULES_FORM.email]}
              >
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
          </Row>
          <Row className={styles.footerForm}>
            <Col span={24}>
              <Button type="default" htmlType="reset" onClick={handleReset}>
                {t("all.btn_cancel")}
              </Button>
              <Button
                className="filled"
                htmlType="submit"
                onClick={handleSubmit}
                loading={createCustomer.isLoading}
              >
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
