import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";

import styles from "./index.module.scss";

const BurgerMenu = ({ changePage, content, lang, firstScreen }) => {
  const [menuDropdown, setMenuDropdown] = useState(false);

  const handleMenuClick = (id) => {
    changePage(id);
    setMenuDropdown(false);
  };

  return (
    <>
      <div
        className={classNames(styles.menuToggle, {
          [styles.firstScreen]: firstScreen,
          [styles.menuToggleOpen]: menuDropdown,
        })}
        onClick={() => setMenuDropdown(!menuDropdown)}
      >
        <span></span>
      </div>
      <div
        className={classNames(styles.overlayMenu, {
          [styles.show]: menuDropdown,
        })}
      >
        <div>
          <Link href="" onClick={() => handleMenuClick(1)}>
            {content.offer[lang]}
          </Link>
        </div>
        <div>
          <Link href="" onClick={() => handleMenuClick(2)}>
            {content.portfolio[lang]}
          </Link>
        </div>
        <div>
          <Link href="" onClick={() => handleMenuClick(4)}>
            {content.about[lang]}
          </Link>
        </div>
        <div>
          <Link href="" onClick={() => handleMenuClick(5)}>
            {content.contact[lang]}
          </Link>
        </div>
      </div>
    </>
  );
};
export default BurgerMenu;
