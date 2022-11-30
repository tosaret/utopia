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

  let portfolioItems = [];
  for (let i in items) portfolioItems.push([i, items[i]]);

  const handleStartTransition = () => {
    setAnimateIn(false);
    setAnimateOut(true);

    setTimeout(() => {
      setAnimateOut(false);
      setAnimateIn(true);
      setMoveDirection("");
    }, 500);
  };

  const handleDrag = (swiper) => {
    setMoveDirection(swiper.swipeDirection);
  };

  return (
    <div className={styles.portfolio}>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: false }}
        preventInteractionOnTransition={true}
        loop={true}
        speed={800}
        watchSlidesProgress={true}
        longSwipesMs={30000}
        longSwipesRatio={0.1}
        onTransitionStart={() => handleStartTransition()}
        onSetTranslate={(swiper) => handleDrag(swiper)}
      >
        {portfolioItems.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive, isPrev, isNext }) => (
              <PortfolioItem
                item={item}
                animateIn={animateIn}
                animateOut={animateOut}
                isActive={isActive}
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
