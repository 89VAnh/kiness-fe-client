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

export const listLevels = [
  { value: "Mẫu giáo", label: "Mẫu giáo" },
  { value: "Lớp 1", label: "Lớp 1" },
  { value: "Lớp 2", label: "Lớp 2" },
  { value: "Lớp 3", label: "Lớp 3" },
  { value: "Lớp 4", label: "Lớp 4" },
  { value: "Lớp 5", label: "Lớp 5" },
  { value: "Lớp 6", label: "Lớp 6" },
  { value: "Lớp 7", label: "Lớp 7" },
  { value: "Lớp 8", label: "Lớp 8" },
  { value: "Lớp 9", label: "Lớp 9" },
  { value: "Lớp 10", label: "Lớp 10" },
  { value: "Lớp 11", label: "Lớp 11" },
  { value: "Lớp 12", label: "Lớp 12" },
];
