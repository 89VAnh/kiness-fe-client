import { Col, Image, Row, Table, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import { useTranslation } from "react-i18next";

import branch_img from "@/assets/img/branch/branch_img.png";
import { useBranches } from "@/loader/branch.loader";
import Sidebar from "@/modules/shared/sidebar/Sidebar";

import { renderAboutMenus } from "../utils/render";
import styles from "./scss/branch.module.scss";

// Table
interface IBranch {
  branch_name?: string;
  branch_id: string;
  city_name?: string;
  phone?: string;
  fax?: string;
  address?: string;
}

export default function Branch() {
  const { t } = useTranslation();
  // Get menus
  const items = renderAboutMenus(t);
  const branchesQuery = useBranches({
    params: {
      page: 1,
      pageSize: 10,
    },
  });

  const columns: ColumnsType<IBranch> = [
    {
      key: "city",
      title: "Khu vực",
      dataIndex: "city_name",
    },
    {
      key: "name",
      title: "Chi nhánh",
      dataIndex: "branch_name",
    },
    {
      key: "phone",
      title: "Số điện thoại",
      dataIndex: "phone",
    },
    {
      key: "detail",
      title: "Địa chỉ",
      dataIndex: "address",
    },
  ];

  const renderChildren = () => {
    return (
      <div className={styles.container}>
        <Row style={{ gap: 33 }}>
          <Col style={{ width: 311 }}>
            <Image
              src={branch_img}
              width={"100%"}
              height={297}
              preview={false}
            />
          </Col>
          <Col>
            <Typography.Title level={2}>
              Chi nhánh trung tâm tăng trưởng Kiness
            </Typography.Title>
            <Typography.Title level={3}>HOTLINE: 0932882383</Typography.Title>
          </Col>
        </Row>
        <Table
          columns={columns}
          loading={branchesQuery.isLoading}
          dataSource={branchesQuery.data?.data}
          className={styles.table}
          rowKey={(record) => record?.branch_id}
          pagination={false}
        />
      </div>
    );
  };

  return <Sidebar children={renderChildren()} items={items} />;
}
