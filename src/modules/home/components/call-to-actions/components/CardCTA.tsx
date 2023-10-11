import { ArrowRightOutlined } from "@ant-design/icons";
import { Card, Typography } from "antd";
import { useRef } from "react";
import { Link } from "react-router-dom";

import { colors } from "../data/fake-data";

interface Props {
  title: string;
  index: number;
  content: string;
  url: string;
  onClick: (index: number) => void;
  isRight?: boolean;
}

export default function CardCTA(props: Props): JSX.Element {
  const cardRef = useRef(null);

  const handleMouseEnter = (index: number) => {
    const imgElement: any = document.querySelector(".container-img img");
    if (imgElement) imgElement.style.borderColor = colors[index];
  };

  const handleSetActiveCard = (index: number) => {
    const allCardElements = document.querySelectorAll(".ant-card");
    allCardElements.forEach((card) => card.classList.remove("active"));
    allCardElements[index].classList.add("active");
  };

  return (
    <Card
      ref={cardRef}
      onClick={() => {
        handleSetActiveCard(props.index);
        props.onClick(props.index);
      }}
      onMouseEnter={() => handleMouseEnter(props.index)}
      className={`${!props.index && "active"} card${props.index + 1} ${
        props.isRight ? "card-right" : ""
      }`}
    >
      <Typography.Title level={3}>{props.title}</Typography.Title>
      <Typography.Text>{props.content}</Typography.Text>
      <Link to={props.url}>
        Xem thêm <ArrowRightOutlined />
      </Link>
    </Card>
  );
}
