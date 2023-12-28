import { Col, Row, Typography } from "antd";

import femaleDiagram from "@/assets/img/forcast/img_female.png";
import maleDiagram from "@/assets/img/forcast/img_male.png";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import { sessionService } from "@/utils/storage";

import GrowthDiagram from "./growth-diagram/GrowthDiagram";
import styles from "./scss/forcast-result.module.scss";

export default function ForcastResult(): JSX.Element {
  const result = JSON.parse(sessionService.getStorage("fore_cast_result"));

  return (
    <>
      <Title />

      <Breadcrumb showLast={false} />

      <section className={styles.contentWrap}>
        <div className="inner">
          <Typography.Title level={4} className={styles.resultTitle}>
            Kết quả dự đoán chiều cao theo chiều cao hiện tại của tôi
          </Typography.Title>
          <Typography.Paragraph className={styles.result}>
            Xin chào. Đây là Trung tâm Tăng trưởng Kiness.
            <br />
            Dựa trên những thông tin tăng trưởng hiện tại của bạn, Kiness dự
            đoán chiều cao của bạn khi trưởng thành (18 tuổi) là khoảng{" "}
            <span className={styles.resultHeight}>{result?.height} cm</span>.
          </Typography.Paragraph>
          <Typography.Paragraph>
            Nếu bạn thất vọng vì chiều cao dự kiến ​​khi trưởng thành của mình
            thấp hơn chiều cao bạn mong muốn, hãy làm bài kiểm tra chiều cao chi
            tiết càng sớm càng tốt và thử phương pháp Kinesiology.
            <br />
            Bài kiểm tra tăng trưởng chi tiết sẽ chẩn đoán nguyên nhân khiến
            chiều cao của bạn không phát triển tốt và Phương pháp tăng trưởng
            Kinesiology sẽ giúp bạn đạt được chiều cao như mong muốn bằng cách
            khôi phục các điều kiện môi trường tăng trưởng về bình thường.
          </Typography.Paragraph>
          <Typography.Paragraph>
            Vì vậy, bạn phải trải qua cuộc kiểm tra tăng trưởng kỹ lưỡng và thực
            hiện Phương pháp tăng trưởng Kinesi để nhanh chóng thay đổi các điều
            kiện môi trường tăng trưởng hiện tại thành điều kiện cho phép bạn
            phát triển chiều cao. Sau đó, khi trưởng thành, bạn có thể tăng
            chiều cao của mình thêm 10 cm so với chiều cao dự đoán. Vì vậy, bạn
            phải trải qua cuộc kiểm tra tăng trưởng kỹ lưỡng và thực hiện Phương
            pháp tăng trưởng Kinesi để nhanh chóng thay đổi các điều kiện môi
            trường tăng trưởng hiện tại thành điều kiện cho phép bạn phát triển
            chiều cao. Sau đó, khi trưởng thành, bạn có thể tăng chiều cao của
            mình thêm 10 cm so với chiều cao dự đoán.
          </Typography.Paragraph>
          <Typography.Paragraph>
            Phương pháp tăng trưởng Kiness bao gồm các bài tập tùy chỉnh, lượng
            dinh dưỡng cân bằng, kiểm soát căng thẳng và ngủ ngon. Vui lòng tham
            khảo trang web để biết thông tin chi tiết.
            <br />
            Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.
          </Typography.Paragraph>
        </div>

        <div className={"inner " + styles.infoArea}>
          <Typography.Title level={5} className={styles.stepTitle}>
            Kiểm tra loại tăng trưởng
          </Typography.Title>
          <Typography.Paragraph className="case_check">
            Khi quan sát quá trình phát triển chiều cao,ta có thể nhận ra có hai
            loại phương thức phát triển chiều cao:{" "}
            <b className="font-mint"> phương thức phát triển chiều cao dài </b>{" "}
            và{" "}
            <b className="font-mint">
              {" "}
              phương thức phát triển chiều cao ngắn.{" "}
            </b>{" "}
            . <br />
            Bạn có biết con bạn đang phát triển trong giai đoạn phát triển nào
            không? <br />
            Ngay cả khi cha mẹ bạn thấp hoặc{" "}
            <b>
              {" "}
              bạn hiện đang lớn lên với mô hình tăng trưởng chiều cao ngắn,{" "}
            </b>{" "}
            nếu bạn nỗ lực thay đổi thói quen trong môi trường tăng trưởng bằng{" "}
            <b>
              {" "}
              Phương pháp tăng trưởng Kinesi trước tuổi dậy thì , bạn có thể trở
              nên cao lớn khi trưởng thành.{" "}
            </b>
          </Typography.Paragraph>
          <br />
          <Typography.Paragraph>
            Bằng phương pháp tăng trưởng Kiness trong giai đoạn tăng trưởng,
            chiều cao của bạn{" "}
            <b className="font-mint">
              Nếu bạn quản lý toàn diện các yếu tố môi trường tăng trưởng (dinh
              dưỡng, tập luyện, ngủ, căng thẳng){" "}
            </b>
            Thông tin này đã được công bố qua các đài truyền hình công cộng như
            KBS, MBC, SBS và EBS sẽ tăng hơn 30% mỗi năm và bạn sẽ trở thành
            người trưởng thành. Có thể tăng chiều cao đã được tiết lộ trong các
            cuốn sách như
            <b className="font-mint"> "Bắt kịp chân dài"</b> và
            <b className="font-mint"> "Làm thế nào để cao thêm 10cm". </b>{" "}
            <br />
            Tại Kines, chúng tôi phân tích môi trường phát triển của từng cá
            nhân thông qua các bài kiểm tra tăng trưởng chi tiết và giúp bạn
            thay đổi mô hình tăng trưởng chiều cao thấp của mình thành mô hình
            tăng trưởng chiều cao bằng phương pháp tăng trưởng Kiness.
          </Typography.Paragraph>
          <Row gutter={32}>
            <Col lg={12} sm={24}>
              <GrowthDiagram
                title="Loại tăng trưởng (nam)"
                bgColor="#0BC9BD"
                img={maleDiagram}
              />
            </Col>
            <Col lg={12} sm={24}>
              <GrowthDiagram
                bgColor="#FF9494"
                title="Loại tăng trưởng (nữ)"
                img={femaleDiagram}
              />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
