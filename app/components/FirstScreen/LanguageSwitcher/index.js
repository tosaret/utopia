import Link from "next/link";
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
          <Link href="">PL</Link>
          <Link href="">EN</Link>
          <Link href="">DE</Link>
        </div>
      )}
    </div>
  );
};
export default LanguageSwitcher;
