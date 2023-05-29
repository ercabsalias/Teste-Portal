import { NextPage } from "next";
import { SearchSchoolView } from "../../views/Search-school";
import React from "react";
import Head from "next/head";
import { Layout } from "../../components/layout";
import { api } from "../../services";

const SearchSchoolPage: NextPage = ({ data }: any) => {
  return (
    <React.Fragment>
      <Head>
        <title>Buscar Escola</title>
      </Head>
      <React.Fragment>
        <SearchSchoolView data={data} />
      </React.Fragment>
    </React.Fragment>
  );
};

Object.assign(SearchSchoolPage, {
  Layout,
});

export async function getStaticProps() {
  const response = await api.get("/school/list");
  const data = response.data;

  return {
    props: {
      data,
    },
  };
}

export default SearchSchoolPage;
