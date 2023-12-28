import { Card, Image, Typography } from "antd";

import styles from "./scss/growth-diagram.module.scss";

export default function GrowthDiagram({
  title,
  img,
  bgColor,
}: {
  title: string;
  img: string;
  bgColor: string;
}) {
  const { Title, Paragraph, Text } = Typography;

  return (
    <Card className={styles.card}>
      <Title
        level={5}
        className={styles.title}
        style={{ backgroundColor: bgColor }}
      >
        {title}
      </Title>
      <Title level={5} className={styles.subTitle}>
        Kiểm tra mô hình tăng trưởng của bạn
      </Title>
      <Paragraph>
        Hãy đi theo đường cong của điểm giao nhau giữa chiều cao và tuổi hiện
        tại của bạn. Đường này là đường cong loại tăng trưởng của bạn. Vì vậy,
        nếu muốn phát triển chiều cao khi trưởng thành, bạn phải thử phương pháp
        Kinesiology để chuyển sang loại tăng trưởng chiều cao nêu trên.
        <br /> (Hiện nay, ngay cả với loại tăng trưởng cao, có thể có trường hợp
        ngoại lệ trong trường hợp béo phì và loại tăng trưởng sớm)
      </Paragraph>
      <Paragraph>
        <ul>
          <li>
            Loại tăng trưởng chiều cao dài:{" "}
            <Text style={{ color: "#7F0080" }}>A</Text> ,{" "}
            <Text style={{ color: "#0BC9BD" }}>B</Text> ,{" "}
            <Text style={{ color: "#FE8401" }}>C</Text>
          </li>
          <li>
            Chiều cao trung bình: <Text style={{ color: "#007F80" }}>D</Text>
          </li>
          <li>
            Loại tăng trưởng chiều cao ngắn:{" "}
            <Text style={{ color: "#800000" }}>E</Text> ,{" "}
            <Text style={{ color: "#010080" }}>F</Text> , G
          </li>
        </ul>
      </Paragraph>
      <Image src={img} preview={false} alt={img} />
    </Card>
  );
}
