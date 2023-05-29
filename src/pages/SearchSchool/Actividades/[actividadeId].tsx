import { GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { getActivity, getActivitys } from "../../../services";
import { IActividade } from "../../../types";
import { Layout } from "../../../components/layout";
import { Footer } from "../../../components/footer";
import { ActivityAreaView } from "../../../views/Activitys";

interface actividadePageProps {
  actividade: IActividade;
}

const ActividadePage: NextPage<actividadePageProps> = ({ actividade }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Actividades anuais</title>
      </Head>
      <React.Fragment>
        <ActivityAreaView actividade={actividade} />
      </React.Fragment>
    </React.Fragment>
  );
};

interface Props {
  actividade: IActividade;
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<{ props: Props }> {
  const id = context.params?.actividadeId as string;
  const actividade = await getActivity(id);
  return {
    props: {
      actividade,
    },
  };
}

export async function getStaticPaths(): Promise<{
  paths: { params: { actividadeId: string } }[];
  fallback: false;
}> {
  const response = await getActivitys();
  const data = (await response) as IActividade[];
  const paths = data.map((actividade) => ({
    params: {
      actividadeId: actividade.id.toString(),
    },
  }));

  return { paths, fallback: false };
}

Object.assign(ActividadePage, {
  Layout,
});

export default ActividadePage;

//Teste
