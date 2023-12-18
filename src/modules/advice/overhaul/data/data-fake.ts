import img1 from "@/assets/img/advice/img_overhaul01.png";

export const dataOverhaulBranch = {
  title: "Trung tâm kiểm tra Kines",
  description:
    "Chúng tôi phân tích các điều kiện môi trường phát triển của con mình thông qua bài kiểm tra tăng trưởng chi tiết có thể xác định nguyên nhân gây ra tầm vóc thấp bé và hình thành một chương trình quản lý toàn diện về tăng trưởng chiều cao, tư thế đúng, béo phì và dậy thì sớm.",
  branches: [
    {
      title: "Đặt lịch kiểm tra tại văn phòng chính Hà Nội",
      url: "",
      color:
        "linear-gradient(0deg, rgba(2,180,168,1) 0%, rgba(11,201,189,1) 100%)",
    },
    {
      title: "Đặt lịch kiểm tra tại văn phòng chính Đà Nẵng",
      url: "",
      color:
        "linear-gradient(0deg, rgba(255,162,39,1) 0%, rgba(255,203,83,1) 100%)",
    },
    {
      title: "Đặt lịch kiểm tra tại văn phòng chính TP. Hồ Chí Minh",
      url: "",
      color:
        "linear-gradient(0deg, rgba(0,151,216,1) 0%, rgba(84,197,246,1) 100%)",
    },
  ],
};

export const dataOverhaul = [...Array(10)].map((_, index) => ({
  step: index + 1,
  title: "Kiểm tra thành phần cơ thể",
  description:
    "Đây là bài kiểm tra nhằm tìm ra yếu tố nào đang cản trở sự tăng trưởng chiều cao thông qua bảng câu hỏi về hoạt động thể chất, thói quen ăn uống, tình trạng dinh dưỡng, thói quen ngủ nghỉ và mức độ căng thẳng.Sau khi tìm ra những yếu tố ức chế tăng trưởng này, nó được thiết kế để cải thiện chúng thông qua 1: Quản lý 1. Có mục đích.",
  thumb: img1,
}));
