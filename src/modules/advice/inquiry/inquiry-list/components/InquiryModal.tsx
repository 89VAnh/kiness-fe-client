import { LockOutlined } from "@ant-design/icons";
import { Divider, Form, Input, Modal, Space, Typography } from "antd";

import { useDisclosure } from "@/hooks/useDisclosure";
import { RULES_FORM } from "@/utils/validator";

interface Props {
  record: any;
  styles: CSSModuleClasses;
}

export default function InquiryModal({ record, styles }: Props): JSX.Element {
  const [form] = Form.useForm();
  const { open, close, isOpen } = useDisclosure();

  const handleOpen = () => {
    open();
  };

  const handleClose = () => {
    form.resetFields();
    close();
  };

  const handleSubmit = () => {
    form.validateFields();
  };

  return (
    <>
      <Space onClick={handleOpen}>
        {record.need_password ? <LockOutlined /> : ""}
        <Typography.Link className={styles.link}>
          <Typography.Text>{record.title}</Typography.Text>
        </Typography.Link>
      </Space>

      <Modal
        title={"Nhập mật khẩu"}
        open={isOpen}
        onOk={handleSubmit}
        onCancel={handleClose}
        maskClosable={false}
        className={styles.modal}
      >
        <Typography.Title level={3}>{record.title}</Typography.Title>
        <Typography.Text className="font-mint" strong>
          Bài viết này là một bài viết bí mật.
        </Typography.Text>
        <br />
        <Typography.Text>
          Chỉ tác giả và quản trị viên mới có thể xem nó.
        </Typography.Text>
        <br />
        <Typography.Text>
          Nếu là bạn, vui lòng nhập mật khẩu của bạn.
        </Typography.Text>

        <Divider />

        <Form form={form}>
          <Form.Item name={"password"} rules={[...RULES_FORM.required]}>
            <Input.Password style={{ maxWidth: 200 }} placeholder="Mật khẩu" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
