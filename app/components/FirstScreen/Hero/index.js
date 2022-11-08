import Image from "next/image";
import styles from "./index.module.scss";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.image}>
          <Image src="/hero.png" width={847} height={934} />
        </div>
        <div className={styles.text}>
          <h1>
            utopia<span>&#9679;</span>
          </h1>
          <h2>
            design your perfect <strong>world</strong>
          </h2>
        </div>
      </div>
    </>
  );
};
export default Hero;
