import { Typography } from "antd";
import { useTranslation } from "react-i18next";

import Sidebar from "@/modules/shared/sidebar/Sidebar";

import { renderAboutMenus } from "../utils/render";
import { dataGrowth } from "./data/fake-data";
import styles from "./scss/growth.module.scss";

export default function Growth() {
  const { t } = useTranslation();

  const items = renderAboutMenus(t);

  const renderChildren = () => {
    return (
      <div className={styles.container}>
        <Typography.Title level={2} className={styles.title}>
          Làm thế nào để cao thêm 10 cm
        </Typography.Title>
        <div className={styles.titleDivider}></div>
        <Typography.Title level={4} className={styles.titleSub}>
          Phương pháp tăng trưởng chiều cao được quyết định dựa trên tầm vóc
          thấp.
        </Typography.Title>
        <div style={{ maxWidth: "700px", textAlign: "justify" }}>
          <Typography.Paragraph>
            Trẻ em có vóc dáng thấp bé có thể được chia đại khái thành hai loại:
            những trẻ cần điều trị bằng thuốc hoặc tiêm, tức là bệnh nhân, và
            những trẻ không cần điều trị, cụ thể là người bình thường.
          </Typography.Paragraph>
          <Typography.Paragraph>
            Nếu nó nhỏ về mặt bệnh lý thì tất nhiên phải được điều trị, nhưng
            trong hầu hết các trường hợp, nó nhỏ do thói quen sinh hoạt sai lầm
            hoặc chức năng thể chất bị suy yếu.
          </Typography.Paragraph>
          <Typography.Paragraph>
            Vì vậy, cần phân tích kỹ lưỡng nguyên nhân tầm vóc thấp bé của từng
            trẻ và áp dụng các phương pháp tăng trưởng phù hợp, Test tăng trưởng
            Kines là một bài kiểm tra nhằm tìm ra “tại sao trẻ không phát triển
            tốt” và “vậy cần phải nỗ lực như thế nào”. Bạn có thể nghĩ về nó như
            thế này.
          </Typography.Paragraph>
          <Typography.Paragraph>
            Bây giờ, chúng ta nên làm gì sau khi tìm ra nguyên nhân và cách khắc
            phục qua xét nghiệm?
          </Typography.Paragraph>
          <Typography.Paragraph>
            Bạn có thể thực hành phương pháp tăng trưởng Kines ngay.
          </Typography.Paragraph>
        </div>
        <div className={styles.steps}>
          <Typography.Title level={3} className={styles.btnTitle}>
            Phương pháp tăng trưởng Kines có thể
          </Typography.Title>
          {dataGrowth.map((item, index) => (
            <div key={index}>
              <Typography.Text className={styles.listItemTitle}>
                {++index}. {item.title}
              </Typography.Text>
              <Typography.Paragraph>{item.content}</Typography.Paragraph>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return <Sidebar children={renderChildren()} items={items} />;
}
