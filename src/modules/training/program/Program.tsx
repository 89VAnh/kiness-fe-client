import { Tabs, Typography } from "antd";
import { useTranslation } from "react-i18next";

import Sidebar from "@/modules/shared/sidebar/Sidebar";

import { renderAboutMenus } from "../utils/render";
import { dataTabs } from "./data/fake-data";
import styles from "./scss/program.module.scss";

export default function Program() {
  const { t } = useTranslation();

  const items = renderAboutMenus(t);

  const renderChildren = () => {
    return (
      <div className={styles.container}>
        <Typography.Title level={2} className={styles.title}>
          Chương trình Kines là chương trình tăng trưởng chiều cao khoa học và
          có hệ thống.
        </Typography.Title>
        <div className={styles.titleDivider}></div>
        <Typography.Title
          level={4}
          className={styles.titleSub}
        ></Typography.Title>
        <div style={{ textAlign: "justify" }}>
          <Typography.Paragraph>
            Nó bao gồm{" "}
            <Typography.Text strong>
              7 chương trình: bài tập tùy chỉnh, điều chỉnh tư thế, phục hồi
              chức năng cơ, bài tập Longman, phản hồi thần kinh , Dovision và
              cải thiện lối sống.
            </Typography.Text>
          </Typography.Paragraph>
          <Typography.Paragraph>
            Chúng tôi sẽ tìm ra nguyên nhân khiến con bạn thấp bé, đưa ra các đề
            xuất cải thiện cho từng cá nhân và cung cấp hướng dẫn và quản lý 1:1
            từ chuyên gia tại chi nhánh gần đó.
          </Typography.Paragraph>
          <Tabs
            defaultActiveKey={"1"}
            size="small"
            type="card"
            items={dataTabs.map((item, i) => {
              const id = String(i + 1);
              return {
                label: item.label,
                key: id,
                children: item.content,
              };
            })}
          />
        </div>
      </div>
    );
  };

  return <Sidebar children={renderChildren()} items={items} />;
}
