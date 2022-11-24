import { useState, useEffect } from "react";
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

  useEffect(() => {
    setCurrentItem(1);
  }, []);

  return (
    <div className={styles.portfolio}>
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
