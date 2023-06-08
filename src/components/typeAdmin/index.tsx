import React from "react";
import * as S from "./styles";
import * as A from "../possivel-fazer/styles";
import Image from "next/image";

const TypeAdmin: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <h1>PASSOS PARA FAZER INSCRIÇÃO</h1>
        <A.Linha></A.Linha>
        <p>Eis aqui os três passos para inscrição</p>
        <S.ContentBody>
          <S.TextContainer>
            <S.Card data-aos="fade-right">
              <div>
                <h4>1º Passo</h4>
                <span>Procurar e escolher uma determinada escola </span>
              </div>
            </S.Card>
            <S.Card data-aos="fade-right">
              <div>
                <h4>2º Passo</h4>
                <span>Visualizar o perfil da escola escolhida </span>
              </div>
            </S.Card>
            <S.Card data-aos="fade-right">
              <div>
                <h4>3º Passo</h4>
                <span>Prencher o formulário de inscrição </span>
              </div>
            </S.Card>
          </S.TextContainer>
          <S.ImagemContainer data-aos="flip-up">
            <Image
              src="/assets/ImagemView.jpg"
              alt="IMG"
              width={600}
              height={430}
            />
          </S.ImagemContainer>
        </S.ContentBody>
      </S.Content>
    </S.Container>
  );
};

export default TypeAdmin;
