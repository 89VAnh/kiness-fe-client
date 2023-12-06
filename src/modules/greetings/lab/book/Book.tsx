import {
  Col,
  Divider,
  Image,
  Input,
  Radio,
  Row,
  Space,
  Typography,
} from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import { bookDropdown, dataBook } from "./data/data-fake";
import styles from "./scss/book.module.scss";

export default function Book(): JSX.Element {
  const { t } = useTranslation();
  const [currentType, setCurrentType] = useState<string>("");

  return (
    <>
      <Title />

      <Breadcrumb />

      <section className={styles.contentWrap}>
        <div className="inner">
          <div className={styles.headerContent}>
            <Space className={styles.radioGroup}>
              <Radio.Group
                buttonStyle="solid"
                defaultValue={currentType}
                onChange={(value) => setCurrentType(value.target.value)}
              >
                {bookDropdown.map((item) => (
                  <Radio.Button key={item.value} value={item.value}>
                    {item.label}
                  </Radio.Button>
                ))}
              </Radio.Group>
            </Space>
            <Input.Search
              style={{ maxWidth: 300 }}
              placeholder={t("thesis.search_placeholder")}
            />
          </div>
          <Divider />

          <Row gutter={16}>
            {dataBook
              .filter((item) =>
                currentType ? item.type === currentType : true,
              )
              .map((item, index) => (
                <Col
                  key={index}
                  span={24}
                  md={8}
                  lg={4.8}
                  style={{ marginBottom: 16 }}
                >
                  <div>
                    <Image
                      src={item.thumb}
                      wrapperStyle={{ width: "100%" }}
                      className={styles.thumbnail}
                      style={{ maxHeight: 300, objectFit: "cover" }}
                    />

                    <div className={styles.textWrap}>
                      <Typography.Text strong>{item.type}</Typography.Text>
                      <Typography.Title level={4}>
                        {item.title}{" "}
                      </Typography.Title>

                      <Typography.Text type="secondary" strong>
                        {item.date}
                      </Typography.Text>
                    </div>
                  </div>
                </Col>
              ))}
          </Row>
        </div>
      </section>
    </>
  );
}
