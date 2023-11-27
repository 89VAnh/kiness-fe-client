import { LinkOutlined } from "@ant-design/icons";
import {
  Button,
  Divider,
  Input,
  Pagination,
  Space,
  Table,
  TableColumnsType,
  Typography,
} from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import { THESIS_URL } from "@/urls";

import { dataThesis } from "./data/data-fake";
import styles from "./scss/thesis.module.scss";

export default function Thesis(): JSX.Element {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(15);

  const columns: TableColumnsType<any> = [
    {
      title: "STT",
      width: 50,
      align: "center",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Tên bài báo",
      dataIndex: "title",
      render: (value, record) => (
        <Space>
          <Link to={THESIS_URL}>
            <Typography.Title level={5}>{value}</Typography.Title>
          </Link>
          <Typography.Link href={record.origin_link} target="_blank">
            <Button className="bg-mint">
              <LinkOutlined />
            </Button>
          </Typography.Link>
        </Space>
      ),
    },
    {
      title: "Tác giả",
      dataIndex: "author",
      width: "10%",
      render: (value) => value.join(", "),
    },
    {
      title: "Tổ chức phát hành",
      dataIndex: "organ",
      width: "24%",
      render: (value) => value.join(", "),
    },
    {
      title: "Năm phát hành",
      dataIndex: "year",
      align: "center",
      width: 100,
    },
  ];

  return (
    <>
      <Title />

      <Breadcrumb />

      <div className={styles.contentWrap}>
        <div className="inner">
          <div className={styles.headerContent}>
            <Typography.Text type="secondary">{`Tổng cộng ${dataThesis.length} mục, trang ${page}`}</Typography.Text>
            <Input.Search
              style={{ maxWidth: 300 }}
              placeholder="Nhập nội dung..."
            />
          </div>
          <Divider />

          <Table size="small" columns={columns} dataSource={dataThesis} />

          <Pagination
            current={page}
            pageSize={pageSize}
            total={dataThesis.length}
            hideOnSinglePage
            onChange={(page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            }}
          />
        </div>
      </div>
    </>
  );
}
