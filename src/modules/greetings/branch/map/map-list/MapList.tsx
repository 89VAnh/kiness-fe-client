import {
  ClockCircleFilled,
  EnvironmentFilled,
  PhoneFilled,
  SyncOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Input,
  Pagination,
  Row,
  Select,
  Skeleton,
  Space,
  Tag,
  Typography,
} from "antd";
import { DefaultOptionType } from "antd/es/select";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";

import locationIco from "@/assets/img/others/markerStar1.png";
import { ERROR_TIMEOUT } from "@/constant/config";
import { useSearchBranches } from "@/loader/branch.loader";
import { useCityDropdown } from "@/loader/city.loader";
import { IBranch } from "@/models/branch";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import { MAP_DETAIL_URL } from "@/urls";
import { getUrlToDetail } from "@/utils/format-string";

import styles from "./scss/map-list.module.scss";

export default function MapList(): JSX.Element {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchContent = searchParams.get("k") || "";
  const [cityOptions, setCityOptions] = useState<DefaultOptionType[]>([
    { label: "Tất cả", value: "" },
  ]);
  const [citySelected, setCitySelected] = useState("");

  const { isLoading: isLoadingDropdown, refetch: refetchCity } =
    useCityDropdown({
      config: {
        onSuccess: (data) => {
          if (data.message === ERROR_TIMEOUT) {
            refetchCity();
          }
          if (data?.length > 0) {
            setCityOptions((prev) =>
              prev.length === 1 ? [...prev, ...data] : [...prev],
            );
          }
        },
      },
    });

  const {
    data: branches,
    isLoading,
    refetch: refetchBranches,
  } = useSearchBranches({
    params: {
      page_index: page,
      page_size: pageSize,
      search_content: searchContent,
      city_id: citySelected || null,
    },
    config: {
      onSuccess: (data) => {
        if (data.message === ERROR_TIMEOUT) {
          refetchBranches();
        }
      },
    },
  });

  const handleSearch = (keyword: string) => {
    searchParams.set("k", keyword);
    setSearchParams(searchParams);
  };

  const refreshBranches = () => {
    refetchBranches();
  };

  return (
    <>
      <Title />

      <Breadcrumb />

      <section className={styles.contentWrap}>
        <div className="inner">
          <div className={styles.filterBar}>
            <Space style={{ width: "100%", justifyContent: "space-between" }}>
              <Select
                className={styles.filterSelect}
                defaultValue={""}
                loading={isLoadingDropdown}
                onChange={(value) => setCitySelected(value)}
                options={cityOptions}
              />

              <Space>
                <Button title={t("all.refresh")} onClick={refreshBranches}>
                  <SyncOutlined />
                </Button>
                <Input.Search
                  loading={isLoading}
                  defaultValue={searchContent}
                  onSearch={handleSearch}
                  placeholder="Nhập thông tin..."
                />
              </Space>
            </Space>
          </div>
          <div>
            <Row gutter={24}>
              {isLoading
                ? [...Array(4)].map((_, index) => (
                    <Col span={24} lg={12} key={index}>
                      <Skeleton.Input
                        rootClassName="w-full"
                        style={{ width: "100%", height: 100, marginBottom: 16 }}
                        active
                      ></Skeleton.Input>
                    </Col>
                  ))
                : branches?.data?.map((item: IBranch, index: number) => (
                    <Col span={24} lg={12} key={index}>
                      <motion.div
                        initial={{ y: -20, opacity: 0.5 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <Card className={styles.cardItem}>
                          <Space align="start">
                            <div>
                              <img src={locationIco} alt="location-ico" />
                            </div>
                            <div className={styles.cardText}>
                              <div>
                                <Link
                                  to={getUrlToDetail(
                                    MAP_DETAIL_URL,
                                    item.branch_id,
                                  )}
                                >
                                  <Space>
                                    <Tag style={{ borderRadius: "50px" }}>
                                      {item.city_name}
                                    </Tag>
                                    <Typography.Title
                                      level={5}
                                      style={{ margin: 0 }}
                                    >
                                      {item.branch_name}
                                    </Typography.Title>
                                  </Space>
                                </Link>
                              </div>
                              <div>
                                <Space className={styles.branchInfo}>
                                  <EnvironmentFilled />
                                  <Typography.Text>
                                    {item.address}
                                  </Typography.Text>
                                </Space>
                              </div>
                              <div>
                                <Space className={styles.branchInfo}>
                                  <ClockCircleFilled />
                                  <Typography.Text>
                                    {item.open_time}
                                  </Typography.Text>
                                </Space>
                              </div>
                              <div>
                                <Space>
                                  <PhoneFilled />
                                  <Typography.Link
                                    style={{ color: "#000" }}
                                    href={`tel:${item.phone}`}
                                  >
                                    {item.phone}
                                  </Typography.Link>
                                </Space>
                              </div>
                            </div>
                          </Space>
                        </Card>
                      </motion.div>
                    </Col>
                  ))}
            </Row>
          </div>
          <div className="pagination-wrap">
            <Pagination
              total={branches?.total_items || 0}
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
