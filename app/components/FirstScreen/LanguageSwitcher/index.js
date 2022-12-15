import Link from "next/link";
import { useState } from "react";
import styles from "./index.module.scss";

const LanguageSwitcher = ({ lang, setLang }) => {
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const handleLangChange = (id) => {
    setLang(id);
    setShowLangDropdown(false);
  };

  return (
    <div className={styles.langSwitcher}>
      <a onClick={() => setShowLangDropdown(!showLangDropdown)}>
        {lang === 0 ? "EN" : lang === 1 ? "PL" : "DE"} <span>&#9662;</span>
      </a>
      {showLangDropdown && (
        <div className={styles.dropdown}>
          <Link href="" onClick={() => handleLangChange(0)}>
            EN
          </Link>
          <Link href="" onClick={() => handleLangChange(1)}>
            PL
          </Link>
          <Link href="" onClick={() => handleLangChange(2)}>
            DE
          </Link>
        </div>
      )}
    </div>
  );
};
export default LanguageSwitcher;
