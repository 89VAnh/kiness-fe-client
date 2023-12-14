import {
  CheckCircleFilled,
  ClockCircleOutlined,
  LeftOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Spin, Typography } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import { ERROR_TIMEOUT, PASSWORD_SESSION } from "@/constant/config";
import { useGetRequestDetail } from "@/loader/request.loader";
import { NotAuthorizationPage } from "@/modules/error/403";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import { decodedData, formatDateShow } from "@/utils/format-string";
import { sessionService } from "@/utils/storage";

import styles from "./scss/inquiry-detail.module.scss";

export default function InquiryDetail(): JSX.Element {
  const { t } = useTranslation();
  const { id } = useParams();
  const pwd = JSON.parse(
    decodedData(sessionService.getStorage(PASSWORD_SESSION) || ""),
  );
  const [isPermission, setIsPermission] = useState<boolean>(!!pwd);
  const navigate = useNavigate();

  const {
    data: dataInquiry,
    isLoading,
    refetch,
  } = useGetRequestDetail({
    params: {
      password: pwd,
      request_id: id,
    },
    config: {
      onSuccess: (data) => {
        if (data.message === ERROR_TIMEOUT) {
          refetch();
        }
        if (!data.success) return setIsPermission(false);
        else {
        }
      },
    },
  });

  if (!isPermission) return <NotAuthorizationPage />;

  return (
    <>
      <Title title={t("nav.advice.inquiry.title")} />

      <Breadcrumb showLast={false} />

      <section className={styles.contentWrap}>
        <div className="inner">
          <Typography.Link
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            <Typography.Title level={4} type="secondary">
              <LeftOutlined /> {t("all.back")}
            </Typography.Title>
          </Typography.Link>
          <Spin spinning={isLoading}>
            <Typography.Title level={3} style={{ textAlign: "center" }}>
              {dataInquiry?.data?.subject}{" "}
              {dataInquiry?.data?.is_answered && (
                <Typography.Text type="success" title="Đã trả lời">
                  <CheckCircleFilled />
                </Typography.Text>
              )}
            </Typography.Title>

            <div className={styles.container}>
              <div className={styles.questionWrap}>
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
                <div className={styles.flex1}>
                  <Typography.Text
                    strong
                    style={{ display: "block", textAlign: "left" }}
                  >
                    {dataInquiry?.data?.author_name}
                  </Typography.Text>
                  <Typography.Text
                    type="secondary"
                    style={{
                      fontSize: 12,
                      textAlign: "left",
                      display: "block",
                    }}
                  >
                    <ClockCircleOutlined />{" "}
                    {dayjs(dataInquiry?.data?.created_date_time).format(
                      formatDateShow + " HH:mm:ss",
                    )}
                  </Typography.Text>
                  <Card className={styles.content}>
                    {dataInquiry?.data?.content}
                  </Card>
                </div>
              </div>
              <div className={styles.answerWrap}>
                <div className={styles.flex1}>
                  <Typography.Text
                    strong
                    style={{ textAlign: "right", display: "block" }}
                  >
                    {dataInquiry?.data?.answered_by}
                  </Typography.Text>
                  <Typography.Text
                    type="secondary"
                    style={{
                      textAlign: "right",
                      display: "block",
                      fontSize: 12,
                    }}
                  >
                    <ClockCircleOutlined />{" "}
                    {dayjs(dataInquiry?.data?.lu_updated).format(
                      formatDateShow + " HH:mm:ss",
                    )}
                  </Typography.Text>
                  <Card className={"bg-mint " + styles.content}>
                    {dataInquiry?.data?.answer}
                  </Card>
                </div>
                <Avatar
                  style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
                >
                  A
                </Avatar>
              </div>
            </div>
          </Spin>
        </div>
      </section>
    </>
  );
}
