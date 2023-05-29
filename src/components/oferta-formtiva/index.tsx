import React, { useEffect } from "react";
import * as S from "./styles";
import Image from "next/image";

import { CiGlobe } from "react-icons/ci";

import Button from "../button/button";
import Link from "next/link";
const OfertaFormativa: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Conheça a nossa Oferta Formativa</S.Title>
      <S.Card>
        <Image src="/assets/m6.jpg" alt="IMG" width={600} height={400} />
        <S.CardText data-aos="fade-down">
          <h2>Engenharias e Tecnologias</h2>
          <Link href="/SearchSchool">
            <Button Icon={<CiGlobe />} textName="Ver Escolas" />
          </Link>
        </S.CardText>
      </S.Card>
      <S.Card>
        <S.CardText data-aos="zoom-in">
          <h2>Ciências Sociais Aplicadas</h2>
          <Link href="/SearchSchool">
            <Button Icon={<CiGlobe />} textName="Ver Escolas" />
          </Link>
        </S.CardText>
        <Image src="/assets/m6.jpg" alt="IMG" width={600} height={400} />
      </S.Card>
    </S.Container>
  );
};

export default OfertaFormativa;
