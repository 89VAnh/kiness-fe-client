import { Typography } from "antd";
import { Link } from "react-router-dom";

import maturityImg1 from "@/assets/img/info-growth/img_maturity.png";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import DivTransition from "@/modules/shared/transition/DivTransition";
import { ADVICE_OVERHAUL_URL } from "@/urls";

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
                    đầu to ra vào khoảng 12 hoặc 13 tuổi. Những thay đổi này
                    diễn ra nhanh chóng nên nếu kinh nguyệt xảy ra trước 8 tuổi
                    ở bé gái và tinh hoàn to trước 9 tuổi ở bé trai thì đó là
                    dậy thì sớm, nếu xảy ra ở độ tuổi từ 9 đến 10 ở bé gái và 10
                    đến 11 tuổi ở bé trai. , đó là tuổi dậy thì sớm. Chẩn đoán
                    chính xác được thực hiện bằng cách kiểm tra nồng độ
                    gonadotropin thông qua xét nghiệm máu và lấy máu.
                  </Typography.Paragraph>
                </div>
              </DivTransition>
            </div>

            <DivTransition className={styles.box}>
              <Typography.Title level={4}>
                Ngay cả khi con gái nhỏ có ngực thì đó cũng không phải là dậy
                thì sớm sau 9 tuổi.
              </Typography.Title>
              <Typography.Paragraph>
                Nếu trẻ lớn nhanh, ngực hoặc tinh hoàn to trước khi học hết lớp
                dưới tiểu học thì có nhiều trường hợp trẻ bị cho là dậy thì sớm
                và được tiêm thuốc ức chế gonadotropin vô điều kiện. Tuy nhiên,
                tùy theo độ tuổi mà những thay đổi này xảy ra mà thường là dậy
                thì sớm (dậy thì sớm), có triệu chứng giống như dậy thì sớm
                nhưng không cần điều trị.
              </Typography.Paragraph>
            </DivTransition>
            <DivTransition className={styles.box}>
              <Typography.Title level={4}>
                Ngay cả khi con gái nhỏ có ngực thì đó cũng không phải là dậy
                thì sớm sau 9 tuổi.
              </Typography.Title>
              <Typography.Paragraph>
                Nếu trẻ lớn nhanh, ngực hoặc tinh hoàn to trước khi học hết lớp
                dưới tiểu học thì có nhiều trường hợp trẻ bị cho là dậy thì sớm
                và được tiêm thuốc ức chế gonadotropin vô điều kiện. Tuy nhiên,
                tùy theo độ tuổi mà những thay đổi này xảy ra mà thường là dậy
                thì sớm (dậy thì sớm), có triệu chứng giống như dậy thì sớm
                nhưng không cần điều trị.
              </Typography.Paragraph>
            </DivTransition>
          </div>
        </div>

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
