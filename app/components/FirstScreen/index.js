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
          <div className={styles.blurCircle} />
        </div>
      </section>
    </>
  );
};

export default FirstScreen;
