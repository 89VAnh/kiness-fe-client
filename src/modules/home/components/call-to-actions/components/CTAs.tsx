import { Col, Image, Row } from "antd";
import { useState } from "react";

import { dataCTAs } from "../data/fake-data";
import styles from "../scss/ctas.module.scss";
import CardCTA from "./CardCTA";

export default function CTAs(): JSX.Element {
  const [cardIndex, setCardIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setCardIndex(index);
  };

  return (
    <Row className={`${styles.container} container-img`}>
      <Image
        wrapperClassName={styles.image}
        src={dataCTAs[cardIndex].thumb}
        preview={false}
      />
      {dataCTAs.map((item, index) => (
        <Col span={12} className={styles.listItem}>
          <CardCTA
            onClick={handleClick}
            index={index}
            title={item.title}
            content={item.content}
            url={item.url}
            isRight={index % 2 === 1}
          />
        </Col>
      ))}
    </Row>
  );
}
