import { GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { getSubject, getSubjects } from "../../../services";
import { IActividade, IDisciplina } from "../../../types";
import { Layout } from "../../../components/layout";
import { Footer } from "../../../components/footer";
import { SchoolSubjectView } from "../../../views/SchoolSubject";

interface actividadePageProps {
  subject: IDisciplina;
}

const SubjectPage: NextPage<actividadePageProps> = ({ subject }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Disciplina</title>
      </Head>
      <React.Fragment>
        <SchoolSubjectView subject={subject} />
      </React.Fragment>
    </React.Fragment>
  );
};

interface Props {
  subject: IDisciplina;
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<{ props: Props }> {
  const id = context.params?.disciplinaId as string;
  const subject = await getSubject(id);
  return {
    props: {
      subject,
    },
  };
}

export async function getStaticPaths(): Promise<{
  paths: { params: { disciplinaId: string } }[];
  fallback: false;
}> {
  const response = await getSubjects();
  const data = (await response) as IActividade[];
  const paths = data.map((subject) => ({
    params: {
      disciplinaId: subject.id.toString(),
    },
  }));

  return { paths, fallback: false };
}

Object.assign(SubjectPage, {
  Layout,
});

export default SubjectPage;
