import classNames from "classnames";
import Link from "next/link";
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
          <Link href="#">Offer</Link>
          <Link href="#">Portfolio</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact</Link>
        </nav>
      </header>
      <LanguageSwitcher />
    </>
  );
};
export default Navigation;
