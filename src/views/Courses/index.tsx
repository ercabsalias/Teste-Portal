import Image from "next/image";
import * as S from "../School-Profile/styles";

import { useFetch } from "../../hooks/useFetch";
import { ISchoolData, IAreaDeFormacao, ICurso } from "../../types";

import { Card } from "../../components/card";
import { useRouter } from "next/router";
import Router from "next/router";
import { useState } from "react";

interface Props {
  curso: ICurso;
  area: IAreaDeFormacao;
  school: ISchoolData;
}

const CourseView: React.FC<Props> = ({ curso, area, school }) => {
  const {
    query: { id },
  } = useRouter();

  const handleRedirect = () => {
    Router.push({
      pathname: "/inscricao",
      query: { escolaId: id },
    });
  };

  // const { data, error} = useSWR('/file/', () => fetchData(school))
  const { data: fotoUrl } = useFetch(`/file/${school?.fotoUrl}`);
  const { data: logoUrl } = useFetch(`/file/${school?.logo}`);
  const router = useRouter();
  const { data } = useFetch(`/file/${area.fotoUrl}`);

  return (
    <S.Container>
      <S.CardBackground backgroundCapa={fotoUrl?.link}>
        <S.Opacity>
          <div>
            <h2>MED</h2>
          </div>
          <S.ButtonSubscribe onClick={() => handleRedirect()}>
            Inscrever-se
          </S.ButtonSubscribe>
        </S.Opacity>
      </S.CardBackground>
      <S.MainContainer>
        <S.MenuContainer>
          <S.UserSide>
            <div>
              {logoUrl ? (
                <Image
                  src={logoUrl?.link}
                  alt="escola"
                  width={82}
                  height={80}
                  loading="lazy"
                />
              ) : null}
            </div>
            <S.SchoolName>
              <S.Title>{school?.nome}</S.Title>
              <S.SectionDescription>
                <span>Localização: </span>
                <span>
                  {" "}
                  {school?.Localizacao?.endereco1} /{" "}
                  {school?.Localizacao?.Provincia.nome}
                </span>
              </S.SectionDescription>
              <S.SectionDescription>
                <span>Categoria: {school?.Categoria?.nome}</span>
              </S.SectionDescription>
            </S.SchoolName>
          </S.UserSide>
          <S.Nav>
            <h1>Curso de {curso.nome}</h1>
          </S.Nav>
        </S.MenuContainer>
        <S.Wrapper>
          <S.LeftSide>
            <S.AreaFormacao>
              <div className="Title">
                <h2>Disciplinas de {curso.nome}</h2>
              </div>
              <S.CardAreaFormacao>
                {curso.Disciplina?.map((subject) => (
                  <Card
                    key={subject.id}
                    content={subject}
                    onClick={() =>
                      router.push(`/SearchSchool/Disciplina/${subject.id}`)
                    }
                  />
                ))}
              </S.CardAreaFormacao>
              <S.PageTable>
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </S.PageTable>
            </S.AreaFormacao>
          </S.LeftSide>
        </S.Wrapper>
      </S.MainContainer>
    </S.Container>
  );
};
export { CourseView };
