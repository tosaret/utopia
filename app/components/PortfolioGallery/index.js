import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import classNames from "classnames";
import PortfolioItem from "./PortfolioItem";

import styles from "./index.module.scss";

const PortfolioGallery = ({ content, lang }) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [animateIn, setAnimateIn] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [moveDirection, setMoveDirection] = useState("");

  let portfolioItems = [];
  for (let i in content) portfolioItems.push([i, content[i]]);

  const handleStartTransition = () => {
    setAnimateIn(false);
    setAnimateOut(true);

    setTimeout(() => {
      setAnimateOut(false);
      setAnimateIn(true);
    }, 500);
  };

  const handleDrag = (swiper) => {
    setMoveDirection(swiper.swipeDirection);
  };

  return (
    <div className={styles.portfolio}>
      <Swiper
        modules={[EffectFade, Pagination]}
        pagination={{ clickable: false }}
        preventInteractionOnTransition={true}
        loop={true}
        effect={"fade"}
        speed={500}
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
                lang={lang}
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
