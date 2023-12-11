import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Radio,
  Row,
  Select,
  message,
} from "antd";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

import { useDisclosure } from "@/hooks/useDisclosure";
import { useCreateExperienceRegister } from "@/loader/experience-register.loader";
import { IBranch } from "@/models/branch";
import { formatDatePost } from "@/utils/format-string";
import { RULES_FORM } from "@/utils/validator";

import { listLevels } from "../data/data-fake";
import styles from "../scss/ex.module.scss";

interface Props {
  branch: IBranch;
}

export default function ExModal({ branch }: Props): JSX.Element {
  const { open, close, isOpen } = useDisclosure();
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const sendRegister = useCreateExperienceRegister({
    config: {
      onSuccess: () => {
        message.success(t("messages.register_success"));
        handleClose();
      },
      onError: () => {
        message.error(t("messages.register_failure"));
      },
    },
  });

  const handleOpen = () => {
    form.setFieldsValue(branch);
    open();
  };

  const handleClose = () => {
    form.resetFields();
    close();
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        const dataPost = {
          ...values,
          date: dayjs(values.date).format(formatDatePost),
          branch_id: branch.branch_id,
          created_by_user_id: values.fullname,
        };

        sendRegister.mutate(dataPost);
      })
      .catch(() => {
        message.warning(t("messages.validate_failure"));
      });
  };

  return (
    <>
      <Button
        className={`btn-mint ${styles.btnRegis}`}
        type="primary"
        onClick={handleOpen}
      >
        {t("ex.btn_register")}
      </Button>

      <Modal
        open={isOpen}
        onCancel={handleClose}
        onOk={handleSubmit}
        confirmLoading={sendRegister.isLoading}
        title={t("ex.modal.title_register")}
        className={styles.modal}
        maskClosable={false}
      >
        <Form form={form} spellCheck={false} layout="vertical">
          <Row gutter={16}>
            <Col span={24} lg={12}>
              <Form.Item
                name={"branch_name"}
                label={t("ex.modal.fields.branch")}
              >
                <Input className={styles.inputDisabled} disabled />
              </Form.Item>
            </Col>
            <Col span={24} lg={12}>
              <Form.Item name={"city_name"} label={t("ex.modal.fields.city")}>
                <Input className={styles.inputDisabled} disabled />
              </Form.Item>
            </Col>

            <Col span={24} lg={12}>
              <Form.Item
                name={"open_time"}
                label={t("ex.modal.fields.open_time")}
              >
                <Input className={styles.inputDisabled} disabled />
              </Form.Item>
            </Col>
            <Col span={24} lg={12}>
              <Form.Item
                name={"close_time"}
                label={t("ex.modal.fields.close_time")}
              >
                <Input className={styles.inputDisabled} disabled />
              </Form.Item>
            </Col>

            <Col span={24} lg={12}>
              <Form.Item
                name={"fullname"}
                label={t("ex.modal.fields.your_name")}
                rules={[...RULES_FORM.required]}
              >
                <Input placeholder={t("ex.modal.fields.your_name")} />
              </Form.Item>
            </Col>
            <Col span={24} lg={12}>
              <Form.Item
                name={"gender"}
                label={t("ex.modal.fields.your_gender")}
                initialValue={0}
                rules={[...RULES_FORM.required]}
              >
                <Radio.Group>
                  <Radio value={1}>Nam</Radio>
                  <Radio value={0}>Nữ</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>

            <Col span={24} lg={12}>
              <Form.Item
                name={"level"}
                label={t("ex.modal.fields.your_level")}
                rules={[...RULES_FORM.required]}
              >
                <Select
                  options={listLevels}
                  placeholder={t("ex.modal.fields.your_level")}
                />
              </Form.Item>
            </Col>
            <Col span={24} lg={12}>
              <Form.Item
                name={"phone_number"}
                label={t("ex.modal.fields.your_phone")}
                rules={[...RULES_FORM.required, ...RULES_FORM.phone]}
              >
                <Input placeholder={t("ex.modal.fields.your_phone")} />
              </Form.Item>
            </Col>

            <Col span={24} lg={12}>
              <Form.Item
                name={"email"}
                label={t("ex.modal.fields.your_email")}
                rules={[...RULES_FORM.required, ...RULES_FORM.email]}
              >
                <Input placeholder={t("ex.modal.fields.your_email")} />
              </Form.Item>
            </Col>
            <Col span={24} lg={12}>
              <Form.Item
                name={"date"}
                label={t("ex.modal.fields.date_come")}
                rules={[...RULES_FORM.required]}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name={"address"}
                label={t("ex.modal.fields.your_address")}
              >
                <Input placeholder={t("ex.modal.fields.your_address")} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name={"detail"} label={t("ex.modal.fields.your_note")}>
                <Input.TextArea
                  rows={2}
                  style={{ width: "100%" }}
                  placeholder={t("ex.modal.fields.your_note")}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}
