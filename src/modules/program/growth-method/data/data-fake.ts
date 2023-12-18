import img1 from "@/assets/img/program/ico_growth1.png";
import img2 from "@/assets/img/program/ico_growth2.png";
import img3 from "@/assets/img/program/ico_growth3.png";
import img4 from "@/assets/img/program/ico_growth4.png";

const imgs = {
  img1,
  img2,
  img3,
  img4,
};

export const dataNessProgram = [...Array(4)].map((_, index) => ({
  id: index + 1,
  title: "Dinh dưỡng",
  description: [
    "Kiểm tra khoáng chất dinh dưỡng tóc , kiểm tra thành phần cơ thể, kiểm tra lối sống",
    "Quản lý chế độ ăn uống, kiểm tra thói quen ăn uống và tập luyện để quản lý chất dinh dưỡng thiếu và thừa",
    "Tác dụng Tăng chiều cao và cải thiện tình trạng béo phì thông qua việc bổ sung dinh dưỡng cân bằng",
  ],
  img: imgs[`img${index + 1}` as keyof typeof imgs],
}));
