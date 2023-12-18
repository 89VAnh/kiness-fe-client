import img from "@/assets/img/tv/mqdefault.jpg";

export const dataTvLocal = [...Array(9)].map((_, index) => ({
  id: index + 1,
  thumb: img,
  caption: "Con tôi ngày càng cao hơn, Trung tâm Tăng trưởng Kines",
  video_url: "https://www.youtube.com/embed/KMpMnDyxWtc?si=PJ0-uPd2EJvLbvjv",
}));
