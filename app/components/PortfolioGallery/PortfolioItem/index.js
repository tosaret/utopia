import classNames from "classnames";
import styles from "./index.module.scss";

const PortfolioItem = ({
  item,
  animateOut,
  animateIn,
  active,
  isPrev,
  isNext,
  moveDirection,
}) => {
  const {
    title,
    description,
    tags,
    tagsColor,
    backgroundImage,
    backgroundGradient,
    logoUrl,
    imageUrl,
    prevBgColor,
    nextBgColor,
  } = item[1];

  var itemTags = [];
  for (var i in tags) itemTags.push([tags[i]]);

  return (
    <div
      className={classNames(styles.portfolioGallery, {
        [styles.animateOut]: animateOut && (isPrev || isNext),
        [styles.animateIn]: animateIn && active,
      })}
    >
      <div
        className={styles.upperBackground}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className={styles.portfolioContainer}>
        <div className={styles.info}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>
              <img src={logoUrl} width={46} height={46} alt="" />
              {title}
            </div>
            <div>
              {itemTags.map((tag, index) => (
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
          <div className={styles.imageMobile}>
            <img src={imageUrl} alt="" />
          </div>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
        <div className={styles.image}>
          <img src={imageUrl} alt="" />
        </div>
      </div>
      <div className={styles.portfolioBottomWrapper}>
        <div
          style={{ background: backgroundGradient }}
          className={styles.portfolioBottomBg}
        >
          {moveDirection === "prev" && (
            <div
              style={{ backgroundColor: prevBgColor }}
              className={styles.bgLeft}
            ></div>
          )}
          {moveDirection === "next" && (
            <div
              style={{ backgroundColor: nextBgColor }}
              className={styles.bgRight}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
