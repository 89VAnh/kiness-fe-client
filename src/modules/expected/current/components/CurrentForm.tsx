import { Button, Col, Form, InputNumber, Radio, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import kiImg from "@/assets/img/expected/img_ki.png";
import DivTransition from "@/modules/shared/transition/DivTransition";
import { FORECAST_URL } from "@/urls";
import { sessionService } from "@/utils/storage";

import {
  bertalanffyGrowthModel,
  calculateAge,
  findNearestClass,
  getGrowthRate,
  sampleData,
  scaleRecord,
} from "../utils/calculator-height";

export default function CurrentForm({ styles }: { styles: any }): JSX.Element {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      const age = calculateAge(`${values.day}/${values.month}/${values.year}`);
      const currentHeight = values?.height;
      const gender = values?.gender;

      // const classLabel = findNearestClass(
      //   gender,
      //   age,
      //   currentHeight,
      //   sampleData,
      // );

      // const growthRate = getGrowthRate(classLabel);

      const scale = scaleRecord(age, currentHeight);

      const classLabel2 = findNearestClass(
        gender,
        scale.scaledAge,
        scale.scaledHeight,
        sampleData,
      );

      const growthRate2 = getGrowthRate(classLabel2);

      // Giữ mặc định
      let L_infinity = 180.1;
      if (gender !== 1) L_infinity = 176.8;
      const m = 3;
      const t0 = 0;

      const result = bertalanffyGrowthModel(
        age,
        L_infinity,
        growthRate2,
        t0,
        m,
      );

      if (!isNaN(+result)) {
        sessionService.setStorage(
          "fore_cast_result",
          JSON.stringify({
            height: +result,
            label: classLabel2,
            growth: growthRate2,
          }),
        );
        navigate(FORECAST_URL);
      } else window.alert("Có lỗi xảy ra! Vui lòng nhập lại.");
    });
  };

  return (
    <DivTransition className={styles.expectationBox}>
      <Row>
        <Col span={24} lg={12}>
          <div className={styles.img}>
            <img src={kiImg} alt="ki" />
          </div>
        </Col>
        <Col span={24} lg={12}>
          <div className={styles.expectation}>
            <Form form={form} labelAlign="left" labelCol={{ span: 6 }}>
              <Typography.Title level={3}>
                Bạn muốn biết chiều cao của trẻ khi trưởng thành?
              </Typography.Title>
              <Typography.Text className={styles.description}>
                Chúng tôi sẽ cho bạn biết chiều cao của trẻ khi lớn lên dựa trên
                chiều cao hiện tại của trẻ
              </Typography.Text>

              <Form.Item name={"gender"} label="Giới tính" initialValue={1}>
                <Radio.Group>
                  <Radio value={1}> Nam </Radio>
                  <Radio value={0}> Nữ </Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item name={"height"} label="Chiều cao hiện tại">
                <InputNumber
                  min={0}
                  addonAfter="cm"
                  style={{ width: "100%" }}
                  onKeyDown={(event) => {
                    // console.log(event.key);
                    if (!/[0-9]|Backspace/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </Form.Item>

              <Form.Item label="Ngày sinh">
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item name={"day"}>
                      <InputNumber min={1} max={31} addonBefore="Ngày" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name={"month"}>
                      <InputNumber min={1} max={12} addonBefore="Tháng" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name={"year"}>
                      <InputNumber addonBefore="Năm" />
                    </Form.Item>
                  </Col>
                </Row>
              </Form.Item>

              <Button
                htmlType="submit"
                type="primary"
                className="btn-link btn-mint"
                onClick={handleSubmit}
              >
                Xem kết quả
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </DivTransition>
  );
}
