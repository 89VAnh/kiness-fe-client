// Import Swiper styles
import { Image } from "antd";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PaginationOptions } from "swiper/types";

import { dataCarousel } from "./data/data-fake";
import styles from "./scss/carousel.module.scss";

export default function Carousel(): JSX.Element {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 641);

  // const { data: dataSlides } = useSearchSlides({
  //   params: {},
  // });

  useEffect(() => {
    const handleResize = (e: any) => {
      const width = e.target.innerWidth;
      setIsMobile(width < 641);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span level={5} class="${className} bullet" title="${dataCarousel[index].title}">${dataCarousel[index].title}</span>`;
    },
  };

  return (
    <section>
      <Swiper
        modules={[Pagination, Autoplay]}
        loop
        speed={700}
        style={{ width: "100%" }}
        pagination={
          window.innerWidth > 742
            ? pagination
            : {
                dynamicBullets: true,
              }
        }
        className={window.innerWidth > 742 ? styles.swiperContainer : ""}
        autoplay={{
          delay: 3000,
        }}
      >
        {dataCarousel.map((item, index) => (
          <SwiperSlide key={index} style={{ background: "#fff" }}>
            <Image
              preview={false}
              src={isMobile ? item.small_image : item.big_image}
            />
          </SwiperSlide>
        ))}
        {/* {dataSlides?.data?.map((item: any, index: number) => (
          <SwiperSlide key={index} style={{ background: "#fff" }}>
            <Image
              preview={false}
              src={`/api/${isMobile ? item.image_small : item.image_big}`}
            />
          </SwiperSlide>
        ))} */}
      </Swiper>
    </section>
  );
}
