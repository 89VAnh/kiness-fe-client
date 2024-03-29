import { Button, Col, Form, Input, Row, message } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { useCreateRequest } from "@/loader/request.loader";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import { RULES_FORM } from "@/utils/validator";

import styles from "./scss/inquiry-write.module.scss";

export default function InquiryWrite(): JSX.Element {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const createRequest = useCreateRequest({
    config: {
      onSuccess: (data) => {
        if (data.success) {
          message.success(t("messages.create_success"));

          form.resetFields();
        } else message.error(data.message);
      },
      onError: (err) => {
        message.error(err.message);
      },
    },
  });

  const onFinish = () => {
    form
      .validateFields()
      .then(async (values) => {
        createRequest.mutate({
          ...values,
          is_accepted: false,
          is_answered: false,
          created_by_user_id: values.author_name,
        });
      })
      .catch((err) => {
        console.log(err);
        message.warning(t("messages.validate_form"));
      });
  };

  return (
    <>
      <Title title={t("nav.advice.inquiry.title")} />

      <Breadcrumb showLast={false} />

      <section className={styles.contentWrap}>
        <div className="inner">
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Row gutter={16}>
              <Col span={24} md={12}>
                <Form.Item
                  label={t("inquiry.form.author_name")}
                  name={"author_name"}
                  rules={[...RULES_FORM.required]}
                >
                  <Input placeholder={t("inquiry.form.author_name")} />
                </Form.Item>
              </Col>
              <Col span={24} md={12}>
                <Form.Item
                  label={t("inquiry.form.password")}
                  name={"password"}
                  rules={[...RULES_FORM.required, ...RULES_FORM.password]}
                >
                  <Input.Password placeholder={t("inquiry.form.password")} />
                </Form.Item>
              </Col>

              <Col span={24} md={12}>
                <Form.Item
                  label={t("inquiry.form.email")}
                  name={"email"}
                  rules={[...RULES_FORM.email]}
                >
                  <Input placeholder={t("inquiry.form.email")} />
                </Form.Item>
              </Col>
              <Col span={24} md={12}>
                <Form.Item
                  label={t("inquiry.form.phone")}
                  name={"phone"}
                  rules={[...RULES_FORM.phone]}
                >
                  <Input placeholder={t("inquiry.form.phone")} />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item
                  label={t("inquiry.form.subject")}
                  name={"subject"}
                  rules={[...RULES_FORM.required]}
                >
                  <Input placeholder={t("inquiry.form.subject")} />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item
                  label={t("inquiry.form.content")}
                  name={"content"}
                  rules={[...RULES_FORM.required]}
                >
                  <Input.TextArea
                    rows={5}
                    placeholder={t("inquiry.form.content")}
                  />
                </Form.Item>
              </Col>

              <Col span={24} style={{ textAlign: "right" }}>
                <Button
                  type="default"
                  style={{ marginRight: 10 }}
                  onClick={() => navigate(-1)}
                >
                  {t("all.btn_cancel")}
                </Button>
                <Button type="primary" htmlType="submit" className="btn-mint">
                  {t("all.btn_ok")}
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </section>
    </>
  );
}
