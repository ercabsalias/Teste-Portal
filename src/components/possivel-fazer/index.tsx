import React, { useEffect } from "react";
import * as S from "./styles";
import Image from "next/image";

import Img from "../../../public/assets/img.png";

import { CiSearch, CiLocationArrow1, CiWavePulse1 } from "react-icons/ci";

const PossivelSaber: React.FC = () => {
  return (
    <S.Container>
      <S.Title>O QUE É POSSÍVEL FAZER NO APP?</S.Title>
      <S.Linha></S.Linha>
      <S.Card>
        <Image
          src={Img}
          alt="IMG"
          width={600}
          height={400}
          data-aos="zoom-in"
        />
        <S.CardText data-aos="zoom-in-up">
          <div>
            <CiSearch />
            <span>Pesquisar e ver perfil de escola</span>
          </div>
          <div>
            <CiLocationArrow1 />
            <span>Fazer Inscrição a qualquer escola</span>
          </div>
        </S.CardText>
      </S.Card>
    </S.Container>
  );
};

export default PossivelSaber;
