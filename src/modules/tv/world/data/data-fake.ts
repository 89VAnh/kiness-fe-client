import img from "@/assets/img/tv/mqdefault2.jpg";

export const dataTvWorld = [...Array(9)].map((_, index) => ({
  id: index + 1,
  thumb: img,
  caption:
    "Sự hỗ trợ của Phòng khám Tăng trưởng kiness dành cho thanh niên đào thoát Bắc Triều Tiên",
  video_url: "https://www.youtube.com/embed/BM27OdI2P1E?si=4NVMzyd3J8yxL0Rh",
}));
