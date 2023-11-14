import { CaretRightOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space, Typography } from "antd";

import { CloudDown, CloudUp } from "@/assets/svg";

import styles from "./scss/banner.module.scss";

export default function Banner(): JSX.Element {
  return (
    <div className={styles.container}>
      <CloudDown className={styles.bannerBefore} />
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <Row className={styles.wrapperCaption}>
            <Col span={24} lg={8}></Col>
            <Col span={24} lg={16}>
              <Typography.Title level={3}>
                PHÁT TRIỂN HƯỚNG TỚI TƯƠNG LAI, TRUNG TÂM TĂNG TRƯỞNG KINESS SẼ
                TRỞ THÀNH MỘT KINESS GẦN GŨI VÀ THUẬN TIỆN HƠN KHI SỬ DỤNG.
              </Typography.Title>

              <Space align="center" direction="vertical">
                <Typography.Text>
                  Lối sống đúng đắn là cơ sở để cao lớn!!
                </Typography.Text>
                <Typography.Text>
                  Phương pháp Tăng trưởng Kines, giải quyết không chỉ mối quan
                  tâm về tầm vóc ngắn mà còn cả bệnh béo phì ở thanh thiếu niên,
                  tư thế đúng và căng thẳng bằng cách quản lý 1:1
                </Typography.Text>
                <Typography.Text>
                  Hãy nhớ những điều cơ bản rằng lối sống phù hợp sẽ khiến bạn
                  cao hơn.
                </Typography.Text>
              </Space>

              <div className={styles.buttonGroup}>
                <Button type="primary">
                  Đặt chỗ trải nghiệm <CaretRightOutlined />
                </Button>
                <Button type="primary">
                  Đặt chỗ trải nghiệm <CaretRightOutlined />
                </Button>
                <Button type="primary">
                  Đặt chỗ trải nghiệm <CaretRightOutlined />
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <CloudUp className={styles.bannerAfter} />
    </div>
  );
}
