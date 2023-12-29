import { Button, Col, Form, InputNumber, Radio, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import kiImg from "@/assets/img/expected/img_ki.png";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import DivTransition from "@/modules/shared/transition/DivTransition";
import { FORECAST_URL } from "@/urls";
import { sessionService } from "@/utils/storage";

import styles from "./scss/current.module.scss";
import {
  bertalanffyGrowthModel,
  calculateAge,
  findNearestClass,
  getGrowthRate,
  sampleData,
  scaleRecord,
} from "./utils/calculator-height";

export default function Current(): JSX.Element {
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
      }
    });
  };

  return (
    <>
      <Title />

      <Breadcrumb />

      <section className={styles.contentWrap}>
        <div className="inner">
          <div className={styles.headerWrap}>
            <DivTransition className={styles.headerTitle}>
              <Typography.Title level={2}>
                Chiều cao dự đoán của tôi dựa trên chiều cao hiện tại của tôi
              </Typography.Title>

              <Typography.Paragraph className={styles.headerParagraph}>
                Trong khi chiều cao trung bình của thanh thiếu niên Hàn Quốc đã
                tăng hơn 10 cm so với thế hệ cha mẹ thì các bậc cha mẹ thấp bé
                lại lo lắng con mình sẽ giống vóc dáng thấp bé của chính mình,
                đồng thời trẻ cũng rất quan tâm đến việc tăng trưởng chiều cao
                ngay từ khi còn nhỏ. . Chúng tôi đã tạo góc My Prediction Key để
                các bạn có thể dễ dàng tìm ra key dự đoán mà nhiều người tò mò.
              </Typography.Paragraph>
            </DivTransition>
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
                        Phím dự đoán dựa trên chiều cao hiện tại của bạn
                      </Typography.Title>
                      <Typography.Text className={styles.description}>
                        Chúng tôi sẽ cho bạn biết bạn sẽ cao bao nhiêu khi lớn
                        lên dựa trên chiều cao hiện tại của bạn.
                      </Typography.Text>

                      <Form.Item
                        name={"gender"}
                        label="Giới tính"
                        initialValue={1}
                      >
                        <Radio.Group>
                          <Radio value={0}> Nữ </Radio>
                          <Radio value={1}> Nam </Radio>
                        </Radio.Group>
                      </Form.Item>

                      <Form.Item name={"height"} label="Chiều cao hiện tại">
                        <InputNumber
                          min={0}
                          addonAfter="cm"
                          style={{ width: "100%" }}
                          onKeyDown={(event) => {
                            console.log(event.key);
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
                              <InputNumber
                                min={1}
                                max={31}
                                addonBefore="Ngày"
                              />
                            </Form.Item>
                          </Col>
                          <Col span={8}>
                            <Form.Item name={"month"}>
                              <InputNumber
                                min={1}
                                max={12}
                                addonBefore="Tháng"
                              />
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
          </div>
        </div>
      </section>

      {/* <Modal
        open={!!heightResult?.height}
        title={"Kết quả"}
        onCancel={() => setHeightResult(null)}
        onOk={() => setHeightResult(null)}
        cancelButtonProps={{
          hidden: true,
          style: { display: "none" },
        }}
      >
        <Typography.Title level={5}>
          Dự đoán chiều cao khi đến tuổi trưởng thành (18 tuổi) dựa vào chiều
          cao hiện tại của bạn
        </Typography.Title>
        <div>
          Chiều cao trưởng thành:{" "}
          <Typography.Text strong type="danger">
            {heightResult?.height}
          </Typography.Text>
          cm
        </div>
        <div>
          Tỉ lệ tăng trưởng hiện tại:{" "}
          <Typography.Text strong>
            {heightResult?.growth} (Nhóm {heightResult?.label})
          </Typography.Text>
        </div>
      </Modal> */}
    </>
  );
}
