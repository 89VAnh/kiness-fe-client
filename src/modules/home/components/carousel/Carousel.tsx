// Import Swiper styles
import { Image } from "antd";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PaginationOptions } from "swiper/types";

import { dataCarousel } from "./data/data-fake";
import styles from "./scss/carousel.module.scss";

export default function Carousel(): JSX.Element {
  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span level={5} class="${className} bullet">${dataCarousel[index].title}</span>`;
    },
  };

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      loop
      style={{ width: "100%" }}
      pagination={pagination}
      className={styles.swiperContainer}
    >
      {dataCarousel.map((item) => (
        <SwiperSlide style={{ background: "#fff" }}>
          <Image preview={false} src={item.big_image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
