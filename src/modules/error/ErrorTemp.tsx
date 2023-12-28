import { Button, Result } from "antd";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// import { useNavigate } from "react-router-dom";

// import { HOME_URL } from "@/urls";

export function ErrorTemp({ resetErrorBoundary }: any): JSX.Element {
  const { t } = useTranslation();
  // const navigate = useNavigate();

  useEffect(() => {
    document.title = "Lỗi hệ thống | KINESS";
  }, []);

  return (
    <Result
      style={{ paddingTop: 150 }}
      status="500"
      title={t("error.500.title")}
      subTitle={t("error.500.subTitle")}
      extra={
        <Button type="primary" onClick={backHome}>
          Thử lại
        </Button>
      }
    />
  );

  function backHome() {
    // navigate(HOME_URL);
    resetErrorBoundary();
  }
}
