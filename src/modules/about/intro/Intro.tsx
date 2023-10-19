import { Spin } from "antd";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { useGetPageById } from "@/loader/page.loader";
import Sidebar from "@/modules/shared/sidebar/Sidebar";
import { getLastPath } from "@/utils/format-string";

import { renderAboutMenus } from "../utils/render";

export default function Intro() {
  const { t } = useTranslation();
  const location = useLocation();

  const items = renderAboutMenus(t);

  const page = useGetPageById({ id: getLastPath(location.pathname) });

  const renderChildren = () => {
    return page.isLoading ? (
      <Spin />
    ) : (
      <div dangerouslySetInnerHTML={{ __html: page.data?.content }}></div>
    );
    // <div className={styles.caption}>
    //   <Typography.Title level={2} className={styles.title}>
    //     Xin chào?.
    //     <br /> Tôi là Kim Yang-soo, Giám đốc điều hành của Trung tâm Tăng
    //     trưởng Kines.
    //   </Typography.Title>
    //   <Typography.Text className={styles.content}>
    //     Năm 1999, khi không ai nói về tăng trưởng chiều cao, Kinnessđã bắt đầu
    //     Phòng khám tăng trưởng chiều cao như một trung tâm tăng trưởng tập thể
    //     dục tùy chỉnh, phát triển phương pháp tăng trưởng Kines và phát
    //     triểncác thiết bị đặc biệt như Longman, Walking Traction, Cyber
    //     ​​Doctor, Biosys và Cento để giúp trẻ em phát triểnLà một công ty tiêu
    //     biểu trong lĩnh vực tăng cường sức khỏe đã và đang phấn đấu cho và
    //     tăng cường sức khỏe, đây là công ty đầu tiên trong ngành thực hiện “Hệ
    //     thống đảm bảo trách nhiệm tăng trưởng” trong lĩnh vực tăng trưởng
    //     chiều cao của trẻ vàcó mạng lưới chi nhánh lớn nhất toàn quốc cùng
    //     ngành hàng.
    //     <br />
    //     <br />
    //   </Typography.Text>
    //   <Typography.Text className={styles.content}>
    //     Trong khi chờ đợi, Kinness đã giới thiệu "Phương pháp tăng trưởng
    //     Kinness" nhiều lần thông qua các chương trình truyền hình đại diện cho
    //     Hàn Quốc như KBS, MBC, SBS và nhiều chương trình khác. lần tới các
    //     phương tiện truyền thông cả trong nước và quốc tế.
    //     <br />
    //     <br />
    //     Kines xây dựng hệ thống tăng trưởng chiều cao bằng thiết bị chuyên
    //     dụng tự phát triển và hệ thống hóa 10 bài kiểm tra chuyên biệt, trong
    //     đó có bài kiểm tra độ chính xác về tốc độ tăng trưởng, để xác định
    //     giai đoạn tăng trưởng của trẻ và xác định xem trẻ có thể phát triển
    //     tốt hơn và cao thêm bao nhiêu trong tương lai. Đây là một phòng khám
    //     tăng trưởng chiều cao khác biệt giúp trẻ cao lớn hơn.
    //     <br />
    //     <br />
    //     Phương pháp tăng trưởng vận động không sử dụng thuốc nên không tác
    //     dụng phụ, ý thức sứ mệnh là trung tâm chuyên biệt tăng trưởng chiều
    //     cao hiệu quả và duy nhất đạt trên 90% tốc độ tăng trưởng chiều cao mục
    //     tiêu thông qua việc cải thiện các chức năng cơ thể bị suy yếu và lối
    //     sống xấu để trẻ em có thể phát triển khỏe mạnh.
    //     <br />
    //     <br />
    //     Kines đang điều hành một trung tâm giáo dục trọn đời, nơi nuôi dưỡng
    //     các chuyên gia của riêng mình và luôn nỗ lực nghiên cứu để cung cấp
    //     các dịch vụ dựa trên tri thức tốt hơn thông qua trung tâm nghiên cứu
    //     trực thuộc công ty.
    //     <br />
    //     <br />
    //     Xin hãy để mắt đến Kines, nơi chịu trách nhiệm về sự tăng trưởng chiều
    //     cao và tăng cường sức khỏe cho trẻ em của chúng ta, và yêu cầu sự động
    //     viên của bạn.
    //     <br />
    //     <br />
    //     Bài đăng của Tiến sĩ Kim Yang-soo, Giám đốc điều hành của Kines
    //   </Typography.Text>
    // </div>
  };

  return <Sidebar children={renderChildren()} items={items} />;
}
