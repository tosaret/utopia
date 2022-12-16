import ReactHtmlParser from "react-html-parser";
import classNames from "classnames";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";

const Offer = ({ active, menuTexts, content, lang }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [prevTab, setPrevTab] = useState(0);
  const [opening, setOpening] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [activeClassName, setActiveClassName] = useState("");
  const [title, setTitle] = useState(
    ReactHtmlParser(content[activeTab].title[lang])
  );

  const changeOffer = (event, index) => {
    event.preventDefault();

    setTimeout(
      () => {
        setActiveTab((prev) => {
          setPrevTab(prev);
          return index;
        });
      },
      activeTab === 0 ? 0 : 500
    );

    setAnimateIn(false);
    setAnimateOut(true);
  };

  useEffect(() => {
    const menuEl = document.getElementById("offer-menu");
    const textEl = document.getElementById("offer-text");
    const circleEl = document.getElementById("offer-circle");

    textEl.classList.add("fadeOut");
    prevTab === 0 && menuEl.classList.add("rollOut");
    prevTab === 0 && circleEl.classList.add([styles.circleOut]);
    prevTab === 0 && active && setOpening(true);

    setAnimateOut(false);
    setAnimateIn(true);

    setActiveClassName(
      (activeTab === 1 && styles.web) ||
        (activeTab === 2 && styles.mobile) ||
        (activeTab === 3 && styles.consulting) ||
        (activeTab === 4 && styles.services) ||
        (activeTab === 5 && styles.cloud) ||
        (activeTab === 6 && styles.design)
    );

    setTimeout(() => {
      setTitle(ReactHtmlParser(content[activeTab].title[lang]));
      textEl.classList.remove("fadeOut");
      menuEl.classList.remove("rollOut");
    }, 500);
  }, [activeTab]);

  useEffect(() => {
    setTitle(ReactHtmlParser(content[activeTab].title[lang]));
  }, [lang]);

  return (
    <section className={classNames(styles.offer, activeClassName)}>
      <div
        id="offer-circle"
        className={classNames(styles.offerCircle, {
          [styles.circleIn]: activeTab === 0 && active,
        })}
      />

      <div
        id="offer-text"
        className={classNames(styles.text, {
          fadeIn: active,
        })}
      >
        <h2>{title}</h2>
        <p>{ReactHtmlParser(content[activeTab].text[lang])}</p>
      </div>

      <div className={styles.menuBlock}>
        <div
          id="offer-shadow"
          className={classNames(styles.menuShadow, {
            fadeRight: activeTab === 0 && active,
            [styles.animateIn]: animateIn,
            [styles.animateOut]: animateOut,
            [styles.webShadow]: activeTab === 1,
            [styles.mobileShadow]: activeTab === 2,
            [styles.consultingShadow]: activeTab === 3,
            [styles.servicesShadow]: activeTab === 4,
            [styles.cloudShadow]: activeTab === 5,
            [styles.designShadow]: activeTab === 6,
          })}
        />
        <div
          className={classNames(styles.openingShadow, {
            [styles.animate]: prevTab === 0 && opening,
          })}
        ></div>
        <div
          id="offer-menu"
          className={classNames(styles.menuWrapper, {
            menuGrow: active,
          })}
        >
          <div className={classNames(styles.menu, { fadeIn: active })}>
            <div>
              <a
                href="#"
                className={classNames({ [styles.active]: activeTab === 1 })}
                onClick={() => changeOffer(event, 1)}
              >
                {menuTexts["web"][lang]}
              </a>
            </div>
            <div>
              <a
                href="#"
                className={classNames({ [styles.active]: activeTab === 2 })}
                onClick={() => changeOffer(event, 2)}
              >
                {menuTexts["mobile"][lang]}
              </a>
            </div>
            <div>
              <a
                href="#"
                className={classNames({ [styles.active]: activeTab === 3 })}
                onClick={() => changeOffer(event, 3)}
              >
                {menuTexts["consulting"][lang]}
              </a>
            </div>
            <div>
              <a
                href="#"
                className={classNames({ [styles.active]: activeTab === 4 })}
                onClick={() => changeOffer(event, 4)}
              >
                {menuTexts["services"][lang]}
              </a>
            </div>
            <div>
              <a
                href="#"
                className={classNames({ [styles.active]: activeTab === 5 })}
                onClick={() => changeOffer(event, 5)}
              >
                {menuTexts["cloud"][lang]}
              </a>
            </div>
            <div>
              <a
                href="#"
                className={classNames({ [styles.active]: activeTab === 6 })}
                onClick={() => changeOffer(event, 6)}
              >
                {menuTexts["design"][lang]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
