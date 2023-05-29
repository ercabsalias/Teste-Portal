import * as S from "./styles";
import SchoolCard from "../schoolCard";
import React from "react";
import { ISchoolData } from "../../types";

interface Props {
  data: ISchoolData[];
}

const ShoolCardsContainer: React.FC<Props> = ({ data }) => {
  return (
    <S.Container>
      {data.map(({ logo, nome, Categoria, id }: ISchoolData) => {
        return (
          <SchoolCard
            id = {id}
            key={id}
            image={logo}
            name={nome}
            description={Categoria?.nome}
          />
        );
      })}
    </S.Container>
  );
};


export default ShoolCardsContainer;
