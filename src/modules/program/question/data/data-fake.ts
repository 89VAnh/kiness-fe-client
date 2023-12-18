import img1 from "@/assets/img/program/ico_pro01.png";

export const dataListQuestion = {
  left: ["Mở/đóng tấm tăng trưởng", "Tiến triển của tuổi xương"],
  right: [
    "giai đoạn phát triển",
    "Mức độ trưởng thành",
    "Tình trạng dinh dưỡng",
    "mức độ căng thẳng",
    "Chức năng thể chất (chức năng cơ bắp, tính linh hoạt, khả năng vận động)",
    "Tư thế (cổ rùa, chân vòng kiềng, thân trái phải cân đối)",
    "Những yếu tố cản trở sự phát triển trong cuộc sống cần được cải thiện",
    "Khóa dự đoán tăng trưởng tự nhiên và khóa tăng trưởng Kines",
    "Chương trình tùy chỉnh để tăng trưởng chiều cao",
  ],
};

export const dataStepQuestion = [...Array(10)].map((_, index) => ({
  id: index + 1,
  step: index + 1,
  icon: img1,
  title: "Kiểm tra lối sống",
  detail:
    "Đây là bài kiểm tra nhằm tìm ra yếu tố nào đang cản trở sự tăng trưởng chiều cao thông qua bảng câu hỏi về hoạt động thể chất, thói quen ăn uống, tình trạng dinh dưỡng, thói quen ngủ nghỉ và mức độ căng thẳng.Sau khi tìm ra những yếu tố ức chế tăng trưởng này, nó được thiết kế để cải thiện chúng thông qua 1: Quản lý 1. Có mục đích.",
}));
