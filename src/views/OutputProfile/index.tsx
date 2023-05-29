import Image from "next/image";
import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { IPerfilDeSaida } from "../../types";
import * as S from "./styles";

interface Props {
  outputProfile: IPerfilDeSaida;
}

const OutputProfileView: React.FC<Props> = ({ outputProfile }) => {
  console.log(outputProfile);
  const { data } = useFetch(`/file/${outputProfile?.fotoUrl}`);
  return (
    <>
      <S.Container>
        <S.Content>
          <S.FirstSection>
            <S.ContainerImage>
              {data?.link ? (
                <Image
                  layout="responsive"
                  loader={() => data.link}
                  src={data.link}
                  width={490}
                  height={500}
                  alt="Actividade"
                />
              ) : null}
            </S.ContainerImage>
            <S.ContainerLeft>
              <S.Title>{outputProfile?.nome}</S.Title>
              <span>
                Área de formação: {outputProfile?.AreaDeFormacao?.nome}
              </span>
              <p>{outputProfile?.descricao}</p>
            </S.ContainerLeft>
          </S.FirstSection>
        </S.Content>
      </S.Container>
    </>
  );
};

export { OutputProfileView };
