import { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { FullPage, Slide } from "react-full-page";

import FirstScreen from "../app/components/FirstScreen";
import Offer from "../app/components/Offer";
import PortfolioIntro from "../app/components/PortfolioIntro";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);

  const fullPageRef = useRef();

  const changePage = (index) => {
    fullPageRef.current.scrollToSlide(index);
    setTimeout(() => {
      setCurrentPage(index);
    }, 700);
  };

  const afterChange = ({ to }) => {
    setCurrentPage(to);
  };

  return (
    <>
      <div>
        <Head>
          <title>Utopia</title>
          <meta name="description" content="Generated by create next app" />
        </Head>
      </div>
      <FullPage ref={fullPageRef} afterChange={afterChange}>
        <Slide>
          <FirstScreen active={currentPage === 0} changePage={changePage} />
        </Slide>
        <Slide>
          <Offer active={currentPage === 1} />
        </Slide>
        <Slide>
          <PortfolioIntro />
        </Slide>
      </FullPage>
    </>
  );
}
