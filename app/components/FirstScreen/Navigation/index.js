import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher";
import styles from "./index.module.scss";

const Navigation = ({ changePage, content, lang, setLang }) => {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <Link href="" onClick={() => changePage(1)}>
            {content.offer[lang]}
          </Link>
          <Link href="" onClick={() => changePage(2)}>
            {content.portfolio[lang]}
          </Link>
          <Link href="" onClick={() => changePage(4)}>
            {content.about[lang]}
          </Link>
          <Link href="" onClick={() => changePage(5)}>
            {content.contact[lang]}
          </Link>
        </nav>
      </header>
      <LanguageSwitcher setLang={setLang} lang={lang} />
    </>
  );
};
export default Navigation;
