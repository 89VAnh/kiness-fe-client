import { Typography } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import postureImg1 from "@/assets/img/info-growth/img_posture01.png";
import postureImg2 from "@/assets/img/info-growth/img_posture02.png";
import postureImg3 from "@/assets/img/info-growth/img_posture03.png";
import postureImg4 from "@/assets/img/info-growth/img_posture04.png";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import DivTransition from "@/modules/shared/transition/DivTransition";
import { ADVICE_OVERHAUL_URL } from "@/urls";

import styles from "./scss/standing.module.scss";

export default function Height(): JSX.Element {
  return (
    <>
      <Title />

      <Breadcrumb />

      <section className={styles.contentWrap}>
        <div className="inner">
          <motion.div
            initial={{ x: -50, opacity: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.headerWrap}
          >
            <Typography.Title level={3}>
              Tư thế khom lưng cản trở sự phát triển chiều cao!
            </Typography.Title>
            <Typography.Paragraph className={styles.headerParagraph}>
              Nếu bạn có tư thế xấu, người ta thường cho rằng xương của bạn
              không thẳng hàng. Tuy nhiên, trên thực tế, sự cân bằng của các cơ
              giữ xương và khớp bị rối loạn, gây ra tư thế xấu. Để khắc phục
              điều này, bạn cần đo và phân tích chi tiết từ lòng bàn chân đến
              đỉnh đầu, đồng thời có thói quen sinh hoạt phù hợp và sự trợ giúp
              của chuyên gia để duy trì tư thế đúng.
            </Typography.Paragraph>

            <Typography.Paragraph className={styles.headerParagraph}>
              Để trẻ phát triển và sống khỏe mạnh, kiness tăng cường chức năng
              cơ bằng thiết bị đẳng vận động dành cho cơ yếu, tập thể dục cho cơ
              bị cứng và huấn luyện phản hồi thần kinh để giảm căng thẳng, cũng
              như CST (Liệu pháp Cranio-Sacral), PRT (Liệu pháp Thư giãn Tư
              thế), và MET. Thư giãn cơ và mất cân bằng tư thế được cải thiện
              thông qua nhiều phương pháp điều chỉnh khác nhau như (kỹ thuật
              năng lượng cơ), liệu pháp giải phóng cân cơ và liệu pháp thư giãn
              cơ quan.
            </Typography.Paragraph>
          </motion.div>
        </div>
      </section>
      <section className={`${styles.contentWrap} ${styles.postureArea}`}>
        <div className="inner">
          <Typography.Title level={5} className={styles.postureTitle}>
            Cổ thẳng (cổ rùa)/Vai tròn
          </Typography.Title>

          <DivTransition className={styles.img}>
            <img src={postureImg1} alt="posture-1" />
          </DivTransition>

          <DivTransition className={styles.box}>
            <span>
              Trong tình huống các cơ xung quanh cột sống bị suy yếu do ít vận
              động, trẻ ít vận động do học tập hoặc sử dụng thiết bị di động
              thường phát triển cổ thẳng (cổ rùa) và tư thế vai khom.
            </span>
            <br />
            <br />
            <span>
              Khi đầu cúi về phía trước so với đường cột sống, các cơ ở cổ và
              vai dễ bị cứng và mỏi do phải vật lộn để chịu đựng sức nặng của
              đầu, trong các tình huống các cơ xung quanh cột sống bị suy yếu do
              thiếu thể lực. khối lượng lớn, thời gian học tập hoặc sử dụng
              thiết bị di động tăng lên... Ở trẻ em, cùng với cổ thẳng (cổ rùa),
              vai cong vào trong, làm tăng căng thẳng về thể chất và cản trở sự
              phát triển chiều cao. Nếu tình trạng nặng hơn có thể tác động tiêu
              cực đến việc học và cuộc sống hàng ngày, chẳng hạn như đau đầu và
              giảm khả năng tập trung trong não do lưu lượng máu lên não giảm.
            </span>
            <br />
            <br />
            <span>
              Trong trường hợp vai cong, khoảng trống giữa các xương cánh luôn
              bị kéo lại, điều này không chỉ làm giảm khả năng vận động của chóp
              xoay mà còn khiến vai bị đông cứng khi còn trẻ và bị tê ở cánh
              tay. Sự mất cân bằng ở cổ và vai khiến cột sống ngực bị cong, làm
              rối loạn tín hiệu và sự tuần hoàn của dây thần kinh trung ương và
              các mạch máu lớn xung quanh cột sống, cản trở sự phát triển và
              trong trường hợp nghiêm trọng, chất lượng cuộc sống và khả năng
              học tập bị giảm sút do đến nỗi đau.
            </span>
            <br />
            <br />
            <span>
              kiness là một thiết bị isokinetic không chỉ tăng cường chức năng
              cơ cột sống một cách nhanh chóng, an toàn và thư giãn các cơ cứng
              để tăng lưu lượng máu não mà còn tạo điều kiện thuận lợi cho dòng
              chảy của hệ thần kinh trung ương cơ bản thông qua CST, dạy và duy
              trì tư thế đúng trong cuộc sống hàng ngày.
            </span>
          </DivTransition>
        </div>
      </section>
      <section className={`${styles.contentWrap} ${styles.postureArea2}`}>
        <div className="inner">
          <Typography.Title level={5} className={styles.stepTitle}>
            Đầu gối cong vẹo (Loại O) / Đầu gối vẹo ra ngoài (Loại X) Chân vòng
            kiềng
          </Typography.Title>
          <DivTransition className={styles.img}>
            <img src={postureImg2} alt="posture-02" />
          </DivTransition>
          <DivTransition className={styles.box}>
            <Typography.Text>
              Chân chữ O và đặc biệt, trẻ béo phì thường mắc chứng chân vòng
              kiềng chữ X, nếu để lâu không điều trị có thể gây biến dạng bàn
              chân thứ phát.
              <br />
              Đôi chân vòng kiềng này không chỉ gây ra sự khác biệt về chiều dài
              chân, vẹo xương chậu mà còn gây ra dáng đi không đúng như dáng đi
              mũi má hay dáng đi bắt chéo chân, không chỉ mất thẩm mỹ mà còn làm
              giảm thành tích thể thao và làm giảm tâm lý tự ti của mỗi người.
              đứa trẻ đang lớn. Đối với trường hợp chân vòng kiềng từ cấp độ 4
              trở lên, nếu không sửa chữa có thể dẫn đến biến dạng các khớp, gây
              ra một vòng luẩn quẩn khiến mức độ chân vòng kiềng ngày càng trầm
              trọng.
              <br />
              <br />
              Để ngăn chặn điều này, kiness quản lý các yếu tố ảnh hưởng đến
              khớp hông và đầu gối, chẳng hạn như điều chỉnh dáng đi, béo phì và
              quản lý dinh dưỡng, cũng như tăng cường sức mạnh cho các cơ bị suy
              yếu và thư giãn các cơ bị cứng, đồng thời cung cấp các bài tập
              tăng cường tính linh hoạt và tăng cường cơ bắp có thể tập tại nhà.
              Chúng tôi cung cấp đào tạo để đảm bảo rằng đôi chân của bạn thẳng
              và thẳng.
            </Typography.Text>
          </DivTransition>
        </div>
      </section>
      <section className={`${styles.contentWrap} ${styles.postureArea3}`}>
        <div className="inner">
          <Typography.Title level={5} className={styles.stepTitle}>
            Bàn chân bẹt/bàn chân lõm/chênh lệch chiều dài chân (LLD)
          </Typography.Title>
          <DivTransition className={styles.img}>
            <img src={postureImg3} alt="posture-03" />
          </DivTransition>
          <DivTransition className={styles.box}>
            <Typography.Text>
              Vòm bàn chân còn được gọi là dây chằng lò xo và có tác dụng phân
              phối trọng lượng cơ thể và sốc đệm. Nếu bạn có bàn chân bẹt, vòm
              bàn chân bị xẹp hoặc bàn chân lõm với vòm bàn chân quá mức, bạn sẽ
              khó đi lại trong thời gian dài và khó hỗ trợ trọng lượng của mình.
              Do đó, ngay cả những hoạt động nhỏ cũng có thể dễ dàng khiến bạn
              mệt mỏi và gây căng thẳng cho đầu gối, khớp hông và các khớp đối
              diện với bán kính của bạn, điều này sẽ làm biến dạng tư thế tổng
              thể của bạn và dẫn đến tư thế dáng đi không chính xác như đi lùi
              và lùi. Điều này làm giảm hoạt động và dẫn đến giảm sức chịu đựng,
              cản trở sự tăng trưởng.
              <br />
              <br />
              Nếu tình trạng mất cân bằng tư thế ở lưng dưới và xương chậu không
              được giám sát trong một thời gian dài do thói quen sinh hoạt như
              bắt chéo chân hoặc bắt chéo chân và các chấn thương như gãy xương
              do tai nạn, thì sự khác biệt về chiều dài chân có thể xảy ra. Sự
              khác biệt về chiều dài chân không chỉ cản trở sự phát triển do
              tích tụ sốc hoặc mỏi ở một bên khi đi lại mà còn khiến mắt cá
              chân, khớp hông, thắt lưng và xương chậu bị biến dạng do dáng đi
              lạch bạch. Tại Kines, chúng tôi tạo và mang đế lót giày được cá
              nhân hóa để tạo vòm chân bình thường và bù đắp cho sự chênh lệch
              về chiều dài chân, sau đó dạy đi bộ với tư thế thích hợp. Chúng
              tôi cũng thực hiện các động tác chỉnh sửa để thư giãn các cơ ở
              chân và xương chậu bị cứng.
            </Typography.Text>
          </DivTransition>
        </div>
      </section>
      <section className={`${styles.contentWrap} ${styles.postureArea2}`}>
        <div className="inner">
          <Typography.Title level={5} className={styles.stepTitle}>
            Lẹo lưng/Chướng lưng thắt lưng/Lưng phẳng/Vẹo cột sống
          </Typography.Title>
          <DivTransition className={styles.img}>
            <img src={postureImg4} alt="posture-04" />
          </DivTransition>
          <DivTransition className={styles.box}>
            <Typography.Text>
              Khi nhìn từ bên cạnh người đứng tự nhiên, nếu bụng nhô ra ngoài
              đường cơ sở, hông bị đẩy về phía sau hoặc eo thẳng không có đường
              cong thì bạn có thể nghi ngờ bị biến dạng cột sống. Khi biến dạng
              xảy ra, hệ thần kinh trung ương và các mạch máu quan trọng bị rối
              loạn khiến hệ tuần hoàn và tín hiệu của cơ thể suy sụp, nếu ngồi
              lâu không thể hoặc trong trường hợp nặng, đau lưng có thể dễ dàng
              xảy ra ngay cả trong sinh hoạt hàng ngày. có thể cản trở sự tập
              trung ở trường.
              <br />
              <br />
              Chứng vẹo cột sống, trong đó cột sống cong thành hình chữ S hoặc C
              khi nhìn từ phía trước, cũng thường xảy ra nhất do sự mất cân bằng
              giữa các cơ giữ cột sống trái và phải. Việc điều chỉnh là cần
              thiết vì nó gây mất cân bằng trái phải ở vai hoặc cổ và cứng cơ,
              đồng thời trong trường hợp nghiêm trọng, cơn đau hoặc quá trình
              tiêu hóa và hấp thu bị giảm, cản trở sự phát triển. <br /> Sau khi
              kiểm tra các đoạn cột sống trái và phải, kiness bình thường hóa
              phạm vi chuyển động bằng cách thư giãn các khớp liên quan bằng
              MET, giảm cứng cơ và đau bằng PRT, đồng thời cải thiện tư thế bằng
              cách tăng cường chức năng cơ lưng bằng thiết bị đẳng động.
            </Typography.Text>
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
    </>
  );
}
