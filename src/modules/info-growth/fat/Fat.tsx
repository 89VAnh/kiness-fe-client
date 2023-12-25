import { Typography } from "antd";
import { Link } from "react-router-dom";

import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import DivTransition from "@/modules/shared/transition/DivTransition";
import { ADVICE_OVERHAUL_URL } from "@/urls";

import { dataFat } from "./data/data-fake";
import styles from "./scss/fat.module.scss";

export default function Fat(): JSX.Element {
  return (
    <>
      <Title />

      <Breadcrumb />

      <section className={styles.contentWrap}>
        <div className="inner">
          <div className={styles.list}>
            {dataFat.map((item) => (
              <DivTransition key={item.id} className={styles.listItem}>
                <div className={styles.img}>
                  <img src={item.img} alt="img" />
                </div>

                <div>
                  <Typography.Title level={4}>{item.title}</Typography.Title>
                  {item?.description?.map((desc: string) => (
                    <Typography.Text style={{ display: "block" }}>
                      {desc}
                    </Typography.Text>
                  ))}
                </div>
              </DivTransition>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="inner">
          <DivTransition className={styles.banner}>
            <Typography.Title level={3}>
              “Thời điểm vàng để con tăng trưởng chiều cao”
            </Typography.Title>
            <Typography.Text>
              Tìm hiểu nguyên nhân khiến bạn có tầm vóc thấp bé bằng bài kiểm
              tra tăng trưởng Kinesiology kỹ lưỡng.
            </Typography.Text>
            <Link to={ADVICE_OVERHAUL_URL} className="btn-link btn-mint">
              Đặt chỗ để kiểm tra tăng trưởng chi tiết
            </Link>
          </DivTransition>
        </div>
      </section>
    </>
  );
}
