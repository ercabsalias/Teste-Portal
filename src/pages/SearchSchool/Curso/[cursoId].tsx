import { GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import React from "react";
import {
  getCourse,
  getCourses,
  getTrainingAreabyId,
  getSchool,
} from "../../../services";
import { ICurso, IAreaDeFormacao, ISchoolData } from "../../../types";
import { Layout } from "../../../components/layout";
import { Footer } from "../../../components/footer";
import { CourseView } from "../../../views/Courses";

interface cursoPageProps {
  curso: ICurso;
  area: IAreaDeFormacao;
  school: ISchoolData;
}

const CursoPage: NextPage<cursoPageProps> = ({ curso, area, school }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Curso</title>
      </Head>
      <React.Fragment>
        <CourseView curso={curso} area={area} school={school} />
      </React.Fragment>
    </React.Fragment>
  );
};

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<{ props: cursoPageProps }> {
  const id = context.params?.cursoId as string;
  const curso = await getCourse(id);
  const area = await getTrainingAreabyId(curso.areaDeFormacaoId);
  const school = await getSchool(area.escolaId);
  return {
    props: {
      curso,
      area,
      school,
    },
  };
}

export async function getStaticPaths(): Promise<{
  paths: { params: { cursoId: string } }[];
  fallback: false;
}> {
  const response = await getCourses();
  const data = (await response) as ICurso[];
  const paths = data.map((curso) => ({
    params: {
      cursoId: curso.id.toString(),
    },
  }));

  return { paths, fallback: false };
}

Object.assign(CursoPage, {
  Layout,
});

export default CursoPage;

//Teste
