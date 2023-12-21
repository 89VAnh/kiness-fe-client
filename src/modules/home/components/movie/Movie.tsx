import { Carousel, Typography } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

import hotImg from "@/assets/img/others/main_ico_hot.png";
import newImg from "@/assets/img/others/main_ico_new.png";
import { ERROR_TIMEOUT } from "@/constant/config";
import { useSearchVideos } from "@/loader/video.loader";
import { IVideo } from "@/models/video";
import DivTransition from "@/modules/shared/transition/DivTransition";
import { TV_LOCAL_URL, TV_WORLD_URL } from "@/urls";
import { extractVideoId } from "@/utils/format-string";

import styles from "./scss/movie.module.scss";

export default function Movie(): JSX.Element {
  const [hotVideo, setHotVideo] = useState<IVideo>();

  const videoLocalsQuery = useSearchVideos({
    params: {
      is_foreign: 0,
    },
    config: {
      onSuccess: (data) => {
        if (data.message === ERROR_TIMEOUT) {
          videoLocalsQuery.refetch();
        }
        if (data.success) setHotVideo(data.data?.data?.[0]);
      },
    },
  });

  function getThumbnail(video_link: string) {
    const videoId = extractVideoId(video_link);

    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

    return thumbnailUrl;
  }

  return (
    <section className={styles.movieContainer}>
      <div className="inner">
        <div className={styles.titleWrap}>
          <DivTransition className={styles.mainTitle}>
            <Typography.Title level={2} className={styles.title}>
              <span style={{ display: "block" }}>Xem</span>
              <span className="font-mint">
                các video liên quan đến tăng trưởng
              </span>
              <span> từ Trung tâm Tăng trưởng Kines.</span>
            </Typography.Title>
            <Typography.Paragraph>
              <span>
                Con tôi ngày càng cao hơn, Trung tâm Tăng trưởng Kiness
              </span>
            </Typography.Paragraph>
          </DivTransition>
        </div>
      </div>

      <div className={`inner ${styles.movie}`}>
        <div className={styles.movieLeft}>
          <div className={styles.movieTitle}>
            <span>
              <img src={hotImg} alt="hot-img" />
            </span>
            <Typography.Text strong>Video phổ biến</Typography.Text>
          </div>

          <div className={styles.movieBox}>
            {/* <iframe
              src="https://www.youtube.com/embed/KMpMnDyxWtc?si=5sJ7aPsmDkNDwvdE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            ></iframe> */}
            <iframe
              src={`https://www.youtube.com/embed/${extractVideoId(
                hotVideo?.video_link + "",
              )}?autoplay=0`}
              title={hotVideo?.video_name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            ></iframe>
          </div>
          <div className={styles.textBox}>
            <Link to={TV_WORLD_URL}>
              <div>
                <Typography.Title
                  level={4}
                  title="Con tôi ngày càng cao hơn, Trung tâm Tăng trưởng Kiness"
                >
                  Con tôi ngày càng cao hơn, Trung tâm Tăng trưởng Kiness
                </Typography.Title>
                <p>
                  Tại Trung tâm Tăng trưởng Chiều cao Kines, hãy phát triển
                  chiều cao, cải thiện tư thế của bạn và thậm chí thoát khỏi
                  tình trạng chậm trưởng thành và béo phì!
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.movieRight}>
          <div className={styles.movieTitle}>
            <span>
              <img src={newImg} alt="new-img" />
            </span>
            <Typography.Text strong>Những video mới nhất</Typography.Text>
          </div>

          <ul>
            <Carousel
              vertical={true}
              className={styles.slide}
              slidesToShow={3}
              dots={false}
              arrows
              autoplay
              speed={1500}
              draggable={false}
              nextArrow={<button>Next</button>}
              prevArrow={<button>Prev</button>}
            >
              {videoLocalsQuery.data?.data?.data?.map((item: IVideo) => (
                <li key={item.video_id}>
                  <Link to={TV_LOCAL_URL}>
                    <div className={styles.slideImg}>
                      <img
                        style={{ width: "100%", height: 120 }}
                        src={getThumbnail(item.video_link)}
                        alt={item.video_name}
                      />
                    </div>
                    <div className={styles.slideText}>
                      <p>{item.video_name}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </Carousel>
          </ul>
        </div>
      </div>

      <div className="inner">
        <Link to={TV_LOCAL_URL} className="btn-link btn-mint">
          Đi đến video
        </Link>
      </div>
    </section>
  );
}
