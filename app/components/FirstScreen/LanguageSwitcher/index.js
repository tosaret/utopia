import Link from "next/link";
import { useState } from "react";
import styles from "./index.module.scss";

const LanguageSwitcher = ({ lang }) => {
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  return (
    <div className={styles.langSwitcher}>
      <a onClick={() => setShowLangDropdown(!showLangDropdown)}>
        {lang === 1 ? "EN" : lang === 2 ? "PL" : "DE"} <span>&#9662;</span>
      </a>
      {showLangDropdown && (
        <div className={styles.dropdown}>
          <Link href="/">EN</Link>
          <Link href="/pl">PL</Link>
          <Link href="/de">DE</Link>
        </div>
      )}
    </div>
  );
};
export default LanguageSwitcher;
