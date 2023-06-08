import React, { useState } from "react";
import * as S from "./styles";

import Image from "next/image";

const HomeStatus: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <S.TextContainer
          data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <h1>FAZER INSCRIÇÃO</h1>
          <p>Faça inscrição em qualquer escola do Ministério da Educação </p>
          <button type="submit">ESCOLAS</button>
        </S.TextContainer>
        <S.ImagemContainer
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <Image src="/assets/Imagem1.png" alt="IMG" width={600} height={550} />
        </S.ImagemContainer>
      </S.Content>
    </S.Container>
  );
};

export default HomeStatus;
