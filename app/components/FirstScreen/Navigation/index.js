import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "../LanguageSwitcher";
import styles from "./index.module.scss";

const Navigation = ({ changePage, content, lang, setLang }) => {
  const [menuDropdown, setMenuDropdown] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <label
          className={classNames(styles.menuToggle, {
            [styles.menuToggleOpen]: menuDropdown,
          })}
          onClick={() => setMenuDropdown(!menuDropdown)}
        >
          <span></span>
        </label>
        <nav className={classNames({ [styles.show]: menuDropdown })}>
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
