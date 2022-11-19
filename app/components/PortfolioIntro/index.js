import Image from "next/image";
import PlayIcon from "../../../public/play-icon.svg";
import styles from "./index.module.scss";

const PortfolioIntro = () => {
  return (
    <section className={styles.portfolioIntro}>
      <div className={styles.background} />
      <div className={styles.intro}>
        <h2>Our Portfolio</h2>
        <p>
          <strong>Utopia</strong> is your backbone of creating your dream
          application. <br /> Here are some of the <strong>World Class</strong>{" "}
          products we are proud to be a part of.
        </p>
        <a href="#" className={styles.playIcon}>
          <Image src={PlayIcon} width={24} height={24} alt="" />
        </a>
      </div>
    </section>
  );
};

export default PortfolioIntro;
