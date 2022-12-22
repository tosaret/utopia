import ReactHtmlParser from "react-html-parser";
import Image from "next/image";
import Link from "next/link";
import PlayIcon from "../../../public/play-icon.svg";
import styles from "./index.module.scss";

const PortfolioIntro = ({ active, changePage, content, lang }) => {
  return (
    <section className={styles.portfolioIntro}>
      {active && <div className={styles.background} />}
      <div className={styles.intro}>
        <h2>{ReactHtmlParser(content.title[lang])}</h2>
        <p>{ReactHtmlParser(content.text[lang])}</p>
        <Link href="" onClick={() => changePage(3)} className={styles.playIcon}>
          <Image src={PlayIcon} width={24} height={24} alt="" />
        </Link>
      </div>
    </section>
  );
};

export default PortfolioIntro;
