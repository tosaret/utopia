import { useState } from "react";
import styles from "./index.module.scss";

const LanguageSwitcher = () => {
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  return (
    <div className={styles.langSwitcher}>
      <a onClick={() => setShowLangDropdown(!showLangDropdown)}>
        PL <span>&#9662;</span>
      </a>
      {showLangDropdown && (
        <div className={styles.dropdown}>
          <a href="#">PL</a>
          <a href="#">EN</a>
          <a href="#">DE</a>
        </div>
      )}
    </div>
  );
};
export default LanguageSwitcher;
