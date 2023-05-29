import { GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { getOutputProfile, getOutputProfiles } from "../../../services";
import { IPerfilDeSaida } from "../../../types";
import { Layout } from "../../../components/layout";
import { Footer } from "../../../components/footer";
import { OutputProfileView } from "../../../views/OutputProfile";

interface outPutProfilePageProps {
  outputProfile: IPerfilDeSaida;
}

const OutputProfilePage: NextPage<outPutProfilePageProps> = ({
  outputProfile,
}) => {
  return (
    <React.Fragment>
      <Head>
        <title>Perfil de Saída</title>
      </Head>
      <React.Fragment>
        <OutputProfileView outputProfile={outputProfile} />
      </React.Fragment>
    </React.Fragment>
  );
};

interface Props {
  outputProfile: IPerfilDeSaida;
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<{ props: Props }> {
  const id = context.params?.outputProfileId as string;
  const outputProfile = await getOutputProfile(id);
  return {
    props: {
      outputProfile,
    },
  };
}

export async function getStaticPaths(): Promise<{
  paths: { params: { outputProfileId: string } }[];
  fallback: false;
}> {
  const response = await getOutputProfiles();
  const data = (await response) as IPerfilDeSaida[];
  const paths = data.map((outputProfile) => ({
    params: {
      outputProfileId: outputProfile.id.toString(),
    },
  }));

  return { paths, fallback: false };
}

Object.assign(OutputProfilePage, {
  Layout,
});

export default OutputProfilePage;
