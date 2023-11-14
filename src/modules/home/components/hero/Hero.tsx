import { Carousel, Image, Skeleton } from "antd";
import React from "react";

import { useGetSlides } from "@/loader/slide.loader";

import styles from "./scss/hero.module.scss";

export default function Hero(): JSX.Element {
  const slides = useGetSlides({});

  return (
    <div className={styles.container}>
      {slides.isLoading ? (
        <Skeleton.Image active style={{ height: 1000, width: "100vw" }} />
      ) : slides.data.message ? (
        <></>
      ) : (
        <Carousel
          autoplaySpeed={3000}
          draggable
          style={{ position: "relative" }}
        >
          {slides.data?.data?.map((slide: any) => (
            <React.Fragment key={slide.slide_id}>
              <Image
                wrapperClassName={styles.img}
                className={styles.img}
                preview={false}
                src={"/api/" + slide.image}
                // src={BASE_URL + "/" + slide.image}
              />
              <div className={styles.caption}>
                <div
                  dangerouslySetInnerHTML={{ __html: slide.slide_caption }}
                ></div>
              </div>
            </React.Fragment>
          ))}
        </Carousel>
      )}
    </div>
  );
}
