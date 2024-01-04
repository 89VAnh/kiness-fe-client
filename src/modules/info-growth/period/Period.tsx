import { Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";

import carbideDoctorImg from "@/assets/img/info-growth/img_carbide_doctor.png";
import maturityImg1 from "@/assets/img/info-growth/img_maturity.png";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import DivTransition from "@/modules/shared/transition/DivTransition";
import { ADVICE_OVERHAUL_URL } from "@/urls";

import { listPeriod } from "./data/data-fake";
import styles from "./scss/period.module.scss";

export default function Period(): JSX.Element {
  return (
    <>
      <Title />

      <Breadcrumb />

      <section className={styles.contentWrap}>
        <div className={styles.maturityArea}>
          <div className="inner">
            <div className={styles.maturityInTop}>
              <DivTransition className={styles.img} position="x">
                <img src={maturityImg1} alt="maturity" />
              </DivTransition>

              <DivTransition className={styles.info} position="x" point={50}>
                <div className={styles.box}>
                  <Typography.Title level={4}>
                    Ngay cả khi con gái nhỏ có ngực thì đó cũng không phải là
                    dậy thì sớm sau 9 tuổi.
                  </Typography.Title>
                  <Typography.Paragraph>
                    Nếu trẻ lớn nhanh, ngực hoặc tinh hoàn to trước khi học hết
                    lớp dưới tiểu học thì có nhiều trường hợp trẻ bị cho là dậy
                    thì sớm và được tiêm thuốc ức chế gonadotropin vô điều kiện.
                    Tuy nhiên, tùy theo độ tuổi mà những thay đổi này xảy ra mà
                    thường là dậy thì sớm (dậy thì sớm), có triệu chứng giống
                    như dậy thì sớm nhưng không cần điều trị.
                  </Typography.Paragraph>
                </div>
                <div className={styles.box}>
                  <Typography.Title level={4}>
                    Phân loại theo độ tuổi xuất hiện các đặc điểm sinh dục thứ
                    cấp
                  </Typography.Title>
                  <Typography.Paragraph>
                    Trong hầu hết các trường hợp, ngực của bé gái bắt đầu xuất
                    hiện vào khoảng 10 hoặc 11 tuổi và tinh hoàn của bé trai bắt
                    đầu to ra vào khoảng 12 hoặc 13 tuổi.
                  </Typography.Paragraph>
                  <Typography.Paragraph>
                    Những thay đổi này diễn ra nhanh chóng nên nếu kinh nguyệt
                    xảy ra trước 8 tuổi ở bé gái và tinh hoàn to trước 9 tuổi ở
                    bé trai thì đó là dậy thì sớm, nếu xảy ra ở độ tuổi từ 9 đến
                    10 ở bé gái và 10 đến 11 tuổi ở bé trai. , đó là tuổi dậy
                    thì sớm.
                  </Typography.Paragraph>
                </div>
              </DivTransition>
            </div>

            <DivTransition className={styles.box}>
              <Typography.Title level={4}>
                Tác dụng phụ của việc tiêm thuốc ức chế hormone sinh dục ở tuổi
                dậy thì sớm
              </Typography.Title>
              <Typography.Paragraph>
                Các bé gái có kinh nguyệt lần đầu tiên khoảng hai năm sau khi
                xuất hiện khối u ở vú. Ngày nay, độ tuổi có kinh trung bình là
                11,5 tuổi (giữa lớp 5) nên việc thay đổi thể chất vào năm thứ 3
                tiểu học là điều hoàn toàn bình thường.
              </Typography.Paragraph>
              <Typography.Paragraph>
                Đây là giai đoạn tăng trưởng nhanh mà trẻ có thể phát triển tối
                đa, vì vậy tối đa hóa sự tăng trưởng thay vì trì hoãn việc có
                kinh bằng cách tiêm luphrin là con đường tắt để đạt được chiều
                cao cao.
              </Typography.Paragraph>
            </DivTransition>
            <DivTransition className={styles.box}>
              <Typography.Title level={4}>
                Dậy thì sớm thường xảy ra ở trẻ béo phì.
              </Typography.Title>
              <Typography.Paragraph>
                Dậy thì sớm và dậy thì sớm thường xảy ra ở trẻ béo phì. Điều này
                là do việc tiết hormone giới tính được thúc đẩy khi lượng mỡ
                trong cơ thể tăng lên. Kết quả nghiên cứu trên khắp thế giới đã
                chỉ ra rằng các bé gái ở độ tuổi dậy thì sớm có tỷ lệ mỡ trong
                cơ thể cao hơn những đứa trẻ khác. Ngăn ngừa béo phì bằng cách
                tập luyện tùy chỉnh và cải thiện thói quen ăn uống từ khi còn
                trẻ là con đường tắt để trì hoãn dậy thì sớm.
              </Typography.Paragraph>
            </DivTransition>
          </div>
        </div>
      </section>

      <section className={`${styles.infoArea}`}>
        <div className="inner">
          <DivTransition className={styles.titleContainer}>
            <div className={styles.titleWrap}>
              <Typography.Title level={4}>Kinh nguyệt là gì ?</Typography.Title>
              <Typography.Paragraph className={styles.subTitle}>
                Khi một cô gái trải qua kỳ kinh nguyệt đầu tiên do lượng hormone
                nữ tiết ra tăng lên, nó được gọi là kinh nguyệt.
                <br /> Có kinh nguyệt đồng nghĩa với việc lượng nội tiết tố nữ
                tiết ra tăng lên, kết thúc quá trình sinh trưởng và là bằng
                chứng của việc bạn đã trưởng thành.
                <br />
                Độ tuổi bắt đầu có kinh nguyệt có thể khác nhau tùy thuộc vào sự
                phát triển thể chất, tình trạng dinh dưỡng, lượng vận động, ảnh
                hưởng tinh thần, yếu tố môi trường, v.v., nhưng theo khảo sát
                gần đây của Kines, độ tuổi trung bình là 11,5 đến 12 tuổi, tức
                là khoảng sớm hơn một năm so với thế hệ cha mẹ.
                <br />
                Trong vòng 6 tháng đến 1 năm sau khi có kinh, kinh nguyệt rất
                hiếm hoặc không đều do buồng trứng chưa phát triển đầy đủ.
              </Typography.Paragraph>
            </div>
            <div className={styles.img}>
              <img src={carbideDoctorImg} alt="carbide doctor" />
            </div>
          </DivTransition>
          <Row gutter={16} className={styles.infoList}>
            {listPeriod.map((weather) => (
              <Col
                span={24}
                lg={12}
                key={weather.id}
                style={{ marginBottom: 16 }}
              >
                <DivTransition className={styles.listItem}>
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

      <section>
        <div className="inner">
          <DivTransition className={styles.banner}>
            <Typography.Title level={3}>
              Chậm trưởng thành, chậm kinh + tăng trưởng chiều cao
            </Typography.Title>
            <Typography.Text>Bắt đầu ngay bây giờ!</Typography.Text>
            <Link to={ADVICE_OVERHAUL_URL} className="btn-link btn-mint">
              Đặt chỗ để kiểm tra tăng trưởng chi tiết
            </Link>
          </DivTransition>
        </div>
      </section>
    </>
  );
}
