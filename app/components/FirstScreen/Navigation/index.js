import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "../LanguageSwitcher";
import styles from "./index.module.scss";

const Navigation = ({ changePage }) => {
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
            Offer
          </Link>
          <Link href="" onClick={() => changePage(2)}>
            Portfolio
          </Link>
          <Link href="" onClick={() => changePage(4)}>
            About Us
          </Link>
          <Link href="" onClick={() => changePage(5)}>
            Contact
          </Link>
        </nav>
      </header>
      <LanguageSwitcher />
    </>
  );
};
export default Navigation;
