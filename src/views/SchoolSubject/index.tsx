import Image from "next/image";
import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { IDisciplina } from "../../types";
import * as S from "./styles";

interface Props {
  subject: IDisciplina;
}

const SchoolSubjectView: React.FC<Props> = ({ subject }) => {
  const { data } = useFetch(`/file/${subject.fotoUrl}`);
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
              <S.Title>{subject.nome}</S.Title>
              {subject.Curso.nome ? (
                <span>Curso: {subject.Curso.nome}</span>
              ) : null}
              {subject.Curso.AreaDeFormacao.nome ? (
                <span>
                  Área de Formação: {subject.Curso.AreaDeFormacao.nome}
                </span>
              ) : null}
              <p>{subject?.descricao}</p>
            </S.ContainerLeft>
          </S.FirstSection>
        </S.Content>
      </S.Container>
    </>
  );
};

export { SchoolSubjectView };
