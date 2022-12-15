import classNames from "classnames";
import Hero from "./Hero";
import styles from "./index.module.scss";
import Navigation from "./Navigation";

const FirstScreen = ({
  active,
  changePage,
  menuTexts,
  heroTexts,
  lang,
  setLang,
}) => {
  return (
    <>
      <section className={styles.firstScreen}>
        <div className="container">
          <Navigation
            changePage={changePage}
            content={menuTexts}
            lang={lang}
            setLang={setLang}
          />
          <Hero
            animate={active}
            changePage={changePage}
            lang={lang}
            content={heroTexts}
          />
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
