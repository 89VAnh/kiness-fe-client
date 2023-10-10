import { Button, Space } from "antd";
import { Link } from "react-router-dom";

import { GROWTH_FORECAST_URL, GROWTH_URL, STAGES_GROWTH_URL } from "@/urls";

import styles from "../scss/ctas.module.scss";

export default function NavClear(): JSX.Element {
  return (
    <div className={styles.container}>
      <Space className={styles.listNav}>
        <Link to={STAGES_GROWTH_URL} className={styles.navItem}>
          <Button>BÁCH KHOA TOÀN THƯ VỀ TĂNG TRƯỞNG CHIỀU CAO</Button>
        </Link>
        <Link to={GROWTH_FORECAST_URL} className={styles.navItem}>
          <Button>KIỂM TRA ĐỘ CHÍNH XÁC TĂNG TRƯỞNG</Button>
        </Link>
        <Link to={GROWTH_URL} className={styles.navItem}>
          <Button type="default">CHƯƠNG TRÌNH KINESS</Button>
        </Link>
      </Space>
    </div>
  );
}
