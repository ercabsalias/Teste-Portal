import React from "react";
import * as S from "./styles";
import * as A from "../possivel-fazer/styles";
import Image from "next/image";
import { CiGlobe } from "react-icons/ci";
import Button from "../button/button";
import Link from "next/link";

const OfertaFormativa: React.FC = () => {
  return (
    <S.Container>
      <S.Title>CONHEÇA AS NOSSAS OFERTAS FORMATIVAS</S.Title>
      <A.Linha></A.Linha>
      <S.Card>
        <section>
          <Image
            src="https://i.ibb.co/4VVK303/engineer-cooperation-male-female.jpg"
            alt="IMG"
            width={500}
            height={350}
          />
        </section>
        <S.CardText
          data-aos="fade-down"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <h2>Engenharias e Tecnologias</h2>
          <p>
            Oportunidades de carreira: Os cursos de engenharia e tecnologia
            proporcionam uma base sólida para uma variedade de carreiras em
            campos como engenharia civil, engenharia mecânica, engenharia
            elétrica, ciência da computação, tecnologia da informação, entre
            outros.
          </p>
          <Link href="/SearchSchool">
            <Button Icon={<CiGlobe />} textName="Ver Escolas" />
          </Link>
        </S.CardText>
      </S.Card>
      <S.Card>
        <S.CardText
          data-aos="zoom-in"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <h2>Ciências Sociais Aplicadas</h2>
          <p>
            Os cursos de ciências, como biologia, química, física e ciências da
            terra, fornecem uma compreensão mais profunda dos princípios e leis
            que governam o mundo natural.
          </p>
          <Link href="/SearchSchool">
            <Button Icon={<CiGlobe />} textName="Ver Escolas" />
          </Link>
        </S.CardText>
        <section>
          <Image
            src="https://i.ibb.co/F7xrf9j/african-amercan.jpg"
            alt="IMG"
            width={500}
            height={350}
          />
        </section>
      </S.Card>
    </S.Container>
  );
};

export default OfertaFormativa;
