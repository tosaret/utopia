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

  return (
    <div className={styles.portfolio}>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        speed={600}
        onSlideChangeTransitionStart={() => handleStartTransition()}
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
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PortfolioGallery;
