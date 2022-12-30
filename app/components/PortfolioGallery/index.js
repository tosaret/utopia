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
  const [prevSlide, setPrevSlide] = useState(0);
  const [bgOpacity, setBgOpacity] = useState(1);
  const [animateIn, setAnimateIn] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [moveDirection, setMoveDirection] = useState("");

  let portfolioItems = [];
  for (let i in content) portfolioItems.push([i, content[i]]);

  const handleStartTransition = () => {
    setAnimateIn(false);
    setAnimateOut(true);
  };

  const handleEndTransition = (swiper) => {
    setActiveSlide(swiper.realIndex);
    setBgOpacity(1);
    setMoveDirection("");
    setAnimateOut(false);
    setAnimateIn(true);
  };

  const handleDrag = (swiper) => {
    setMoveDirection(swiper.swipeDirection);
    nextSlideIndex(swiper.realIndex);
    countBgOpacity(swiper.touches.diff);
  };

  const countBgOpacity = (diff) => {
    const absDiff = Math.abs(diff);
    const vw = window.innerWidth;
    setBgOpacity(1 - absDiff / vw);
  };

  const nextSlideIndex = (index) => {
    if (moveDirection === "next") {
      if (portfolioItems.length - 1 === activeSlide) {
        setPrevSlide(0);
      } else {
        setPrevSlide(index + 1);
      }
    }
    if (moveDirection === "prev") {
      if (activeSlide === 0) {
        setPrevSlide(portfolioItems.length - 1);
      } else {
        setPrevSlide(index - 1);
      }
    }
  };

  return (
    <div className={styles.portfolio}>
      {active && (
        <>
          <div
            className={classNames(styles.upperBackgroundNext)}
            style={{
              backgroundImage: `url(${portfolioItems[prevSlide][1].backgroundImage[1]})`,
            }}
          ></div>
          <div
            className={classNames(styles.upperBackground, {
              [styles.animateIn]: animateIn && moveDirection === "",
              [styles.animateOut]: animateOut,
            })}
            style={{
              opacity: bgOpacity,
              backgroundImage: `url(${portfolioItems[activeSlide][1].backgroundImage[1]})`,
            }}
          />
        </>
      )}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        preventInteractionOnTransition={true}
        loop={true}
        speed={500}
        longSwipesMs={30000}
        longSwipesRatio={0.1}
        onTransitionStart={() => handleStartTransition()}
        onTransitionEnd={(swiper) => handleEndTransition(swiper)}
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
        <>
          <div
            className={classNames(styles.portfolioBottomNextBg)}
            style={{
              background: portfolioItems[prevSlide][1].backgroundGradient[1],
            }}
          ></div>
          <div
            className={classNames(styles.portfolioBottomBg, {
              [styles.animateIn]: animateIn && moveDirection === "",
              [styles.animateOut]: animateOut,
            })}
            style={{
              opacity: bgOpacity,
              background: portfolioItems[activeSlide][1].backgroundGradient[1],
            }}
          ></div>
        </>
      )}
    </div>
  );
};

export default PortfolioGallery;
