import classNames from "classnames";
import Hero from "./Hero";
import styles from "./index.module.scss";
import Navigation from "./Navigation";

const FirstScreen = ({ active, changePage }) => {
  return (
    <>
      <section className={styles.firstScreen}>
        <div className="container">
          <Navigation changePage={changePage} />
          <Hero animate={active} changePage={changePage} />
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
