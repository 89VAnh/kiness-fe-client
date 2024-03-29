// Import Swiper styles
import { Image } from "antd";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PaginationOptions } from "swiper/types";

import { BASE_URL, ERROR_TIMEOUT } from "@/constant/config";
import { useSearchSlides } from "@/loader/slide.loader";

import styles from "./scss/carousel.module.scss";

export default function Carousel(): JSX.Element {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 641);

  const { data: dataSlides, refetch } = useSearchSlides({
    params: {},
    config: {
      onSuccess: (data) => {
        if (data.message === ERROR_TIMEOUT) {
          refetch();
        }
      },
    },
  });

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
      return `<span level={5} class="${className} bullet" title="${dataSlides?.data?.[index].slide_caption}">${dataSlides?.data?.[index].slide_caption}</span>`;
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
        {dataSlides?.data?.map((item: any, index: number) => (
          <SwiperSlide key={index} style={{ background: "#fff" }}>
            <Image
              preview={false}
              src={`${BASE_URL}/${
                isMobile ? item.image_small : item.image_big
              }`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
