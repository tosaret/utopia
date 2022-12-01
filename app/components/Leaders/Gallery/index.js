import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useRef, useEffect } from "react";
import classNames from "classnames";

import "swiper/css/pagination";
import styles from "./index.module.scss";

import items from "../content.json";

const LeadersGallery = ({ initialSlide }) => {
  const swiperRef = useRef();

  let leadersItems = [];
  for (let i in items) leadersItems.push([i, items[i]]);

  useEffect(() => {
    swiperRef.current.slideTo(initialSlide);
  }, [initialSlide]);

  return (
    <div className={styles.leadersGallery}>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        preventInteractionOnTransition={true}
        slidesPerView={"auto"}
        speed={800}
        longSwipesMs={30000}
        longSwipesRatio={0.1}
        initialSlide={initialSlide}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {leadersItems.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div
              className={classNames(styles.item, {
                [styles.textRight]: index % 2 !== 0,
              })}
            >
              <div className={styles.name}>{item[1].lastName}</div>
              <div className={styles.name}>{item[1].firstName}</div>
              <div className={styles.descImage}>
                <p>{item[1].text}</p>
                <div className={styles.image}>
                  <img src={item[1].photoUrl} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LeadersGallery;
