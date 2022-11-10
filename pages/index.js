import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import FirstScreen from "../app/components/FirstScreen";
import Offer from "../app/components/Offer";
import ReactPageScroller, { SectionContainer } from "react-page-scroller";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (index) => {
    setCurrentPage(index);
  };

  return (
    <>
      <div>
        <Head>
          <title>Utopia</title>
          <meta name="description" content="Generated by create next app" />
        </Head>
      </div>
      <ReactPageScroller animationTimer={600} pageOnChange={handlePageChange}>
        <FirstScreen active={currentPage === 0} />
        <Offer active={currentPage === 1} />
        {/* <SectionContainer height={50}>
          <FirstScreen active={currentPage === 0} />
        </SectionContainer> */}
      </ReactPageScroller>
    </>
  );
}
