import ReactHtmlParser from "react-html-parser";
import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import texts from "./content.json";
import styles from "./index.module.scss";

const Offer = ({ active }) => {
  const [activeTab, setActiveTab] = useState(0);

  const changeOffer = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    !active && setActiveTab(0);
  }, [active]);

  return (
    <section
      className={classNames(styles.offer, {
        [styles.web]: activeTab === 1,
        [styles.mobile]: activeTab === 2,
        [styles.consulting]: activeTab === 3,
        [styles.services]: activeTab === 4,
        [styles.cloud]: activeTab === 5,
        [styles.design]: activeTab === 6,
      })}
    >
      <div className={styles.text}>
        <h2>{ReactHtmlParser(texts[activeTab].title)}</h2>
        <p>{texts[activeTab].text}</p>
      </div>

      <div className={styles.menuBlock}>
        <div
          className={classNames(styles.menuShadow, {
            fadeRight: active,
          })}
        />
        <div
          className={classNames(styles.menuWrapper, {
            menuGrow: active,
          })}
        >
          <div className={classNames(styles.menu, { fadeIn: active })}>
            <Link
              href="#"
              className={classNames({ [styles.active]: activeTab === 1 })}
              onClick={() => changeOffer(1)}
            >
              Web
            </Link>
            <Link
              href="#"
              className={classNames({ [styles.active]: activeTab === 2 })}
              onClick={() => changeOffer(2)}
            >
              Mobile
            </Link>
            <Link
              href="#"
              className={classNames({ [styles.active]: activeTab === 3 })}
              onClick={() => changeOffer(3)}
            >
              Consulting
            </Link>
            <Link
              href="#"
              className={classNames({ [styles.active]: activeTab === 4 })}
              onClick={() => changeOffer(4)}
            >
              Services
            </Link>
            <Link
              href="#"
              className={classNames({ [styles.active]: activeTab === 5 })}
              onClick={() => changeOffer(5)}
            >
              Cloud
            </Link>
            <Link
              href="#"
              className={classNames({ [styles.active]: activeTab === 6 })}
              onClick={() => changeOffer(6)}
            >
              Design
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
