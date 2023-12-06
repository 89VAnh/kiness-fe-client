import img1 from "@/assets/img/advice/PC_gangnam_01.png";

export const dataEx = [...Array(10)].map((_, index) => ({
  id: index + 1,
  title: "Thanh xuân",
  phone: "02-558-2758",
  address: "Tầng 3, Tòa nhà Chowon, 775-2 Yeoksam 2-dong, Gangnam-gu, Seoul",
  open: "Thứ Ba-Thứ Sáu 14:00-22:00 / Cuối tuần 09:00-17:00",
  close: "Đóng cửa vào Thứ Hai",
  thumb: img1,
}));
