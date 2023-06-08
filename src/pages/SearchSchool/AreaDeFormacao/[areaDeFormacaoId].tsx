import { GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import React from "react";
import {
  getTrainingAreabyId,
  getTrainingAreas,
  getSchool,
} from "../../../services";
import { IAreaDeFormacao, ISchoolData } from "../../../types";
import { Layout } from "../../../components/layout";
import { TrainingAreaView } from "../../../views/TrainingAreas";

interface areaPageProps {
  area: IAreaDeFormacao;
  school: ISchoolData;
}

const AreaDeFormacaoPage: NextPage<areaPageProps> = ({ area, school }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Area de formação</title>
      </Head>
      <React.Fragment>
        <TrainingAreaView area={area} school={school} />
      </React.Fragment>
    </React.Fragment>
  );
};

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<{ props: areaPageProps }> {
  const id = context.params?.areaDeFormacaoId as string;
  const area = await getTrainingAreabyId(id);
  const school = await getSchool(area.escolaId);
  return {
    props: {
      area,
      school,
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
