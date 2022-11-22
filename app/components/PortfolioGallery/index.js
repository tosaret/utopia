import { useState, useEffect } from "react";
import PortfolioItem from "./PortfolioItem";

import items from "./content.json";

import styles from "./index.module.scss";

const PortfolioGallery = () => {
  // var portfolioItems = [];
  // for (var i in items) portfolioItems.push([i, items[i]]);
  // console.log(portfolioItems);

  const [currentItem, setCurrentItem] = useState(1);

  const item = items[currentItem];

  return <PortfolioItem item={item} />;
};

export default PortfolioGallery;
