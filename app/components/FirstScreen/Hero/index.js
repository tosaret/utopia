import ReactHtmlParser from "react-html-parser";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import HeroImageSrc from "../../../../public/hero-mobile.png";
import styles from "./index.module.scss";

const Hero = ({ animate, changePage, lang, content }) => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.image}>
          <Image
            className="fadeUpMobilePhone"
            src={HeroImageSrc}
            width={488}
            alt=""
            priority={true}
          />
        </div>
        <div className={styles.text}>
          <h1>
            utopia
            <span className="fadeIn">&#9679;</span>
          </h1>
          <h2 className={classNames({ typing: animate })}>
            {ReactHtmlParser(content.slogan[lang])}
          </h2>
          <div className={styles.readMore}>
            <Link href="" onClick={() => changePage(1)}>
              {ReactHtmlParser(content.readMore[lang])}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
