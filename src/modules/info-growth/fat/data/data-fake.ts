import img2 from "@/assets/img/info-growth/img_obesity2.png";
import img3 from "@/assets/img/info-growth/img_obesity3.png";
import img1 from "@/assets/img/info-growth/img_obesity.png";

const imgs = [img1, img2, img3];

export const dataFat = imgs.map((img, index) => ({
  id: index + 1,
  title: "Có nhất thiết phải béo mới béo phì?",
  description:
    "Những đứa trẻ có vẻ béo phì chắc chắn sẽ béo phì vì tỷ lệ mỡ trong cơ thể của chúng cao hơn nhiều, bất kể chúng có bao nhiêu cơ bắp.Tuy nhiên, ngay cả những đứa trẻ có vẻ gầy cũng có thể bị béo phì. Chúng thuộc loại béo phì gầy, khối lượng cơ ít và tỷ lệ mỡ trong cơ thể cao, những đứa trẻ này cũng có thể mắc các bệnh hoặc các vấn đề liên quan đến béo phì nên chúng ta phải cẩn thận.",
  img,
}));
