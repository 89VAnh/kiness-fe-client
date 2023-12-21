import autumn from "@/assets/img/info-growth/img_autumn.png";
import spring from "@/assets/img/info-growth/img_spring.png";
import summer from "@/assets/img/info-growth/img_summer.png";
import winter from "@/assets/img/info-growth/img_winter.png";

export const dataHeight = [...Array(5)].map((_, index) => ({
  id: index + 1,
  title:
    "Hormon tăng trưởng là một loại hormone được tiết ra từ tuyến yên trước có kích thước bằng hạt đậu nằm dưới não.",
  description: [
    "Nó được làm từ protein và chức năng của nó là thúc đẩy tăng trưởng chiều dài xương và tăng trưởng cơ bắp trong thời niên thiếu và tăng trưởng.",
    "Sau khi trưởng thành trên 25 tuổi, mô liên kết (dây chằng) và collagen tăng lên thay vì các sợi cơ co bóp, đồng thời cùng với sự gia tăng sức mạnh cơ bắp, quá trình phân hủy mỡ được thúc đẩy.",
    "Bằng cách tăng mật độ xương ở cột sống, nó ngăn ngừa loãng xương và giảm nguy cơ gãy xương.",
  ],
}));

export const listWeather = [
  {
    id: 1,
    img: spring,
    label: "Mùa xuân",
    title: "Các đĩa tăng trưởng được mở.",
    description:
      "Trước tuổi dậy thì, nếu con bạn cao thêm 4 đến 5 cm trong một năm thì bé sẽ lùn đi, vì vậy bạn nên duy trì thói quen sinh hoạt hợp lý và cố gắng tăng thêm 6 đến 7 cm mỗi năm.",
  },
  {
    id: 2,
    img: summer,
    label: "Mùa hè",
    title: "Các đĩa tăng trưởng được mở.",
    description:
      "Đây là thời điểm bạn bước vào tuổi dậy thì và chiều cao của bạn tăng trưởng nhanh chóng, giai đoạn này kéo dài khoảng hai năm. Nó có thể phát triển trong khoảng 10cm mỗi năm nên bạn cần chú ý hàng tháng xem nó có phát triển tốt không. Nếu nỗ lực phát triển tốt trong giai đoạn này, bạn có thể tránh được nỗi lo về vóc dáng nhỏ bé của mình.",
  },
  {
    id: 3,
    img: autumn,
    label: "Mùa thu",
    title: "Tấm tăng trưởng đóng lại.",
    description:
      "Bắt đầu từ giữa tuổi thiếu niên, sự phát triển đột ngột chậm lại, kèm theo kinh nguyệt ở phụ nữ và xuất hiện lông nách ở nam giới. Điều này là do sự tiết ra nội tiết tố nam testosterone và nội tiết tố nữ estrogen, tấm tăng trưởng sẽ đóng lại hoàn toàn sau khoảng hai năm. Trong giai đoạn này, bạn cần nỗ lực cao thêm 10cm trong 2 năm tới.",
  },
  {
    id: 4,
    img: winter,
    label: "Mùa đông",
    title: "Tấm tăng trưởng đóng lại.",
    description:
      "Ngay cả sau khi đĩa tăng trưởng đóng lại, nếu bạn tiếp tục quản lý nó cho đến khoảng 20 tuổi, chiều cao của bạn vẫn có thể tăng thêm khoảng 3 đến 5 cm.",
  },
];
