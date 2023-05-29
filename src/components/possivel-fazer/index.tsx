import React, { useEffect } from "react";
import * as S from "./styles";
import Image from "next/image";

import Img from "../../../public/assets/img.png";

import { CiSearch, CiLocationArrow1, CiWavePulse1 } from "react-icons/ci";

const PossivelSaber: React.FC = () => {
  return (
    <S.Container>
      <S.Title>O que é possível fazer no portal?</S.Title>
      <S.Card>
        <Image src={Img} alt="IMG" width={600} height={400} />
        <S.CardText>
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
