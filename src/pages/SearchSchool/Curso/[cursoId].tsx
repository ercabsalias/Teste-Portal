import { GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { getCourse, getCourses } from "../../../services";
import { ICurso } from "../../../types";
import { Layout } from "../../../components/layout";
import { Footer } from "../../../components/footer";
import { CourseView } from "../../../views/Courses";

interface cursoPageProps {
  curso: ICurso;
}

const CursoPage: NextPage<cursoPageProps> = ({ curso }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Curso</title>
      </Head>
      <React.Fragment>
        <CourseView curso={curso} />
      </React.Fragment>
    </React.Fragment>
  );
};

interface Props {
  curso: ICurso;
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<{ props: Props }> {
  const id = context.params?.cursoId as string;
  const curso = await getCourse(id);
  return {
    props: {
      curso,
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
