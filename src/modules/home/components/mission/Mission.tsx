import { Button, Col, Image, Row, Space, Typography } from "antd";
import { useState } from "react";

import giraffe from "@/assets/img/giraffe.png";
import missionThumb from "@/assets/img/mission.png";

import { dataMissions } from "./data/fake-data";
import styles from "./scss/mission.module.scss";

export default function Mission(): JSX.Element {
  const [currentButton, setCurrenButton] = useState<number>(0);

  const handleSetCurrentButton = (index: number) => {
    setCurrenButton(index);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Row>
          <Col span={24} xl={12} className={styles.leftContainer}>
            <div className={styles.groupButton}>
              {dataMissions.map((item, index) => (
                <Button
                  size="large"
                  type="text"
                  onClick={() => handleSetCurrentButton(index)}
                  className={currentButton === index ? styles.active : ""}
                >
                  {item.title}
                </Button>
              ))}
            </div>
            <div className={styles.content}>
              <Typography.Text>
                {dataMissions[currentButton].content}
              </Typography.Text>
            </div>
          </Col>
          <Col span={24} xl={12}>
            <Space align="end" className={styles.wrapperThumb}>
              <Image
                src={missionThumb}
                preview={false}
                className={styles.thumb}
              />
              <Image
                src={giraffe}
                preview={false}
                wrapperClassName={styles.ruler}
              />
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
}
