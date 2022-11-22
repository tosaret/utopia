import { useState, useEffect } from "react";
import PortfolioItem from "./PortfolioItem";

import items from "./content.json";

import styles from "./index.module.scss";

const PortfolioGallery = () => {
  const [currentItem, setCurrentItem] = useState(1);

  const item = items[currentItem];

  return <PortfolioItem item={item} />;
};

export default PortfolioGallery;
