import classNames from "classnames";
import styles from "./index.module.scss";

const PortfolioItem = ({
  item,
  lang,
  animateOut,
  animateIn,
  isActive,
  isPrev,
  isNext,
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
  } = item[1];

  let itemTags = [];
  for (let i in tags) itemTags.push([tags[i]]);
  const convertedTags = itemTags[1][0].split(", ");

  return (
    <>
      <div
        className={classNames(styles.portfolioGallery, {
          [styles.animateOut]: animateOut && (isPrev || isNext),
          [styles.animateIn]: animateIn && isActive,
        })}
      >
        <div className={styles.portfolioContainer}>
          <div className={styles.info}>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>
                <img src={logoUrl[1]} alt="" />
              </h2>
              <div>
                {convertedTags.map((tag, index) => (
                  <span
                    key={index}
                    style={{ backgroundColor: tagsColor[1] }}
                    className={styles.label}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.imageMobile}>
              <img src={imageUrl[1]} alt="" />
            </div>
            <div className={styles.descriptionContainer}>
              <p className={styles.description}>{description[lang]}</p>
            </div>
          </div>
          <div className={styles.image}>
            <img src={imageUrl[1]} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioItem;
