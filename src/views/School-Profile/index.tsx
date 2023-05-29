import Image from "next/image";
import * as S from "./styles";
import avatar from "../../../public/assets/ipil2.jpg";
import { FaEnvelope } from "react-icons/fa";
import ilustration from "../../../public/assets/m4.jpg";

import { useFetch } from "../../hooks/useFetch";
import { ISchoolData } from "../../types";
import useSWR from "swr";
import { fetchData } from "./services";
import { Card } from "../../components/card";
import { useRouter } from "next/router";
import Router from "next/router";
import { useState } from "react";
import logo from "../../../public/assets/med.png";

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

  const ClickHistorial = () => {
    setShowPerfil(false);
    setActividadesAnuais(false);
    setShowHistorial(true);
  };

  const ClickPerfil = () => {
    setShowPerfil(true);
    setShowHistorial(false);
    setActividadesAnuais(false);
  };

  const ClickActividadesAnuais = () => {
    setActividadesAnuais(!showActividadesAnuais);
    setShowHistorial(false);
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
              <a onClick={() => ClickPerfil()} className="active">
                Perfil
              </a>
            </li>
            <li>
              <a onClick={() => ClickHistorial()}>Historial</a>
            </li>
            <li>
              <a onClick={() => ClickActividadesAnuais()}>Actividades Anuais</a>
            </li>
            <li>
              <a href="">Vídeos</a>
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
              <S.LittleCard>
                <div>
                  <h2>Em desenvlvimento...</h2>
                </div>

                <S.Noticia>
                  <p>Em desenvolvimento...</p>
                </S.Noticia>
              </S.LittleCard>
              <S.LittleCard>
                <div>
                  <h2>Em desenvolvimento...</h2>
                </div>

                <S.Noticia>
                  <p>Em desenvolvimento...</p>
                </S.Noticia>
              </S.LittleCard>
            </S.LeftSide>
          </S.Wrapper>
        ) : null}
      </S.MainContainer>
    </S.Container>
  );
};
