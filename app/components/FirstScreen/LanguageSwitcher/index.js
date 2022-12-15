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
        {lang === 1 ? "EN" : lang === 2 ? "PL" : "DE"} <span>&#9662;</span>
      </a>
      {showLangDropdown && (
        <div className={styles.dropdown}>
          <Link href="" onClick={() => handleLangChange(1)}>
            EN
          </Link>
          <Link href="" onClick={() => handleLangChange(2)}>
            PL
          </Link>
          <Link href="" onClick={() => handleLangChange(3)}>
            DE
          </Link>
        </div>
      )}
    </div>
  );
};
export default LanguageSwitcher;
