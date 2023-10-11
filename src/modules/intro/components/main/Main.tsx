import { Menu, Typography } from "antd";
import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";

import top_menu_bg from "@/assets/img/about-top_menu.png";

import styles from "./scss/main.module.scss";
import "./scss/main.scss";

export default function Main() {
  const { t } = useTranslation();
  const [selectedMenu, setSelectedMenu] = useState("1");

  type MenuItem = {
    key: string;
    label: string;
  };

  const items: MenuItem[] = [];

  for (let i = 0; i <= 5; i++) {
    items.push({ key: `${i + 1}`, label: t(`nav.about.children.${i}`) });
  }

  type CaptionItem = {
    key: string;
    item: ReactNode;
  };

  const captionItems: CaptionItem[] = [
    {
      key: "1",
      item: (
        <div className={styles.caption}>
          <Typography.Title level={2} className={styles.title}>
            Xin chào?.
            <br /> Tôi là Kim Yang-soo, Giám đốc điều hành của Trung tâm Tăng
            trưởng Kines.
          </Typography.Title>
          <Typography.Text className={styles.content} style={{ maxWidth: 649 }}>
            Năm 1999, khi không ai nói về tăng trưởng chiều cao, Kinnessđã bắt
            đầu Phòng khám tăng trưởng chiều cao như một trung tâm tăng trưởng
            tập thể dục tùy chỉnh, phát triển phương pháp tăng trưởng Kines và
            phát triểncác thiết bị đặc biệt như Longman, Walking Traction, Cyber
            ​​Doctor, Biosys và Cento để giúp trẻ em phát triểnLà một công ty
            tiêu biểu trong lĩnh vực tăng cường sức khỏe đã và đang phấn đấu cho
            và tăng cường sức khỏe, đây là công ty đầu tiên trong ngành thực
            hiện “Hệ thống đảm bảo trách nhiệm tăng trưởng” trong lĩnh vực tăng
            trưởng chiều cao của trẻ vàcó mạng lưới chi nhánh lớn nhất toàn quốc
            cùng ngành hàng.
            <br />
            <br />
          </Typography.Text>
          <Typography.Text className={styles.content}>
            Trong khi chờ đợi, Kinness đã giới thiệu "Phương pháp tăng trưởng
            Kinness" nhiều lần thông qua các chương trình truyền hình đại diện
            cho Hàn Quốc như KBS, MBC, SBS và nhiều chương trình khác. lần tới
            các phương tiện truyền thông cả trong nước và quốc tế.
            <br />
            <br />
            Kines xây dựng hệ thống tăng trưởng chiều cao bằng thiết bị chuyên
            dụng tự phát triển và hệ thống hóa 10 bài kiểm tra chuyên biệt,
            trong đó có bài kiểm tra độ chính xác về tốc độ tăng trưởng, để xác
            định giai đoạn tăng trưởng của trẻ và xác định xem trẻ có thể phát
            triển tốt hơn và cao thêm bao nhiêu trong tương lai. Đây là một
            phòng khám tăng trưởng chiều cao khác biệt giúp trẻ cao lớn hơn.
            <br />
            <br />
            Phương pháp tăng trưởng vận động không sử dụng thuốc nên không tác
            dụng phụ, ý thức sứ mệnh là trung tâm chuyên biệt tăng trưởng chiều
            cao hiệu quả và duy nhất đạt trên 90% tốc độ tăng trưởng chiều cao
            mục tiêu thông qua việc cải thiện các chức năng cơ thể bị suy yếu và
            lối sống xấu để trẻ em có thể phát triển khỏe mạnh.
            <br />
            <br />
            Kines đang điều hành một trung tâm giáo dục trọn đời, nơi nuôi dưỡng
            các chuyên gia của riêng mình và luôn nỗ lực nghiên cứu để cung cấp
            các dịch vụ dựa trên tri thức tốt hơn thông qua trung tâm nghiên cứu
            trực thuộc công ty.
            <br />
            <br />
            Xin hãy để mắt đến Kines, nơi chịu trách nhiệm về sự tăng trưởng
            chiều cao và tăng cường sức khỏe cho trẻ em của chúng ta, và yêu cầu
            sự động viên của bạn.
            <br />
            <br />
            Bài đăng của Tiến sĩ Kim Yang-soo, Giám đốc điều hành của Kines
          </Typography.Text>
        </div>
      ),
    },
    {
      key: "2",
      item: (
        <div className={styles.caption}>
          <Typography.Title level={2} className={styles.title}>
            Xin chào?.
            <br /> Tôi là Kim Yang-soo, Giám đốc điều hành của Trung tâm Tăng
            trưởng Kines.
          </Typography.Title>
          <Typography.Text className={styles.content} style={{ maxWidth: 649 }}>
            Năm 1999, khi không ai nói về tăng trưởng chiều cao, Kinnessđã bắt
            đầu Phòng khám tăng trưởng chiều cao như một trung tâm tăng trưởng
            tập thể dục tùy chỉnh, phát triển phương pháp tăng trưởng Kines và
            phát triểncác thiết bị đặc biệt như Longman, Walking Traction, Cyber
            ​​Doctor, Biosys và Cento để giúp trẻ em phát triểnLà một công ty
            tiêu biểu trong lĩnh vực tăng cường sức khỏe đã và đang phấn đấu cho
            và tăng cường sức khỏe, đây là công ty đầu tiên trong ngành thực
            hiện “Hệ thống đảm bảo trách nhiệm tăng trưởng” trong lĩnh vực tăng
            trưởng chiều cao của trẻ vàcó mạng lưới chi nhánh lớn nhất toàn quốc
            cùng ngành hàng.
            <br />
            <br />
          </Typography.Text>
          <Typography.Text className={styles.content}>
            Trong khi chờ đợi, Kinness đã giới thiệu "Phương pháp tăng trưởng
            Kinness" nhiều lần thông qua các chương trình truyền hình đại diện
            cho Hàn Quốc như KBS, MBC, SBS và nhiều chương trình khác. lần tới
            các phương tiện truyền thông cả trong nước và quốc tế.
            <br />
            <br />
            Kines xây dựng hệ thống tăng trưởng chiều cao bằng thiết bị chuyên
            dụng tự phát triển và hệ thống hóa 10 bài kiểm tra chuyên biệt,
            trong đó có bài kiểm tra độ chính xác về tốc độ tăng trưởng, để xác
            định giai đoạn tăng trưởng của trẻ và xác định xem trẻ có thể phát
            triển tốt hơn và cao thêm bao nhiêu trong tương lai. Đây là một
            phòng khám tăng trưởng chiều cao khác biệt giúp trẻ cao lớn hơn.
            <br />
            <br />
            Phương pháp tăng trưởng vận động không sử dụng thuốc nên không tác
            dụng phụ, ý thức sứ mệnh là trung tâm chuyên biệt tăng trưởng chiều
            cao hiệu quả và duy nhất đạt trên 90% tốc độ tăng trưởng chiều cao
            mục tiêu thông qua việc cải thiện các chức năng cơ thể bị suy yếu và
            lối sống xấu để trẻ em có thể phát triển khỏe mạnh.
            <br />
            <br />
            Kines đang điều hành một trung tâm giáo dục trọn đời, nơi nuôi dưỡng
            các chuyên gia của riêng mình và luôn nỗ lực nghiên cứu để cung cấp
            các dịch vụ dựa trên tri thức tốt hơn thông qua trung tâm nghiên cứu
            trực thuộc công ty.
            <br />
            <br />
            Xin hãy để mắt đến Kines, nơi chịu trách nhiệm về sự tăng trưởng
            chiều cao và tăng cường sức khỏe cho trẻ em của chúng ta, và yêu cầu
            sự động viên của bạn.
            <br />
            <br />
            Bài đăng của Tiến sĩ Kim Yang-soo, Giám đốc điều hành của Kines
          </Typography.Text>
        </div>
      ),
    },
    {
      key: "3",
      item: (
        <div className={styles.caption}>
          <Typography.Title level={2} className={styles.title}>
            Xin chào?.
            <br /> Tôi là Kim Yang-soo, Giám đốc điều hành của Trung tâm Tăng
            trưởng Kines.
          </Typography.Title>
          <Typography.Text className={styles.content} style={{ maxWidth: 649 }}>
            Năm 1999, khi không ai nói về tăng trưởng chiều cao, Kinnessđã bắt
            đầu Phòng khám tăng trưởng chiều cao như một trung tâm tăng trưởng
            tập thể dục tùy chỉnh, phát triển phương pháp tăng trưởng Kines và
            phát triểncác thiết bị đặc biệt như Longman, Walking Traction, Cyber
            ​​Doctor, Biosys và Cento để giúp trẻ em phát triểnLà một công ty
            tiêu biểu trong lĩnh vực tăng cường sức khỏe đã và đang phấn đấu cho
            và tăng cường sức khỏe, đây là công ty đầu tiên trong ngành thực
            hiện “Hệ thống đảm bảo trách nhiệm tăng trưởng” trong lĩnh vực tăng
            trưởng chiều cao của trẻ vàcó mạng lưới chi nhánh lớn nhất toàn quốc
            cùng ngành hàng.
            <br />
            <br />
          </Typography.Text>
          <Typography.Text className={styles.content}>
            Trong khi chờ đợi, Kinness đã giới thiệu "Phương pháp tăng trưởng
            Kinness" nhiều lần thông qua các chương trình truyền hình đại diện
            cho Hàn Quốc như KBS, MBC, SBS và nhiều chương trình khác. lần tới
            các phương tiện truyền thông cả trong nước và quốc tế.
            <br />
            <br />
            Kines xây dựng hệ thống tăng trưởng chiều cao bằng thiết bị chuyên
            dụng tự phát triển và hệ thống hóa 10 bài kiểm tra chuyên biệt,
            trong đó có bài kiểm tra độ chính xác về tốc độ tăng trưởng, để xác
            định giai đoạn tăng trưởng của trẻ và xác định xem trẻ có thể phát
            triển tốt hơn và cao thêm bao nhiêu trong tương lai. Đây là một
            phòng khám tăng trưởng chiều cao khác biệt giúp trẻ cao lớn hơn.
            <br />
            <br />
            Phương pháp tăng trưởng vận động không sử dụng thuốc nên không tác
            dụng phụ, ý thức sứ mệnh là trung tâm chuyên biệt tăng trưởng chiều
            cao hiệu quả và duy nhất đạt trên 90% tốc độ tăng trưởng chiều cao
            mục tiêu thông qua việc cải thiện các chức năng cơ thể bị suy yếu và
            lối sống xấu để trẻ em có thể phát triển khỏe mạnh.
            <br />
            <br />
            Kines đang điều hành một trung tâm giáo dục trọn đời, nơi nuôi dưỡng
            các chuyên gia của riêng mình và luôn nỗ lực nghiên cứu để cung cấp
            các dịch vụ dựa trên tri thức tốt hơn thông qua trung tâm nghiên cứu
            trực thuộc công ty.
            <br />
            <br />
            Xin hãy để mắt đến Kines, nơi chịu trách nhiệm về sự tăng trưởng
            chiều cao và tăng cường sức khỏe cho trẻ em của chúng ta, và yêu cầu
            sự động viên của bạn.
            <br />
            <br />
            Bài đăng của Tiến sĩ Kim Yang-soo, Giám đốc điều hành của Kines
          </Typography.Text>
        </div>
      ),
    },
    {
      key: "4",
      item: (
        <div className={styles.caption}>
          <Typography.Title level={2} className={styles.title}>
            Xin chào?.
            <br /> Tôi là Kim Yang-soo, Giám đốc điều hành của Trung tâm Tăng
            trưởng Kines.
          </Typography.Title>
          <Typography.Text className={styles.content} style={{ maxWidth: 649 }}>
            Năm 1999, khi không ai nói về tăng trưởng chiều cao, Kinnessđã bắt
            đầu Phòng khám tăng trưởng chiều cao như một trung tâm tăng trưởng
            tập thể dục tùy chỉnh, phát triển phương pháp tăng trưởng Kines và
            phát triểncác thiết bị đặc biệt như Longman, Walking Traction, Cyber
            ​​Doctor, Biosys và Cento để giúp trẻ em phát triểnLà một công ty
            tiêu biểu trong lĩnh vực tăng cường sức khỏe đã và đang phấn đấu cho
            và tăng cường sức khỏe, đây là công ty đầu tiên trong ngành thực
            hiện “Hệ thống đảm bảo trách nhiệm tăng trưởng” trong lĩnh vực tăng
            trưởng chiều cao của trẻ vàcó mạng lưới chi nhánh lớn nhất toàn quốc
            cùng ngành hàng.
            <br />
            <br />
          </Typography.Text>
          <Typography.Text className={styles.content}>
            Trong khi chờ đợi, Kinness đã giới thiệu "Phương pháp tăng trưởng
            Kinness" nhiều lần thông qua các chương trình truyền hình đại diện
            cho Hàn Quốc như KBS, MBC, SBS và nhiều chương trình khác. lần tới
            các phương tiện truyền thông cả trong nước và quốc tế.
            <br />
            <br />
            Kines xây dựng hệ thống tăng trưởng chiều cao bằng thiết bị chuyên
            dụng tự phát triển và hệ thống hóa 10 bài kiểm tra chuyên biệt,
            trong đó có bài kiểm tra độ chính xác về tốc độ tăng trưởng, để xác
            định giai đoạn tăng trưởng của trẻ và xác định xem trẻ có thể phát
            triển tốt hơn và cao thêm bao nhiêu trong tương lai. Đây là một
            phòng khám tăng trưởng chiều cao khác biệt giúp trẻ cao lớn hơn.
            <br />
            <br />
            Phương pháp tăng trưởng vận động không sử dụng thuốc nên không tác
            dụng phụ, ý thức sứ mệnh là trung tâm chuyên biệt tăng trưởng chiều
            cao hiệu quả và duy nhất đạt trên 90% tốc độ tăng trưởng chiều cao
            mục tiêu thông qua việc cải thiện các chức năng cơ thể bị suy yếu và
            lối sống xấu để trẻ em có thể phát triển khỏe mạnh.
            <br />
            <br />
            Kines đang điều hành một trung tâm giáo dục trọn đời, nơi nuôi dưỡng
            các chuyên gia của riêng mình và luôn nỗ lực nghiên cứu để cung cấp
            các dịch vụ dựa trên tri thức tốt hơn thông qua trung tâm nghiên cứu
            trực thuộc công ty.
            <br />
            <br />
            Xin hãy để mắt đến Kines, nơi chịu trách nhiệm về sự tăng trưởng
            chiều cao và tăng cường sức khỏe cho trẻ em của chúng ta, và yêu cầu
            sự động viên của bạn.
            <br />
            <br />
            Bài đăng của Tiến sĩ Kim Yang-soo, Giám đốc điều hành của Kines
          </Typography.Text>
        </div>
      ),
    },
    {
      key: "5",
      item: (
        <div className={styles.caption}>
          <Typography.Title level={2} className={styles.title}>
            Xin chào?.
            <br /> Tôi là Kim Yang-soo, Giám đốc điều hành của Trung tâm Tăng
            trưởng Kines.
          </Typography.Title>
          <Typography.Text className={styles.content} style={{ maxWidth: 649 }}>
            Năm 1999, khi không ai nói về tăng trưởng chiều cao, Kinnessđã bắt
            đầu Phòng khám tăng trưởng chiều cao như một trung tâm tăng trưởng
            tập thể dục tùy chỉnh, phát triển phương pháp tăng trưởng Kines và
            phát triểncác thiết bị đặc biệt như Longman, Walking Traction, Cyber
            ​​Doctor, Biosys và Cento để giúp trẻ em phát triểnLà một công ty
            tiêu biểu trong lĩnh vực tăng cường sức khỏe đã và đang phấn đấu cho
            và tăng cường sức khỏe, đây là công ty đầu tiên trong ngành thực
            hiện “Hệ thống đảm bảo trách nhiệm tăng trưởng” trong lĩnh vực tăng
            trưởng chiều cao của trẻ vàcó mạng lưới chi nhánh lớn nhất toàn quốc
            cùng ngành hàng.
            <br />
            <br />
          </Typography.Text>
          <Typography.Text className={styles.content}>
            Trong khi chờ đợi, Kinness đã giới thiệu "Phương pháp tăng trưởng
            Kinness" nhiều lần thông qua các chương trình truyền hình đại diện
            cho Hàn Quốc như KBS, MBC, SBS và nhiều chương trình khác. lần tới
            các phương tiện truyền thông cả trong nước và quốc tế.
            <br />
            <br />
            Kines xây dựng hệ thống tăng trưởng chiều cao bằng thiết bị chuyên
            dụng tự phát triển và hệ thống hóa 10 bài kiểm tra chuyên biệt,
            trong đó có bài kiểm tra độ chính xác về tốc độ tăng trưởng, để xác
            định giai đoạn tăng trưởng của trẻ và xác định xem trẻ có thể phát
            triển tốt hơn và cao thêm bao nhiêu trong tương lai. Đây là một
            phòng khám tăng trưởng chiều cao khác biệt giúp trẻ cao lớn hơn.
            <br />
            <br />
            Phương pháp tăng trưởng vận động không sử dụng thuốc nên không tác
            dụng phụ, ý thức sứ mệnh là trung tâm chuyên biệt tăng trưởng chiều
            cao hiệu quả và duy nhất đạt trên 90% tốc độ tăng trưởng chiều cao
            mục tiêu thông qua việc cải thiện các chức năng cơ thể bị suy yếu và
            lối sống xấu để trẻ em có thể phát triển khỏe mạnh.
            <br />
            <br />
            Kines đang điều hành một trung tâm giáo dục trọn đời, nơi nuôi dưỡng
            các chuyên gia của riêng mình và luôn nỗ lực nghiên cứu để cung cấp
            các dịch vụ dựa trên tri thức tốt hơn thông qua trung tâm nghiên cứu
            trực thuộc công ty.
            <br />
            <br />
            Xin hãy để mắt đến Kines, nơi chịu trách nhiệm về sự tăng trưởng
            chiều cao và tăng cường sức khỏe cho trẻ em của chúng ta, và yêu cầu
            sự động viên của bạn.
            <br />
            <br />
            Bài đăng của Tiến sĩ Kim Yang-soo, Giám đốc điều hành của Kines
          </Typography.Text>
        </div>
      ),
    },
    {
      key: "6",
      item: (
        <div className={styles.caption}>
          <Typography.Title level={2} className={styles.title}>
            Xin chào?.
            <br /> Tôi là Kim Yang-soo, Giám đốc điều hành của Trung tâm Tăng
            trưởng Kines.
          </Typography.Title>
          <Typography.Text className={styles.content} style={{ maxWidth: 649 }}>
            Năm 1999, khi không ai nói về tăng trưởng chiều cao, Kinnessđã bắt
            đầu Phòng khám tăng trưởng chiều cao như một trung tâm tăng trưởng
            tập thể dục tùy chỉnh, phát triển phương pháp tăng trưởng Kines và
            phát triểncác thiết bị đặc biệt như Longman, Walking Traction, Cyber
            ​​Doctor, Biosys và Cento để giúp trẻ em phát triểnLà một công ty
            tiêu biểu trong lĩnh vực tăng cường sức khỏe đã và đang phấn đấu cho
            và tăng cường sức khỏe, đây là công ty đầu tiên trong ngành thực
            hiện “Hệ thống đảm bảo trách nhiệm tăng trưởng” trong lĩnh vực tăng
            trưởng chiều cao của trẻ vàcó mạng lưới chi nhánh lớn nhất toàn quốc
            cùng ngành hàng.
            <br />
            <br />
          </Typography.Text>
          <Typography.Text className={styles.content}>
            Trong khi chờ đợi, Kinness đã giới thiệu "Phương pháp tăng trưởng
            Kinness" nhiều lần thông qua các chương trình truyền hình đại diện
            cho Hàn Quốc như KBS, MBC, SBS và nhiều chương trình khác. lần tới
            các phương tiện truyền thông cả trong nước và quốc tế.
            <br />
            <br />
            Kines xây dựng hệ thống tăng trưởng chiều cao bằng thiết bị chuyên
            dụng tự phát triển và hệ thống hóa 10 bài kiểm tra chuyên biệt,
            trong đó có bài kiểm tra độ chính xác về tốc độ tăng trưởng, để xác
            định giai đoạn tăng trưởng của trẻ và xác định xem trẻ có thể phát
            triển tốt hơn và cao thêm bao nhiêu trong tương lai. Đây là một
            phòng khám tăng trưởng chiều cao khác biệt giúp trẻ cao lớn hơn.
            <br />
            <br />
            Phương pháp tăng trưởng vận động không sử dụng thuốc nên không tác
            dụng phụ, ý thức sứ mệnh là trung tâm chuyên biệt tăng trưởng chiều
            cao hiệu quả và duy nhất đạt trên 90% tốc độ tăng trưởng chiều cao
            mục tiêu thông qua việc cải thiện các chức năng cơ thể bị suy yếu và
            lối sống xấu để trẻ em có thể phát triển khỏe mạnh.
            <br />
            <br />
            Kines đang điều hành một trung tâm giáo dục trọn đời, nơi nuôi dưỡng
            các chuyên gia của riêng mình và luôn nỗ lực nghiên cứu để cung cấp
            các dịch vụ dựa trên tri thức tốt hơn thông qua trung tâm nghiên cứu
            trực thuộc công ty.
            <br />
            <br />
            Xin hãy để mắt đến Kines, nơi chịu trách nhiệm về sự tăng trưởng
            chiều cao và tăng cường sức khỏe cho trẻ em của chúng ta, và yêu cầu
            sự động viên của bạn.
            <br />
            <br />
            Bài đăng của Tiến sĩ Kim Yang-soo, Giám đốc điều hành của Kines
          </Typography.Text>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.left_menu}>
        <div
          className={styles.top_menu}
          style={{ backgroundImage: `url(${top_menu_bg})` }}
        >
          {items.filter((item) => item.key === selectedMenu)[0].label}
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          className={styles.menu}
          onSelect={({ key }) => setSelectedMenu(key)}
        >
          {items.map((x) => (
            <Menu.Item
              key={x.key}
              style={{ whiteSpace: "normal", height: "auto" }}
              className={styles.menu_item}
            >
              {x.label}
            </Menu.Item>
          ))}
        </Menu>
      </div>
      {captionItems.filter((item) => item.key === selectedMenu)[0].item}
    </div>
  );
}
