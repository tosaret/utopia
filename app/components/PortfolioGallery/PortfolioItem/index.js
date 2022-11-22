import styles from "./index.module.scss";

const PortfolioItem = ({ item }) => {
  const {
    title,
    description,
    tags,
    tagsColor,
    backgroundGradient,
    logoUrl,
    imageUrl,
  } = item;

  return (
    <div className={styles.portfolioGallery}>
      <div className={styles.portfolioContainer}>
        <div className={styles.info}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>
              <img src={logoUrl} width={46} height={46} alt="" />
              {title}
            </div>
            <div>
              {tags.map((tag) => (
                <span
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
        style={{ background: backgroundGradient }}
        className={styles.portfolioBottomBg}
      ></div>
    </div>
  );
};

export default PortfolioItem;
