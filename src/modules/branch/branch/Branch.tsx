import { Col, Image, Row, Table, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import { useTranslation } from "react-i18next";

import branch_img from "@/assets/img/branch/branch_img.png";
import Sidebar from "@/modules/shared/sidebar/Sidebar";

import { renderAboutMenus } from "../../branch/utils/render";
import styles from "./scss/branch.module.scss";

export default function Branch() {
  const { t } = useTranslation();
  // Get menus
  const items = renderAboutMenus(t);

  // Table
  interface Branch {
    key: number;
    name?: string;
    city?: string;
    phone?: string;
    detail?: string;
  }

  const columns: ColumnsType<Branch> = [
    {
      key: "city",
      title: "Khu vực",
      dataIndex: "city",
    },
    {
      key: "name",
      title: "Chi nhánh",
      dataIndex: "name",
    },
    {
      key: "phone",
      title: "Số điện thoại",
      dataIndex: "phone",
    },
    {
      key: "detail",
      title: "Chi tiết",
      dataIndex: "detail",
    },
  ];

  const data: Branch[] = [
    {
      key: 0,
      name: "Chi nhánh",
      city: "Hà Nội",
    },
    {
      key: 1,
      city: "Hồ Chí Minh",
    },
    {
      key: 2,
      city: "",
    },
  ];

  const renderChildren = () => {
    return (
      <div className={styles.container}>
        <Row style={{ gap: 33 }}>
          <Col style={{ width: 311 }}>
            <Image src={branch_img} width={"100%"} height={297} />
          </Col>
          <Col>
            <Typography.Title level={2}>
              Chi nhánh trung tâm tăng trưởng Kiness
            </Typography.Title>
            <Typography.Title level={3}>HOTLINE</Typography.Title>
          </Col>
        </Row>
        <Table<Branch>
          columns={columns}
          dataSource={data}
          className={styles.table}
          pagination={false}
        />
      </div>
    );
  };

  return <Sidebar children={renderChildren()} items={items} />;
}
