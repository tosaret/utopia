import Image from "next/image";
import classNames from "classnames";
import styles from "./index.module.scss";

const Hero = ({ animate }) => {
  return (
    <>
      <div className={styles.hero}>
        <div className={`fadeUp ${styles.image}`}>
          <Image
            src="/hero.png"
            width={847}
            height={934}
            alt=""
            priority={true}
          />
        </div>
        <div className={styles.text}>
          <h1>
            utopia
            <span className="fadeLeft">&#9679;</span>
          </h1>
          <h2 className={classNames({ typing: animate })}>
            design your perfect <strong>world</strong>
          </h2>
        </div>
      </div>
    </>
  );
};
export default Hero;
