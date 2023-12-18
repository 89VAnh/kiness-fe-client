import { Col, Divider, Image, Input, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import { ERROR_TIMEOUT } from "@/constant/config";
import { useSearchLicenses } from "@/loader/license-of-invention.loader";
import { ILicenseOfInvention } from "@/models/license-of-invention";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import styles from "./scss/patent.module.scss";

export default function Patent(): JSX.Element {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchContent, setSearchContent] = useState<string | null>(
    searchParams.get("k") || "",
  );

  const {
    data: patents,
    remove,
    refetch,
  } = useSearchLicenses({
    params: {
      page_index: 0,
      page_size: 0,
      search_content: searchContent,
    },
    config: {
      onSuccess: (data) => {
        if (data.message === ERROR_TIMEOUT) {
          refetch();
        }
      },
    },
  });

  useEffect(() => remove, [remove]);

  const handleSearch = (value: string) => {
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
            <div></div>
            <Input.Search
              style={{ maxWidth: 300 }}
              placeholder={t("patent.search_placeholder")}
              onSearch={handleSearch}
            />
          </div>
          <Divider />

          <Row gutter={16}>
            {patents ? (
              patents?.data?.data?.map((item: ILicenseOfInvention) => (
                <Col
                  key={item.license_id}
                  span={24}
                  md={12}
                  lg={8}
                  style={{ marginBottom: 16 }}
                >
                  <div>
                    <Image
                      src={"/api/" + item.image_url}
                      wrapperStyle={{ width: "100%" }}
                      className={styles.thumbnail}
                      style={{ maxHeight: 300, objectFit: "cover" }}
                    />

                    <div className={styles.textWrap}>
                      <Typography.Title level={4}>
                        {item.title}{" "}
                        <Typography.Text type="secondary">
                          số {item.license_no}
                        </Typography.Text>
                      </Typography.Title>

                      <div
                        className={styles.description}
                        dangerouslySetInnerHTML={{
                          __html: item.description || "",
                        }}
                      ></div>
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
