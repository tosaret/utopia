import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import classNames from "classnames";
import PortfolioItem from "./PortfolioItem";

import styles from "./index.module.scss";

const PortfolioGallery = ({ active, content, lang }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [animateIn, setAnimateIn] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [moveDirection, setMoveDirection] = useState("");

  let portfolioItems = [];
  for (let i in content) portfolioItems.push([i, content[i]]);

  const handleStartTransition = (swiper) => {
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
      {active && (
        <div
          className={classNames(styles.upperBackground, {
            [styles.animateIn]: animateIn,
            [styles.animateOut]: animateOut,
          })}
          style={{
            backgroundImage: `url(${portfolioItems[activeSlide][1].backgroundImage[1]})`,
          }}
        />
      )}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: false }}
        preventInteractionOnTransition={true}
        loop={true}
        speed={500}
        longSwipesMs={30000}
        longSwipesRatio={0.1}
        onTransitionStart={(swiper) => handleStartTransition(swiper)}
        onTransitionEnd={(swiper) => setActiveSlide(swiper.realIndex)}
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
      {active && (
        <div
          className={classNames(styles.portfolioBottomBg, {
            [styles.animateIn]: animateIn,
            [styles.animateOut]: animateOut,
          })}
          style={{
            backgroundImage:
              portfolioItems[activeSlide][1].backgroundGradient[1],
          }}
        ></div>
      )}
    </div>
  );
};

export default PortfolioGallery;
