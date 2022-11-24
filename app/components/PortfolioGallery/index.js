import { useState, useEffect } from "react";
import classNames from "classnames";
import PortfolioItem from "./PortfolioItem";

import items from "./content.json";

import styles from "./index.module.scss";

const PortfolioGallery = () => {
  const [currentItem, setCurrentItem] = useState(1);

  var portfolioItems = [];
  for (var i in items) portfolioItems.push([i, items[i]]);

  const item = items[currentItem];

  const handlePagination = (index) => {
    setCurrentItem(parseInt(index));
  };

  useEffect(() => {
    setCurrentItem(1);
  }, []);

  return (
    <div className={styles.portfolio}>
      <PortfolioItem item={item} />
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
