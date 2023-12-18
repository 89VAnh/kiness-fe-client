import { Typography } from "antd";

import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import DivTransition from "@/modules/shared/transition/DivTransition";

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
                  <Typography.Text> {item.description}</Typography.Text>
                </div>
              </DivTransition>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
