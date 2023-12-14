import { LockOutlined } from "@ant-design/icons";
import { Divider, Form, Input, Modal, Space, Typography, message } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { PASSWORD_SESSION } from "@/constant/config";
import { useDisclosure } from "@/hooks/useDisclosure";
import { usePostRequestDetail } from "@/loader/request.loader";
import { IRequest } from "@/models/request";
import { ADVICE_INQUIRY_DETAIL_URL } from "@/urls";
import { encodedData, getUrlToDetail } from "@/utils/format-string";
import { sessionService } from "@/utils/storage";
import { RULES_FORM } from "@/utils/validator";

interface Props {
  record: IRequest;
  styles: CSSModuleClasses;
}

export default function InquiryModal({ record, styles }: Props): JSX.Element {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const { open, close, isOpen } = useDisclosure();
  const navigate = useNavigate();

  const { mutate: getRequestDetail } = usePostRequestDetail({
    config: {
      onSuccess: (data, variables: IRequest) => {
        if (data.success) {
          sessionService.setStorage(
            PASSWORD_SESSION,
            encodedData(variables.password),
          );
          navigate(
            getUrlToDetail(ADVICE_INQUIRY_DETAIL_URL, variables.request_id),
          );
        } else message.error(data.message);
      },
      onError: () => {
        message.error(t("messages.error"));
      },
    },
  });

  const handleOpen = () => {
    open();
  };

  const handleClose = () => {
    form.resetFields();
    close();
  };

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      const dataPost: IRequest = {
        ...values,
        request_id: record.request_id,
      };

      getRequestDetail(dataPost);
    });
  };

  return (
    <>
      <Space onClick={handleOpen}>
        {record.password ? <LockOutlined /> : ""}
        <Typography.Link className={styles.link}>
          <Typography.Text>{record.subject}</Typography.Text>
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
        <Typography.Title level={3}>{record.subject}</Typography.Title>
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
            <Input.Password
              autoFocus
              style={{ maxWidth: 200 }}
              placeholder="Mật khẩu"
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
