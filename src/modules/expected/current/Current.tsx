import { Typography } from "antd";

import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import DivTransition from "@/modules/shared/transition/DivTransition";

import CurrentForm from "./components/CurrentForm";
import styles from "./scss/current.module.scss";

export default function Current(): JSX.Element {
  return (
    <>
      <Title />

      <Breadcrumb />

      <section className={styles.contentWrap}>
        <div className="inner">
          <div className={styles.headerWrap}>
            <DivTransition className={styles.headerTitle}>
              <Typography.Title level={2}>
                Chiều cao dự đoán của tôi dựa trên chiều cao hiện tại của tôi
              </Typography.Title>

              <Typography.Paragraph className={styles.headerParagraph}>
                Trong khi chiều cao trung bình của thanh thiếu niên Hàn Quốc đã
                tăng hơn 10 cm so với thế hệ cha mẹ thì các bậc cha mẹ thấp bé
                lại lo lắng con mình sẽ giống vóc dáng thấp bé của chính mình,
                đồng thời trẻ cũng rất quan tâm đến việc tăng trưởng chiều cao
                ngay từ khi còn nhỏ. . Chúng tôi đã tạo góc My Prediction Key để
                các bạn có thể dễ dàng tìm ra key dự đoán mà nhiều người tò mò.
              </Typography.Paragraph>
            </DivTransition>
            <CurrentForm styles={styles} />
          </div>
        </div>
      </section>

      {/* <Modal
        open={!!heightResult?.height}
        title={"Kết quả"}
        onCancel={() => setHeightResult(null)}
        onOk={() => setHeightResult(null)}
        cancelButtonProps={{
          hidden: true,
          style: { display: "none" },
        }}
      >
        <Typography.Title level={5}>
          Dự đoán chiều cao khi đến tuổi trưởng thành (18 tuổi) dựa vào chiều
          cao hiện tại của bạn
        </Typography.Title>
        <div>
          Chiều cao trưởng thành:{" "}
          <Typography.Text strong type="danger">
            {heightResult?.height}
          </Typography.Text>
          cm
        </div>
        <div>
          Tỉ lệ tăng trưởng hiện tại:{" "}
          <Typography.Text strong>
            {heightResult?.growth} (Nhóm {heightResult?.label})
          </Typography.Text>
        </div>
      </Modal> */}
    </>
  );
}
