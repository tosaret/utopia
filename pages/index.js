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

  const [lang, setLang] = useState(1);
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
    router.push({ pathname: "/", hash: `${pathMap[to]}` }, undefined, {
      shallow: true,
    });
  };

  return (
    <>
      <div>
        <Head>
          <title>
            Utopia Ultimate - Mobile App, Web App &amp; Cross-platform
            Development
          </title>
        </Head>
      </div>
      <FullPage
        ref={fullPageRef}
        afterChange={afterChange}
        beforeChange={({ to }) => setNextPage(to)}
        initialSlide={getPathIndex(router.asPath.split("#")[1]) || 0}
      >
        <Slide className="slide">
          <FirstScreen
            active={currentPage === 0}
            changePage={changePage}
            menuTexts={data.menu}
            heroTexts={data.hero}
            lang={lang}
            setLang={setLang}
          />
        </Slide>
        <Slide className="slide">
          <Offer
            active={nextPage === 1}
            menuTexts={data.offersMenu}
            content={data.offers}
            lang={lang}
          />
        </Slide>
        <Slide className="slide">
          <PortfolioIntro
            changePage={changePage}
            content={data.portfolioIntro}
            lang={lang}
          />
        </Slide>
        <Slide className="slide">
          <PortfolioGallery content={data.portfolioItems} lang={lang} />
        </Slide>
        <Slide className="slide">
          <Leaders
            introTexts={data.leadersIntro}
            content={data.leadersItems}
            lang={lang}
          />
        </Slide>
        <Slide className="slide slide-footer">
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
