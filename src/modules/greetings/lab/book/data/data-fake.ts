import book1 from "@/assets/img/book/book1.png";

export const bookDropdown = [
  {
    label: "Tất cả",
    value: "",
  },
  {
    label: "Kines",
    value: "kines",
  },
  {
    label: "Dovision",
    value: "dovision",
  },
];

export const dataBook = [...Array(10)].map((_, index) => ({
  type: index % 2 ? "kines" : "dovision",
  title: "Giáo Dục Trí Tuệ Hội Tụ Sáng Tạo Do Vision",
  date: "2019.02.20",
  thumb: book1,
}));
