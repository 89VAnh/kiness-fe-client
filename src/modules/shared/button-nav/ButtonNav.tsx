import {
  BookOutlined,
  CalculatorOutlined,
  CalendarOutlined,
  CommentOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { FloatButton } from "antd/lib";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import {
  ADVICE_EX_URL,
  ADVICE_FAQ_URL,
  ADVICE_OVERHAUL_URL,
  CASE_STORY_URL,
  EXPECTED_CURRENT_URL,
} from "@/urls";

export default function ButtonNav(): JSX.Element {
  const { t } = useTranslation();
  const [open, setOpen] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = (e: any) => {
      setIsMobile(e.target.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isMobile && (
        <FloatButton.Group
          trigger="click"
          shape="square"
          // type="primary"
          open={open}
          style={{ bottom: 100 }}
          onClick={() => setOpen(!open)}
          icon={<SettingOutlined />}
        >
          <FloatButton
            icon={
              <Link to={ADVICE_OVERHAUL_URL} style={{ color: "#000" }}>
                <SearchOutlined />
              </Link>
            }
            tooltip={t("nav.advice.overhaul.title")}
          />
          <FloatButton
            icon={
              <Link to={ADVICE_EX_URL} style={{ color: "#000" }}>
                <CalendarOutlined />
              </Link>
            }
            tooltip={t("nav.advice.ex.title")}
          />
          <FloatButton
            icon={
              <Link to={CASE_STORY_URL} style={{ color: "#000" }}>
                <BookOutlined />
              </Link>
            }
            tooltip={t("nav.case.story.title")}
          />
          <FloatButton
            icon={
              <Link to={EXPECTED_CURRENT_URL} style={{ color: "#000" }}>
                <CalculatorOutlined />
              </Link>
            }
            tooltip={t("nav.expected.current.title")}
          />
          <FloatButton
            icon={
              <Link to={ADVICE_FAQ_URL} style={{ color: "#000" }}>
                <CommentOutlined />
              </Link>
            }
            tooltip={t("nav.advice.faq.title")}
          />
        </FloatButton.Group>
      )}
      <FloatButton.BackTop duration={0.2} />
    </>
  );
}
