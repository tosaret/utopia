import classNames from "classnames";
import { useState } from "react";
import LanguageSwitcher from "../LanguageSwitcher";
import styles from "./index.module.scss";

const Navigation = () => {
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
          <a href="#">Offer</a>
          <a href="#">Portfolio</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <LanguageSwitcher />
    </>
  );
};
export default Navigation;
