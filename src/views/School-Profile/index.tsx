import Image from "next/image";
import * as S from "./styles";
import { useFetch } from "../../hooks/useFetch";
import { ISchoolData } from "../../types";
import { Card } from "../../components/card";
import { useRouter } from "next/router";
import Router from "next/router";
import { useState } from "react";

interface Props {
  school: ISchoolData;
}

export const SchoolProfileView: React.FC<Props> = ({ school }) => {
  const {
    query: { id },
  } = useRouter();

  const handleRedirect = () => {
    Router.push({
      pathname: "/inscricao",
      query: { escolaId: id },
    });
  };

  const [showPerfil, setShowPerfil] = useState<boolean>(true);
  const [showHistorial, setShowHistorial] = useState<boolean>(false);
  const [showActividadesAnuais, setActividadesAnuais] =
    useState<boolean>(false);
  const [showFeedBack, setShowFeedBack] = useState<boolean>(false);

  const [type, setType] = useState("Perfil");

  const ClickHistorial = () => {
    setShowHistorial(true);
    setShowPerfil(false);
    setActividadesAnuais(false);
    setShowFeedBack(false);
    setType("Historial");
  };

  const ClickFeedBack = () => {
    setShowFeedBack(true);
    setShowPerfil(false);
    setActividadesAnuais(false);
    setShowHistorial(false);
    setType("Feedback");
  };

  const ClickPerfil = () => {
    setShowPerfil(true);
    setShowHistorial(false);
    setActividadesAnuais(false);
    setShowFeedBack(false);
    setType("Perfil");
  };

  const ClickActividadesAnuais = () => {
    setActividadesAnuais(true);
    setShowHistorial(false);
    setShowFeedBack(false);
    setShowPerfil(false);
    setType("Actividades");
  };

  // const { data, error} = useSWR('/file/', () => fetchData(school))
  const { data: fotoUrl } = useFetch(`/file/${school?.fotoUrl}`);
  const { data: logoUrl } = useFetch(`/file/${school?.logo}`);

  const router = useRouter();

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
            <li>
              <S.LinkItem
                onClick={() => ClickPerfil()}
                isActive={type === "Perfil"}
              >
                Perfil
              </S.LinkItem>
            </li>
            <li>
              <S.LinkItem
                onClick={() => ClickHistorial()}
                isActive={type === "Historial"}
              >
                Historial
              </S.LinkItem>
            </li>
            <li>
              <S.LinkItem
                onClick={() => ClickActividadesAnuais()}
                isActive={type === "Actividades"}
              >
                Actividades Anuais
              </S.LinkItem>
            </li>
            <li>
              <S.LinkItem
                onClick={() => ClickFeedBack()}
                isActive={type === "Feedback"}
              >
                Feedback
              </S.LinkItem>
            </li>
          </S.Nav>
        </S.MenuContainer>

        {showPerfil ? (
          <S.Wrapper>
            <S.LeftSide>
              <S.AreaFormacao>
                <div className="Title">
                  <h2>Áreas de Formação</h2>
                </div>
                <S.CardAreaFormacao>
                  {school.areaDeFormacao?.map((area) => (
                    <Card
                      key={area.id}
                      content={area}
                      onClick={() =>
                        router.push(`/SearchSchool/AreaDeFormacao/${area.id}`)
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
        ) : null}

        {showHistorial ? (
          <S.Wrapper>
            <S.LeftSide>
              <S.Historial>
                <div>
                  <h2>Historial</h2>
                </div>
                <section>
                  <span>Fundador: {school?.historial?.fundador}</span>
                  <span>Data: {school?.historial?.data}</span>
                </section>
                <S.Noticia>
                  <p>{school?.historial?.descricao}</p>
                </S.Noticia>
              </S.Historial>
            </S.LeftSide>
          </S.Wrapper>
        ) : null}

        {showActividadesAnuais ? (
          <S.Wrapper>
            <S.LeftSide>
              <S.Historial>
                <div>
                  <h2>Em desenvolvimento...</h2>
                </div>
              </S.Historial>
            </S.LeftSide>
          </S.Wrapper>
        ) : null}

        {showFeedBack ? (
          <S.Wrapper>
            <S.LeftSide>
              <S.FeedBack>
                <S.TitleFeedBack>
                  <h2>FeedBack</h2>
                </S.TitleFeedBack>
                <S.FormularioFeedBack>
                  <input type="text" placeholder="Nome Completo" />
                  <input type="gmail" placeholder=" E-mail" />
                  <textarea placeholder="Descrição"></textarea>
                  <button type="submit">Enviar</button>
                </S.FormularioFeedBack>
              </S.FeedBack>
            </S.LeftSide>
          </S.Wrapper>
        ) : null}
      </S.MainContainer>
    </S.Container>
  );
};
