import { useEffect, useState } from "react";
import Hero from "./Hero";
import styles from "./index.module.scss";
import Navigation from "./Navigation";

const FirstScreen = ({ active }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    active && setAnimate(true);
    return () => {
      setAnimate(false);
    };
  }, [active]);

  return (
    <>
      <section className={styles.firstScreen}>
        <div className="container">
          <Navigation />
          <Hero animate={animate} />
          <div className={styles.blurCircle} />
        </div>
      </section>
    </>
  );
};

export default FirstScreen;
