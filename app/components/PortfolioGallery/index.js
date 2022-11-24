import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import classNames from "classnames";
import PortfolioItem from "./PortfolioItem";

import items from "./content.json";

import styles from "./index.module.scss";

const PortfolioGallery = () => {
  const [currentItem, setCurrentItem] = useState(1);
  const [newBgColor, setNewBgColor] = useState("");
  const [animateIn, setAnimateIn] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  var portfolioItems = [];
  for (var i in items) portfolioItems.push([i, items[i]]);

  const item = items[currentItem];

  const handlePagination = (index) => {
    const nextItem = items[index];
    setNewBgColor(nextItem.backgroundGradient);

    setAnimateIn(false);
    setAnimateOut(true);

    setTimeout(() => {
      setAnimateOut(false);
      setAnimateIn(true);
      setCurrentItem(parseInt(index));

      setTimeout(() => {
        setAnimateOut(false);
        setAnimateIn(false);
      }, 700);
    }, 900);
  };

  const handleSwipeLeft = (currentItem) => {
    if (currentItem === portfolioItems.length) {
      handlePagination(1);
    }
    handlePagination(currentItem + 1);
  };

  const handleSwipeRight = (currentItem) => {
    if (currentItem === 1) {
      console.log(portfolioItems.length);
      handlePagination(portfolioItems.length);
    }
    handlePagination(currentItem - 1);
  };

  useEffect(() => {
    setCurrentItem(1);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipeLeft(currentItem),
    onSwipedRight: () => handleSwipeRight(currentItem),
    trackMouse: true,
  });

  return (
    <div {...handlers} className={styles.portfolio}>
      <PortfolioItem
        item={item}
        animateIn={animateIn}
        animateOut={animateOut}
        newBgColor={newBgColor}
      />
      <div className={styles.pagination}>
        {portfolioItems.map((item, index) => (
          <button
            className={classNames({
              [styles.active]: currentItem === parseInt(item[0]),
            })}
            key={index}
            onClick={() => handlePagination(item[0])}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGallery;
