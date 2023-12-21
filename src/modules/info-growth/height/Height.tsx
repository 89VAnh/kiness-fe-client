import { Button, Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";

import doctorImg from "@/assets/img/info-growth/img_growth_doctor.png";
import hormoneImg from "@/assets/img/info-growth/img_hormone.png";
import imgInfo5 from "@/assets/img/info-growth/img_info05.png";
import lineImg from "@/assets/img/info-growth/img_rate_graph.png";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import DivTransition from "@/modules/shared/transition/DivTransition";
import { ADVICE_OVERHAUL_URL } from "@/urls";

import { dataHeight, listWeather } from "./data/data-fake";
import styles from "./scss/height.module.scss";

export default function Height(): JSX.Element {
  return (
    <>
      <Title />

      <Breadcrumb />

      <div className={styles.contentWrap}>
        <section className="inner">
          <div className={styles.headerWrap}>
            <DivTransition position="x" className={styles.img}>
              <img src={doctorImg} alt="doctor" />
            </DivTransition>
            <DivTransition position="x" className={styles.headerTitle}>
              <Typography.Title level={2}>
                Chiều cao cũng là một kỹ năng.
                <br />
                <b className="font-mint">
                  “Bạn có thể phát triển nhiều như bạn biết.”
                </b>
              </Typography.Title>

              <Typography.Paragraph className={styles.headerParagraph}>
                Người ta nói rằng điểm số của trẻ bị ảnh hưởng trực tiếp bởi kỹ
                năng thông tin của mẹ phải không? Vậy bạn có biết rằng tăng
                chiều cao đồng nghĩa với việc có được môi trường thuận lợi để
                học tập tốt không ? Bây giờ bạn có thể tăng chiều cao của mình
                nhiều như bạn biết.
              </Typography.Paragraph>

              <Typography.Paragraph className={styles.headerParagraph}>
                Kines quản lý sự tăng trưởng bằng cách chia giai đoạn tăng
                trưởng và nếu tốc độ tăng trưởng thấp, nó có thể phát triển lên
                loại cao hơn bằng cách nhận sự quản lý của Kines. Nếu bạn được
                quản lý thể chất trước tuổi dậy thì, chiều cao dự đoán của bạn
                sẽ tăng thêm 10 cm.
              </Typography.Paragraph>
            </DivTransition>
          </div>

          <DivTransition position="x" className={styles.yellowBox}>
            <Button type="primary" className={styles.boxButton}>
              Biểu đồ tốc độ tăng trưởng của con người
            </Button>

            <img src={lineImg} alt="line chart" />
          </DivTransition>
        </section>
        <section className={styles.listStep}>
          <div className="inner">
            {dataHeight.map((item, index) => (
              <DivTransition
                key={item.id}
                className={styles.step}
                position="x"
                point={index % 2 ? -50 : 50}
              >
                <div className={styles.stepBadge}>{item.id}</div>
                <div>
                  <Typography.Title level={5}>{item.title}</Typography.Title>
                  {item.description.map((item, index) => (
                    <Typography.Paragraph key={index} className={styles.txt}>
                      {item}
                    </Typography.Paragraph>
                  ))}
                </div>
              </DivTransition>
            ))}
          </div>
        </section>
        <section className={styles.sectionWrap + " inner"}>
          <DivTransition className={styles.titleWrap}>
            <Typography.Title level={4}>
              Quản lý tùy chỉnh xác định chiều cao trọn đời của bạn.
            </Typography.Title>
            <Typography.Paragraph className={styles.subTitle}>
              Mô hình tiết hormone tăng trưởng tăng mạnh khi bạn tập thể dục tùy
              chỉnh hoặc ngủ ngon. <br />
              Thay đổi điều kiện tăng trưởng chiều cao có lợi cho bạn bằng các
              bài tập tiết ra hormone tăng trưởng hiệu quả.
            </Typography.Paragraph>
          </DivTransition>
          <DivTransition className={styles.yellowBox}>
            <Button
              type="primary"
              className={`${styles.boxButton} ${styles.purple}`}
            >
              Mô hình bài tiết hormone tăng trưởng 24 giờ
            </Button>

            <img src={hormoneImg} alt="hormone chart" />
          </DivTransition>
        </section>
        <section className={`${styles.infoArea}`}>
          <div className="inner">
            <DivTransition className={styles.titleWrap}>
              <Typography.Title level={4}>Tấm tăng trưởng</Typography.Title>
              <Typography.Paragraph className={styles.subTitle}>
                Tấm tăng trưởng là “nơi xương phát triển và tăng chiều cao.”
                <br /> Tấm tăng trưởng, có mặt ở hầu hết các xương tạo nên cơ
                thể con người, tức là các khớp khớp, không đóng mở mà trải qua
                một quá trình. đóng dần (tăng trưởng = lão hóa), và vùng sụn
                tăng trưởng ngừng phát triển khi nó hoàn toàn cốt hóa.
              </Typography.Paragraph>
              <Typography.Title level={5} className={styles.stepTitle}>
                Có thể dễ dàng hiểu được mối quan hệ giữa đĩa tăng trưởng và
                chiều cao
              </Typography.Title>
              <Typography.Paragraph
                style={{ textAlign: "start", fontSize: 16 }}
              >
                Bằng cách so sánh mức độ mở rộng của đĩa tăng trưởng trong mùa
                sinh trưởng của cây.
              </Typography.Paragraph>
            </DivTransition>
            <Row gutter={16} className={styles.infoList}>
              {listWeather.map((weather) => (
                <Col
                  span={24}
                  lg={12}
                  key={weather.id}
                  style={{ marginBottom: 16 }}
                >
                  <DivTransition className={styles.listItem}>
                    <div className={styles.img}>
                      <img src={weather.img} alt={weather.label} />
                      <Typography.Paragraph className={styles.label}>
                        {weather.label}
                      </Typography.Paragraph>
                    </div>
                    <div className={styles.txt}>
                      <Typography.Title level={5}>
                        {weather.title}
                      </Typography.Title>
                      <Typography.Paragraph className={styles.txtContent}>
                        {weather.description}
                      </Typography.Paragraph>
                    </div>
                  </DivTransition>
                </Col>
              ))}
            </Row>
          </div>
        </section>
        <section className={styles.contentWrap}>
          <div className="inner">
            <DivTransition className={styles.titleWrap}>
              <Typography.Title level={4}>
                Tầm vóc thấp không phải do tấm tăng trưởng!
              </Typography.Title>
              <Typography.Paragraph
                className={styles.subTitle}
                style={{ margin: 0, paddingBottom: 70 }}
              >
                Nhìn chung, mọi người quan niệm nếu có IQ cao thì sẽ học giỏi ở
                trường nhưng không phải ai có IQ cao cũng học giỏi. Tương tự như
                vậy, không phải tất cả trẻ em đều cao lên chỉ vì đĩa tăng trưởng
                của chúng được mở. <br />
                Điều này là do chiều cao bị ảnh hưởng bởi điều kiện môi trường
                phát triển (70% đến 80%) và di truyền (20% đến 30%). Vì gen di
                truyền của một đứa trẻ sinh ra là không thể thay đổi nên muốn
                phát triển chiều cao thì môi trường phát triển của các yếu tố
                thu được phải được cải thiện để giúp trẻ phát triển chiều cao.
              </Typography.Paragraph>
            </DivTransition>
            <DivTransition className={styles.reasonWrap}>
              <Typography.Title level={4}>
                Đây là lý do tại sao Kiness nhấn mạnh đến điều kiện môi trường
                ngày càng phát triển và là chìa khóa cho sự tăng trưởng chiều
                cao.
              </Typography.Title>
              <div className={styles.reason}>
                <Typography.Paragraph className={styles.txt}>
                  ‘Tấm tăng trưởng đang mở’ có nghĩa là đã đến lúc phải phát
                  triển chiều cao. Tất cả những người bình thường khi sinh ra
                  đều có các đĩa tăng trưởng đóng mở và đóng lại khi trưởng
                  thành.
                  <br />
                  Mặc dù họ đều trải qua quá trình tương tự nhưng tại sao một số
                  người lại trở nên cao còn những người khác lại trở nên thấp?
                  <br />
                  <br />
                  Để tìm hiểu, Kines tiến hành một bài kiểm tra tăng trưởng chi
                  tiết để kiểm tra chức năng cơ thể và môi trường phát triển
                  thay vì chỉ đơn giản là kiểm tra đĩa tăng trưởng.
                  <br />
                  Do đó, chúng tôi khôi phục các chức năng thể chất bị suy yếu
                  thông qua các bài tập tùy chỉnh phù hợp với tình trạng thể
                  chất của từng cá nhân, điều chỉnh tư thế, phục hồi chức năng
                  cơ và giảm béo phì, đồng thời phân tích bốn yếu tố môi trường
                  là tập thể dục, dinh dưỡng, giấc ngủ và căng thẳng để tìm ra
                  cách phát triển tối ưu cao hơn Tạo điều kiện môi trường.
                  <br />
                  <br />
                  Nhiều người đang mơ hồ chờ đợi bệnh viện cho biết họ đã cao
                  bao nhiêu khi làm xét nghiệm tăng trưởng đĩa đệm lần cuối,
                  nhưng sau đó họ phát hiện ra rằng chiều cao của họ không tăng
                  nhiều như họ mong đợi vào khoảng năm thứ ba cấp hai, và họ bỏ
                  lỡ thời gian để bắt kịp và trở nên chán nản. Một khi thời gian
                  đã trôi qua thì không thể lấy lại được.
                  <br />
                  <br />
                  Bởi vì chiều cao là kết quả của thói quen sinh hoạt nên sự
                  tăng trưởng không tự động diễn ra chỉ vì đĩa tăng trưởng được
                  mở ra. Bằng cách cải thiện thói quen lối sống của bạn dựa trên
                  phân tích khoa học và điều này để tăng hiệu quả của hormone
                  tăng trưởng để bạn tăng thêm 2cm mỗi năm đến chiều cao mà bạn
                  phát triển tự nhiên, bạn có thể thoát khỏi vấn đề thấp bé.
                </Typography.Paragraph>
                <div className={styles.img}>
                  <img src={imgInfo5} alt="info 05" />
                </div>
              </div>
            </DivTransition>
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
      </div>
    </>
  );
}
