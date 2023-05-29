import React, { useEffect } from "react";
import * as S from "./styles";
import Image from "next/image";

import Img from "../../../public/assets/img.png";

import M7 from "../../../public/assets/m7.jpg";
import { CiSearch, CiLocationArrow1, CiWavePulse1 } from "react-icons/ci";
import { useRouter } from "next/router";
import Button from "../button/button";

const PossivelSaber: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <h2>Subscreva-se para receber actualizações</h2>
        <S.InputContainer>
          <S.Input placeholder="Intruduz o seu email" />
          <S.Button>Enviar</S.Button>
        </S.InputContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default PossivelSaber;
