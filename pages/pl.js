import { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { FullPage, Slide } from "react-full-page";
import { getData } from "../libs/data";

import FirstScreen from "../app/components/FirstScreen";
import Offer from "../app/components/Offer";
import PortfolioIntro from "../app/components/PortfolioIntro";
import PortfolioGallery from "../app/components/PortfolioGallery";
import Leaders from "../app/components/Leaders";
import Footer from "../app/components/Footer";
import classNames from "classnames";
import BurgerMenu from "../app/components/BurgerMenu";

const pathMap = {
  0: "",
  1: "offers",
  2: "portfolio",
  3: "portfolio",
  4: "about-us",
  5: "contact",
};

export default function Home({ data }) {
  const router = useRouter();
  const fullPageRef = useRef();

  const [lang, setLang] = useState(2);
  const [currentPage, setCurrentPage] = useState(0);
  const [nextPage, setNextPage] = useState(0);

  const getPathIndex = (value) => {
    return Number(Object.keys(pathMap).find((key) => pathMap[key] === value));
  };

  const changePage = (index) => {
    fullPageRef.current.scrollToSlide(index);
  };

  const afterChange = ({ to }) => {
    setCurrentPage(to);
    router.push({ pathname: "/pl", hash: `${pathMap[to]}` }, undefined, {
      shallow: true,
    });
  };

  return (
    <>
      <div>
        <Head>
          <title>
            Utopia Ultimate - Aplikacje Mobilne, Webowe, Międzyplatformowe
          </title>
          <meta
            name="viewport"
            content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes"
          />
        </Head>
      </div>
      <BurgerMenu
        changePage={changePage}
        content={data.menu}
        lang={lang}
        firstScreen={nextPage === 0}
      />
      <FullPage
        duration={700}
        ref={fullPageRef}
        afterChange={afterChange}
        beforeChange={({ to }) => setNextPage(to)}
        initialSlide={getPathIndex(router.asPath.split("#")[1]) || 0}
      >
        <Slide
          className={classNames("slide", {
            active: nextPage === 0,
          })}
        >
          <FirstScreen
            active={currentPage === 0}
            changePage={changePage}
            menuTexts={data.menu}
            heroTexts={data.hero}
            lang={lang}
            setLang={setLang}
          />
        </Slide>
        <Slide
          className={classNames("slide", {
            active: nextPage === 1,
          })}
        >
          <Offer
            active={nextPage === 1}
            menuTexts={data.offersMenu}
            content={data.offers}
            lang={lang}
          />
        </Slide>
        <Slide
          className={classNames("slide", {
            active: nextPage === 2,
          })}
        >
          <PortfolioIntro
            changePage={changePage}
            content={data.portfolioIntro}
            lang={lang}
          />
        </Slide>
        <Slide
          className={classNames("slide", {
            active: nextPage === 3,
          })}
        >
          <PortfolioGallery content={data.portfolioItems} lang={lang} />
        </Slide>
        <Slide
          className={classNames("slide", {
            active: nextPage === 4,
          })}
        >
          <Leaders
            introTexts={data.leadersIntro}
            content={data.leadersItems}
            lang={lang}
          />
        </Slide>
        <Slide
          className={classNames("slide slide-footer", {
            active: nextPage === 5,
          })}
        >
          <Footer
            active={nextPage === 5}
            content={data.contactTexts}
            lang={lang}
          />
        </Slide>
      </FullPage>
    </>
  );
}

export async function getStaticProps(context) {
  const data = await getData();
  return {
    props: {
      data: data,
    },
    revalidate: 1,
  };
}
