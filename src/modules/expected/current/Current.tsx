import {
  Button,
  Col,
  DatePicker,
  Form,
  InputNumber,
  Radio,
  Row,
  Typography,
} from "antd";
import dayjs from "dayjs";

import kiImg from "@/assets/img/expected/img_ki.png";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import DivTransition from "@/modules/shared/transition/DivTransition";
import { formatDateShow } from "@/utils/format-string";

import styles from "./scss/current.module.scss";

export default function Current(): JSX.Element {
  const [form] = Form.useForm();

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
                    <Form form={form}>
                      <Typography.Title level={3}>
                        Phím dự đoán dựa trên chiều cao hiện tại của bạn
                      </Typography.Title>
                      <Typography.Text className={styles.description}>
                        Chúng tôi sẽ cho bạn biết bạn sẽ cao bao nhiêu khi lớn
                        lên dựa trên chiều cao hiện tại của bạn.
                      </Typography.Text>

                      <Form.Item label="Giới tính">
                        <Radio.Group>
                          <Radio value={0}> Nữ </Radio>
                          <Radio value={1}> Nam </Radio>
                        </Radio.Group>
                      </Form.Item>

                      <Form.Item label="Chiều cao hiện tại">
                        <InputNumber min={0} addonAfter="cm" />
                      </Form.Item>

                      <Form.Item label="Ngày sinh">
                        <DatePicker
                          inputReadOnly
                          defaultValue={dayjs("01-01-2000", formatDateShow)}
                          format={formatDateShow}
                        />
                      </Form.Item>

                      <Button
                        htmlType="submit"
                        type="primary"
                        className="btn-link btn-mint"
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
    </>
  );
}
