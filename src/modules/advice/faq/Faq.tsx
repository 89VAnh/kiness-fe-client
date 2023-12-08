import { CaretRightOutlined } from "@ant-design/icons";
import {
  Collapse,
  CollapseProps,
  Divider,
  Pagination,
  Radio,
  Space,
  Spin,
  Typography,
  theme,
} from "antd";
import { DefaultOptionType } from "antd/es/select";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { useFaqTopicDropdown } from "@/loader/faq-topic.loader";
import { useSearchFaqs } from "@/loader/faq.loader";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import styles from "./scss/faq.module.scss";

export default function Faq(): JSX.Element {
  const { t } = useTranslation();
  const [topicOptions, setTopicOptions] = useState<DefaultOptionType[]>([
    { label: t("all.all"), value: "" },
  ]);
  const [currentTopic, setCurrentTopic] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const { token } = theme.useToken();

  useFaqTopicDropdown({
    config: {
      onSuccess: (data) => {
        if (data.success) {
          setTopicOptions((prev) =>
            prev.length === 1 ? [...prev, ...data?.data] : [...prev],
          );
        }
      },
    },
  });

  const { data: dataFaqs, isLoading: isLoadingFaq } = useSearchFaqs({
    params: {
      pageIndex: page,
      pageSize,
      topic_id: currentTopic || null,
    },
  });

  const getItems: () => CollapseProps["items"] = () =>
    !dataFaqs?.success
      ? []
      : dataFaqs?.data?.data?.map((item: any) => ({
          key: item.id,
          label: (
            <Space wrap>
              <div className={styles.iconQues}>Q</div>
              <Typography.Text className={`${styles.headerText} font-mint`}>
                {item.topic_name}
              </Typography.Text>
              <Typography.Text className={styles.headerText}>
                {item.question}
              </Typography.Text>
            </Space>
          ),
          children: (
            <Space
              style={{ alignItems: "flex-start", gap: 16 }}
              rootClassName={styles.content}
            >
              <div className={styles.iconAnswer}>A</div>
              {item.answer}
            </Space>
          ),
        }));

  return (
    <>
      <Title />

      <Breadcrumb />

      <section className={styles.contentWrap}>
        <div className="inner">
          <Radio.Group
            buttonStyle="solid"
            defaultValue={currentTopic}
            onChange={(value) => {
              setCurrentTopic(value.target.value);
              setPage(1);
              setPageSize(10);
            }}
          >
            {topicOptions?.map((item) => (
              <Radio.Button key={item.value} value={item.value}>
                {item.label}
              </Radio.Button>
            ))}
          </Radio.Group>

          <div style={{ marginTop: 10 }}>
            <Typography.Text type="secondary">{`Tổng cộng ${dataFaqs?.data?.totalItems} mục, trang ${page}`}</Typography.Text>
          </div>
          <Divider />

          <Spin spinning={isLoadingFaq}>
            <Collapse
              bordered={false}
              accordion
              expandIconPosition="end"
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              style={{ background: token.colorBgContainer }}
              items={getItems()}
            />
          </Spin>

          <div className={styles.paginationWrap}>
            <Pagination
              total={dataFaqs?.data?.totalItems || 0}
              current={page}
              pageSize={pageSize}
              onChange={(page, pageSize) => {
                setPage(page);
                setPageSize(pageSize);
              }}
              hideOnSinglePage
            />
          </div>
        </div>
      </section>
    </>
  );
}
