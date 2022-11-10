import classNames from "classnames";
import Hero from "./Hero";
import styles from "./index.module.scss";
import Navigation from "./Navigation";

const FirstScreen = ({ active }) => {
  return (
    <>
      <section className={styles.firstScreen}>
        <div className="container">
          <Navigation />
          <Hero animate={active} />
          {active && (
            <div
              className={classNames(styles.blurCircle, {
                fadeInWithOpacity: active,
              })}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default FirstScreen;
