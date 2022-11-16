import ReactHtmlParser from "react-html-parser";
import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import texts from "./content.json";
import styles from "./index.module.scss";

const Offer = ({ active }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [prevTab, setPrevTab] = useState(0);
  const [activeClassName, setActiveClassName] = useState("");
  const [title, setTitle] = useState(ReactHtmlParser(texts[activeTab].title));

  const changeOffer = (index) => {
    setActiveTab((prev) => {
      setPrevTab(prev);
      return index;
    });
  };

  useEffect(() => {
    const menuEl = document.getElementById("offer-menu");
    const textEl = document.getElementById("offer-text");
    const circleEl = document.getElementById("offer-circle");

    textEl.classList.add("fadeOut");
    prevTab === 0 && menuEl.classList.add("rollOut");
    prevTab === 0 && circleEl.classList.add([styles.circleOut]);

    // try add/remove classNames with prev activeTab

    setActiveClassName(
      (activeTab === 1 && styles.web) ||
        (activeTab === 2 && styles.mobile) ||
        (activeTab === 3 && styles.consulting) ||
        (activeTab === 4 && styles.services) ||
        (activeTab === 5 && styles.cloud) ||
        (activeTab === 6 && styles.design)
    );

    setTimeout(() => {
      setTitle(ReactHtmlParser(texts[activeTab].title));
      textEl.classList.remove("fadeOut");
      menuEl.classList.remove("rollOut");
    }, 700);

    return () => {
      setActiveClassName("");
    };
  }, [activeTab]);

  useEffect(() => {
    !active && setActiveTab(0);
  }, [active]);

  return (
    <section className={classNames(styles.offer, activeClassName)}>
      <div
        id="offer-circle"
        className={classNames(styles.offerCircle, {
          [styles.circleIn]: active,
        })}
      />

      <div
        id="offer-text"
        className={classNames(styles.text, {
          fadeIn: active,
        })}
      >
        <h2>{title}</h2>
        <p>{ReactHtmlParser(texts[activeTab].text)}</p>
      </div>

      <div className={styles.menuBlock}>
        <div
          className={classNames(styles.menuShadow, {
            fadeRight: activeTab === 0 && active,
            [styles.webShadow]: activeTab === 1,
            [styles.mobileShadow]: activeTab === 2,
            [styles.consultingShadow]: activeTab === 3,
            [styles.servicesShadow]: activeTab === 4,
            [styles.cloudShadow]: activeTab === 5,
            [styles.designShadow]: activeTab === 6,
          })}
        />
        <div
          id="offer-menu"
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
