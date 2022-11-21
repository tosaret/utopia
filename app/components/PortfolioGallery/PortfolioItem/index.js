import Image from "next/image";

import styles from "./index.module.scss";

import imageUrl from "../../../../public/portfolio-img1.png";
import logoUrl from "../../../../public/portfolio-logo1.png";

const PortfolioItem = () => {
  return (
    <div className={styles.portfolioGallery}>
      <div className={styles.portfolioContainer}>
        <div className={styles.info}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>
              <Image src={logoUrl} width={46} height={46} alt="" />
              Sapiency
            </div>
            <div>
              <span className={styles.label}>Android</span>
              <span className={styles.label}>iOS</span>
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>
              Some very long and irrelevant motivational description that nobody
              will give a shit about but must be provided in order to keep the
              layout interesting.
            </p>
          </div>
        </div>
        <div className={styles.image}>
          <Image src={imageUrl} alt="" />
        </div>
      </div>
      <div className={styles.portfolioBottomBg}></div>
    </div>
  );
};

export default PortfolioItem;
