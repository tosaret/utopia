import styles from "./index.module.scss";

const PortfolioIntro = () => {
  return (
    <section className={styles.portfolioIntro}>
      <div>
        <h2>Our Portfolio</h2>
        <p>
          <strong>Utopia</strong> is your backbone of creating your dream
          application. <br /> Here are some of the <strong>World Class</strong>{" "}
          products we are proud to be a part of.
        </p>
      </div>
    </section>
  );
};

export default PortfolioIntro;
