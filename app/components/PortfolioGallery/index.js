import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import classNames from "classnames";
import PortfolioItem from "./PortfolioItem";

import items from "./content.json";

import styles from "./index.module.scss";

const PortfolioGallery = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [animateIn, setAnimateIn] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [moveDirection, setMoveDirection] = useState("");

  var portfolioItems = [];
  for (var i in items) portfolioItems.push([i, items[i]]);

  const handleStartTransition = () => {
    setAnimateIn(false);
    setAnimateOut(true);

    setTimeout(() => {
      setAnimateOut(false);
      setAnimateIn(true);
    }, 500);
  };

  const handleDrag = (swiper) => {
    console.log(swiper.activeSlide);
    if (swiper.swipeDirection === "next") {
      setMoveDirection("next");
    }
    if (swiper.swipeDirection === "prev") {
      setMoveDirection("prev");
    }
  };

  return (
    <div className={styles.portfolio}>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        speed={600}
        onTransitionStart={() => handleStartTransition()}
        onSliderMove={(swiper) => handleDrag(swiper)}
        onTransitionEnd={() => setMoveDirection("")}
      >
        {portfolioItems.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive, isPrev, isNext }) => (
              <PortfolioItem
                item={item}
                animateIn={animateIn}
                animateOut={animateOut}
                active={isActive}
                isPrev={isPrev}
                isNext={isNext}
                moveDirection={moveDirection}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PortfolioGallery;
