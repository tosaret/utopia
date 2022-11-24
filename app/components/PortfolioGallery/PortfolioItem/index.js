import classNames from "classnames";
import styles from "./index.module.scss";

const PortfolioItem = ({ item, animateOut, animateIn, newBgColor }) => {
  const {
    title,
    description,
    tags,
    tagsColor,
    backgroundGradient,
    logoUrl,
    imageUrl,
  } = item;

  console.log(newBgColor);

  return (
    <div
      className={classNames(styles.portfolioGallery, {
        [styles.animateOut]: animateOut,
        [styles.animateIn]: animateIn,
      })}
    >
      <div className={styles.portfolioContainer}>
        <div className={styles.info}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>
              <img src={logoUrl} width={46} height={46} alt="" />
              {title}
            </div>
            <div>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  style={{ backgroundColor: tagsColor }}
                  className={styles.label}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
        <div className={styles.image}>
          <img src={imageUrl} alt="" />
        </div>
      </div>
      <div
        style={{ background: newBgColor }}
        className={styles.portfolioBottomWrapper}
      >
        <div
          style={{ background: backgroundGradient }}
          className={styles.portfolioBottomBg}
        ></div>
      </div>
    </div>
  );
};

export default PortfolioItem;
