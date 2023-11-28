import { CaretRightOutlined } from "@ant-design/icons";
import {
  Collapse,
  CollapseProps,
  Divider,
  Pagination,
  Radio,
  Space,
  Typography,
  theme,
} from "antd";
import _ from "lodash";
import { useEffect, useState } from "react";

import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import { dataFaq, faqDropdown } from "./data/data-fake";
import styles from "./scss/faq.module.scss";

export default function Faq(): JSX.Element {
  const [currentType, setCurrentType] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [originData, setOriginData] = useState(dataFaq);
  const [currentData, setCurrentData] = useState<any[]>([]);
  const { token } = theme.useToken();

  useEffect(() => {
    const data = dataFaq.filter((i) =>
      currentType ? i.type_id === currentType : true,
    );
    setOriginData(data);
    setCurrentData(
      _.slice(
        _.clone(data),
        (page - 1) * pageSize,
        (page - 1) * pageSize + pageSize,
      ),
    );
  }, [currentType, page, pageSize]);

  const getItems: () => CollapseProps["items"] = () =>
    _.clone(currentData).map((item) => ({
      key: item.id,
      label: (
        <Space wrap>
          <div className={styles.iconQues}>Q</div>
          <Typography.Text className={`${styles.headerText} font-mint`}>
            {item.type_name}
          </Typography.Text>
          <Typography.Text className={styles.headerText}>
            {item.title}
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

      <div className={styles.contentWrap}>
        <div className="inner">
          <Radio.Group
            buttonStyle="solid"
            defaultValue={currentType}
            onChange={(value) => {
              setCurrentType(value.target.value);
              setPage(1);
              setPageSize(10);
            }}
          >
            {faqDropdown.map((item) => (
              <Radio.Button key={item.value} value={item.value}>
                {item.label}
              </Radio.Button>
            ))}
          </Radio.Group>

          <div style={{ marginTop: 10 }}>
            <Typography.Text type="secondary">{`Tổng cộng ${originData.length} mục, trang ${page}`}</Typography.Text>
          </div>
          <Divider />

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

          <div className={styles.paginationWrap}>
            <Pagination
              total={originData.length}
              current={page}
              pageSize={pageSize}
              onChange={(page, pageSize) => {
                setPage(page);
                setPageSize(pageSize);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
