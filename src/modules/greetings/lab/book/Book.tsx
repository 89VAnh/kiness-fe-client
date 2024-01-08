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
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import { BASE_URL, ERROR_TIMEOUT } from "@/constant/config";
import { useBookAuthorDropdown } from "@/loader/book-author.loader";
import { useSearchBooks } from "@/loader/book.loader";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import { formatDateShow } from "@/utils/format-string";

import styles from "./scss/book.module.scss";

export default function Book(): JSX.Element {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchContent, setSearchContent] = useState<string | null>(
    searchParams.get("k") || "",
  );
  const [authorId, setAuthorId] = useState<number | null>(
    Number(searchParams.get("sca")) || 0,
  );

  const { data: bookAuthors, remove: authorRemove } = useBookAuthorDropdown({});

  const {
    data: books,
    remove: booksRemove,
    refetch: bookRefetch,
  } = useSearchBooks({
    params: {
      page_index: 0,
      page_size: 0,
      search_content: searchContent,
      author_id: authorId,
    },
    config: {
      onSuccess: (data) => {
        if (data.message === ERROR_TIMEOUT) {
          bookRefetch();
        }
      },
    },
  });

  useEffect(() => authorRemove, [authorRemove]);
  useEffect(() => booksRemove, [booksRemove]);

  const handleSearch = (value: string) => {
    searchParams.delete("page");

    if (value === "") searchParams.delete("k");
    else searchParams.set("k", value);

    setSearchParams(searchParams);

    setSearchContent(value);
  };

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
                defaultValue={authorId}
                onChange={(value) => {
                  const target = value.target;

                  if (Number(target.value) !== 0)
                    searchParams.set("sca", target.title + "");
                  else searchParams.delete("sca");

                  setSearchParams(searchParams);
                  setAuthorId(target.value);
                }}
              >
                {bookAuthors && bookAuthors.success
                  ? [
                      {
                        label: "Tất cả",
                        value: 0,
                      },
                      ...bookAuthors.data,
                    ].map((item) => (
                      <Radio.Button
                        key={item.value}
                        value={item.value}
                        title={item.label}
                      >
                        {item.label}
                      </Radio.Button>
                    ))
                  : []}
              </Radio.Group>
            </Space>
            <Input.Search
              style={{ maxWidth: 300 }}
              placeholder={t("thesis.search_placeholder")}
              onSearch={handleSearch}
            />
          </div>
          <Divider />

          <Row gutter={16}>
            {books ? (
              books?.data?.data?.map((item: any, index: number) => (
                <Col
                  key={index}
                  span={24}
                  md={8}
                  lg={4.8}
                  style={{ marginBottom: 16 }}
                >
                  <div>
                    <Image
                      src={`${BASE_URL}/` + item.image_url}
                      wrapperStyle={{ width: "100%" }}
                      className={styles.thumbnail}
                      style={{ maxHeight: 300, objectFit: "cover" }}
                    />

                    <div className={styles.textWrap}>
                      <Typography.Text strong>
                        {item.author_name}
                      </Typography.Text>
                      <Typography.Title level={4}>
                        {item.title}{" "}
                      </Typography.Title>

                      <Typography.Text type="secondary" strong>
                        {dayjs(item.publication_date).format(formatDateShow)}
                      </Typography.Text>
                    </div>
                  </div>
                </Col>
              ))
            ) : (
              <></>
            )}
          </Row>
        </div>
      </section>
    </>
  );
}
