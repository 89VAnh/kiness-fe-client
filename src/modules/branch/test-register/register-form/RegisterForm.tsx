import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Typography,
  message,
} from "antd";
import { DefaultOptionType } from "antd/es/select";
import TextArea from "antd/lib/input/TextArea";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";

import { useCreateTestRegister } from "@/loader/branch.loader";
import { useCityDropdown } from "@/loader/city.loader";
import { getBranchesDropdown } from "@/services/branch.service";
import { UserState } from "@/store/auth/atom";
import { formatDatePost, formatDateShow } from "@/utils/format-string";
import { RULES_FORM } from "@/utils/validator";

import styles from "./scss/registerForm.module.scss";

export default function RegisterForm() {
  const [branchOptions, setBranchOptions] = useState<DefaultOptionType[]>([]);
  const [isLoadingBranch, setIsLoadingBranch] = useState<boolean>(false);
  const [date, setDate] = useState<Dayjs | null>();
  const userProfile = useRecoilValue(UserState);

  const { data: cityOptions, isLoading: isLoadingCity } = useCityDropdown({});
  const { t } = useTranslation();

  const createTestRegister = useCreateTestRegister({
    config: {
      onSuccess: () => {
        message.success("Đăng ký thành công!");
      },
    },
  });

  const handleChangeCity = async (city_id: string) => {
    setIsLoadingBranch(true);
    const dropdown = await getBranchesDropdown({ city_id });
    if (!dropdown.message) setBranchOptions(dropdown);
    setIsLoadingBranch(false);
  };

  const items = [
    {
      key: "branch_id",
      label: (
        <Typography.Text>
          Trung tâm Kiness <Typography.Text type="danger">*</Typography.Text>
        </Typography.Text>
      ),
      input: (
        <Row gutter={24}>
          <Col span={7}>
            <Form.Item name="city_id" rules={[...RULES_FORM.required]}>
              <Select
                loading={isLoadingCity}
                placeholder="Chọn tỉnh, thành phố"
                style={{ width: "100%" }}
                onChange={handleChangeCity}
                options={cityOptions || []}
              />
            </Form.Item>
          </Col>
          <Col span={13}>
            <Form.Item name="branch_id" rules={[...RULES_FORM.required]}>
              <Select
                loading={isLoadingBranch}
                placeholder="Chọn chi nhánh"
                style={{ width: "100%" }}
                options={branchOptions || []}
              />
            </Form.Item>
          </Col>
        </Row>
      ),
    },
    {
      key: "fullname",
      label: (
        <Typography.Text>
          Tên người ĐK kiểm tra{" "}
          <Typography.Text type="danger">*</Typography.Text>
        </Typography.Text>
      ),
      input: (
        <Col span={7}>
          <Form.Item name="fullname" rules={[...RULES_FORM.required]}>
            <Input placeholder="Họ và tên" />
          </Form.Item>
        </Col>
      ),
    },
    {
      key: "gender",
      label: (
        <Typography.Text>
          Giới tính <Typography.Text type="danger">*</Typography.Text>
        </Typography.Text>
      ),
      input: (
        <Col>
          <Form.Item
            name="gender"
            rules={[...RULES_FORM.required]}
            initialValue={"0"}
          >
            <Radio.Group>
              <Radio value="0"> Nam </Radio>
              <Radio value="1"> Nữ </Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      ),
    },
    {
      key: "level",
      label: (
        <Typography.Text>
          Cấp <Typography.Text type="danger">*</Typography.Text>
        </Typography.Text>
      ),
      input: (
        <Form.Item
          name="level"
          wrapperCol={{ span: 20 }}
          rules={[...RULES_FORM.required]}
        >
          <Select
            placeholder="Chọn"
            options={[
              { value: "Mẫu giáo", label: "Mẫu giáo" },
              { value: "Cấp 1", label: "Cấp 1" },
              { value: "Cấp 2", label: "Cấp 2" },
              { value: "Cấp 3", label: "Cấp 3" },
            ]}
          />
        </Form.Item>
      ),
    },
    {
      key: "date",
      label: (
        <Typography.Text>
          Ngày đặt kiểm tra <Typography.Text type="danger">*</Typography.Text>
        </Typography.Text>
      ),
      input: (
        <Form.Item
          name="date"
          wrapperCol={{ span: 7 }}
          rules={[...RULES_FORM.required]}
        >
          <DatePicker
            onChange={(value) => setDate(value)}
            value={date?.isValid() ? date : undefined}
            format={formatDateShow}
            placeholder={formatDateShow.toLowerCase()}
          />
        </Form.Item>
      ),
    },
    {
      key: "phone_number",
      label: (
        <Typography.Text>
          Số điện thoại <Typography.Text type="danger">*</Typography.Text>
        </Typography.Text>
      ),
      input: (
        <Form.Item
          name="phone_number"
          wrapperCol={{ span: 7 }}
          rules={[...RULES_FORM.required, ...RULES_FORM.phone]}
        >
          <Input placeholder="Số điện thoại" />
        </Form.Item>
      ),
    },
    {
      key: "address",
      label: (
        <Typography.Text>
          Địa chỉ <Typography.Text type="danger">*</Typography.Text>
        </Typography.Text>
      ),
      input: (
        <Form.Item
          name="address"
          wrapperCol={{ span: 20 }}
          rules={[...RULES_FORM.required]}
        >
          <Input placeholder="Địa chỉ" />
        </Form.Item>
      ),
    },
    {
      key: "detail",
      label: <Typography.Text>Chi tiết</Typography.Text>,
      input: (
        <Form.Item name="detail" wrapperCol={{ span: 20 }}>
          <TextArea rows={5} placeholder="Chi tiết" />
        </Form.Item>
      ),
    },
  ];

  const onFinish = (value: object) => {
    createTestRegister.mutate({
      ...value,
      date: dayjs(date).format(formatDatePost),
      created_by_user_id: userProfile.user_id || 1,
    });
  };

  return (
    <Form className={styles.form} onFinish={onFinish}>
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
