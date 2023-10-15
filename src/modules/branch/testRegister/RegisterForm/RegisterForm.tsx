import {
  Button,
  Col,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  Radio,
  Row,
  Select,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";

import { branches, cities } from "./data/fakeData.json";
import styles from "./scss/registerForm.module.scss";

type City = {
  id: string;
  name: string;
};

type Branch = {
  id: string;
  cityId: string;
  name: string;
};

export default function RegisterForm() {
  const [enableBranches, setEnableBranches] = useState<Branch[]>(
    branches.filter((x) => x.cityId === cities[0].id),
  );
  const changeCity = (value: string) => {
    setEnableBranches(branches.filter((x) => x.cityId === value));
  };

  const items = [
    {
      key: "branch",
      label: "Trung tâm Kiness",
      input: (
        <Row gutter={24}>
          <Col span={7}>
            <Form.Item name="city" required>
              <Select
                placeholder="Chọn tỉnh, thành phố"
                style={{ width: "100%" }}
                onChange={changeCity}
                options={cities.map((x) => ({
                  value: x.id,
                  label: x.name,
                }))}
              />
            </Form.Item>
          </Col>
          <Col span={13}>
            <Form.Item name="branch" required>
              <Select
                placeholder="Chọn chi nhánh"
                style={{ width: "100%" }}
                options={enableBranches.map((x) => ({
                  value: x.id,
                  label: x.name,
                }))}
              />
            </Form.Item>
          </Col>
        </Row>
      ),
    },
    {
      key: "name",
      label: "Tên người đăng ký kiểm tra",
      input: (
        <Col span={7}>
          <Form.Item name="name" required>
            <Input placeholder="Họ và tên" />
          </Form.Item>
        </Col>
      ),
    },
    {
      key: "gender",
      label: "Giới tính",
      input: (
        <Col>
          <Form.Item name="gender" required>
            <Radio.Group defaultValue="male">
              <Radio value="male"> Nam </Radio>
              <Radio value="female"> Nữ </Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      ),
    },
    {
      key: "level",
      label: "Cấp",
      input: (
        <Form.Item name="level" wrapperCol={{ span: 20 }} required>
          <Select
            placeholder="Chọn"
            options={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
            ]}
          />
        </Form.Item>
      ),
    },
    {
      key: "date",
      label: "Ngày đặt kiểm tra",
      input: (
        <Form.Item name="date" wrapperCol={{ span: 7 }} required>
          <DatePicker placeholder="Chọn ngày" />
        </Form.Item>
      ),
    },
    {
      key: "phone",
      label: "Số điện thoại",
      input: (
        <Form.Item name="phone" wrapperCol={{ span: 7 }} required>
          <Input placeholder="Số điện thoại" />
        </Form.Item>
      ),
    },
    {
      key: "address",
      label: "Địa chỉ",
      input: (
        <Form.Item name="address" wrapperCol={{ span: 22 }} required>
          <Input placeholder="Địa chỉ" />
        </Form.Item>
      ),
    },
    {
      key: "detail",
      label: "Chi tiết",
      input: (
        <Form.Item name="detail" wrapperCol={{ span: 22 }} required>
          <TextArea rows={6} />
        </Form.Item>
      ),
    },
  ];

  const onFinish = (values: object) => {
    console.log(values);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#159AC9",
        },
      }}
    >
      <Form className={styles.form} onFinish={onFinish}>
        {items.map((item) => (
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
          <Col offset={14}>
            <Form.Item>
              <Button type="default" htmlType="reset">
                Hủy
              </Button>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Đăng ký
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </ConfigProvider>
  );
}
