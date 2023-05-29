import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/banner";
import PossivelSaber from "../components/possivel-fazer";
import OfertaFormativa from "../components/oferta-formtiva";
import ObjectivoApp from "../components/objectivo-app";
import { Layout } from "../components/layout";
import React from "react";
import ShoolCardsContainer from "../components/shoolCardsContainer";
import { getSchools } from "../services";
import { ISchoolData } from "../types";

type HomeProps = {
  data: ISchoolData[];
};

const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Portal Home</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <React.Fragment>
        <Banner />
        <PossivelSaber />
        <OfertaFormativa />
        <ObjectivoApp />
        <ShoolCardsContainer data={data} />
      </React.Fragment>
    </React.Fragment>
  );
};

export async function getStaticProps() {
  const response = (await getSchools()) as ISchoolData[];
  const data = response;

  return {
    props: {
      data,
    },
  };
}

Object.assign(Home, {
  Layout,
});

export default Home;
