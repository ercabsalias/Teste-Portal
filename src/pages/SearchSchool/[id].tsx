import { GetStaticPropsContext, NextPage } from "next";
import React from "react";
import { Layout } from "../../components/layout";
import { useRouter } from "next/router";
import Head from "next/head";
import { SchoolProfileView } from "../../views/School-Profile";
import { getSchool, getSchools } from "../../services";
import { ISchoolData } from "../../types";

interface SchoolPageProps {
  school: ISchoolData;
}

const SchoolPage: NextPage<SchoolPageProps> = ({ school }) => {
  const router = useRouter();
  return (
    <React.Fragment>
      <Head>
        <title>Perfil de Escola</title>
      </Head>
      <React.Fragment>
        <SchoolProfileView school={school} />
      </React.Fragment>
    </React.Fragment>
  );
};

interface Props {
  school: ISchoolData;
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<{ props: Props }> {
  const id = context.params?.id as string;

  const school = await getSchool(id);

  return {
    props: {
      school,
    },
  };
}

export async function getStaticPaths(): Promise<{
  paths: { params: { id: string } }[];
  fallback: false;
}> {
  const response = await getSchools();
  const data = (await response) as ISchoolData[];

  const paths = data.map((school) => ({
    params: {
      id: school.id.toString(),
    },
  }));

  return { paths, fallback: false };
}

Object.assign(SchoolPage, {
  Layout,
});

export default SchoolPage;

//Teste
