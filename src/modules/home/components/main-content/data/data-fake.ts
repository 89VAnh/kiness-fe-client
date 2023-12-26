import info1 from "@/assets/img/info/benefit_img1.png";
import info2 from "@/assets/img/info/benefit_img2.png";
import info3 from "@/assets/img/info/benefit_img3.png";
import banner1 from "@/assets/img/info/center_img1.png";
import banner2 from "@/assets/img/info/center_img2.png";
import banner3 from "@/assets/img/info/center_img3.png";
import { CASE_STORY_URL, PROGRAM_METHOD_URL, RESEARCHER_URL } from "@/urls";

export const dataBenefit = [
  {
    img: info1,
    title: "Tỷ lệ thành công của khóa mục tiêu 92%",
  },
  {
    img: info2,
    title: "Thiết bị đặc biệt được cấp bằng sáng chế",
  },
  {
    img: info3,
    title: "Hệ thống đảm bảo trách nhiệm tăng trưởng",
  },
];

export const dataStep = [
  "Tìm nguyên nhân chiều cao thấp",
  "Nhận xét về giai đoạn tăng trưởng",
  "Dự đoán tăng trưởng (tiềm năng tăng trưởng)",
  "Cấu hình các chương trình cá nhân hóa",
  "Quản lý chương trình 1:1",
  "Quản lý tái khám 3 tháng một lần",
  "Đạt được mục tiêu chính dự báo 1 năm",
  "Thay đổi lối sống và đánh giá tính bền vững",
];

export const dataBanner = [
  {
    img: banner1,
    link: PROGRAM_METHOD_URL,
    title: "Phương pháp tăng trưởng Kiness",
    content: `Giúp con bạn cao hơn 10 cm
    tại Kines, ứng dụng phân tích các bài kiểm tra tăng trưởng chi tiết và cung cấp khả năng quản lý cá nhân về dinh dưỡng, tập thể dục, giấc ngủ và căng thẳng.`,
  },
  {
    img: banner2,
    link: CASE_STORY_URL,
    title: "Câu chuyện tăng trưởng của Kiness",
    content: `Quản lý con bạn bằng phương pháp tăng trưởng kiness và kiểm tra các trường hợp tăng trưởng thực tế vượt qua đường cong tăng trưởng và vượt quá chiều cao dự kiến.`,
  },
  {
    img: banner3,
    link: RESEARCHER_URL,
    title: "Nghiên cứu khoa học của Kiness",
    content: `Bí quyết tăng trưởng có hệ thống, tài liệu nghiên cứu, bằng sáng chế và sách được tích lũy từ năm 1999 của các nhà nghiên cứu Kiness.`,
  },
];
