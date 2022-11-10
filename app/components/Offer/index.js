import classNames from "classnames";
import { useEffect } from "react";
import styles from "./index.module.scss";

const Offer = ({ active }) => {
  return (
    <section className={styles.offer}>
      <div className={styles.text}>
        <h2>
          What we <span>Offer</span>
        </h2>
        <p>
          Integration with the cloud which will help your project minimize
          development and operational costs. Integration with the cloud which
          will help your project minimize development and operational costs.
        </p>
      </div>
      <div
        className={classNames(styles.menu, {
          fadeIn: active,
        })}
      >
        <a href="#">Web</a>
        <a href="#">Mobile</a>
        <a href="#">Consulting</a>
        <a href="#">Services</a>
        <a href="#">Cloud</a>
        <a href="#">Design</a>
      </div>
    </section>
  );
};

export default Offer;
