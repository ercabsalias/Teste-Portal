import { GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { getTrainingAreabyId, getTrainingAreas } from "../../../services";
import { IAreaDeFormacao } from "../../../types";
import { Layout } from "../../../components/layout";
import { TrainingAreaView } from "../../../views/TrainingAreas";

interface areaPageProps {
  area: IAreaDeFormacao;
}

const AreaDeFormacaoPage: NextPage<areaPageProps> = ({ area }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Area de formação</title>
      </Head>
      <React.Fragment>
        <TrainingAreaView area={area} />
      </React.Fragment>
    </React.Fragment>
  );
};

interface Props {
  area: IAreaDeFormacao;
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<{ props: Props }> {
  const id = context.params?.areaDeFormacaoId as string;
  const area = await getTrainingAreabyId(id);
  return {
    props: {
      area,
    },
  };
}

export async function getStaticPaths(): Promise<{
  paths: { params: { areaDeFormacaoId: string } }[];
  fallback: false;
}> {
  const response = await getTrainingAreas();
  const data = (await response) as IAreaDeFormacao[];
  const paths = data.map((area) => ({
    params: {
      areaDeFormacaoId: area.id.toString(),
    },
  }));

  return { paths, fallback: false };
}

Object.assign(AreaDeFormacaoPage, {
  Layout,
});

export default AreaDeFormacaoPage;

///Teste
