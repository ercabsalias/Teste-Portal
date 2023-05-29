import Image from "next/image";
import React from "react";
import { useFetch } from "../../hooks/useFetch";
import * as S from "./style";

interface Props {
  content: {
    id?: string;
    nome: string;
    fotoUrl: string;
  };
  onClick?: () => void;
}

export const Card: React.FC<Props> = ({ content, onClick }) => {
  const { data } = useFetch(`/file/${content.fotoUrl}`);
  return (
    <S.Card onClick={onClick}>
      <div>
        {data?.link ? (
          <Image
            loader={() => data.link}
            src={data.link}
            width={100}
            height={80}
            alt="escola"
            layout="responsive"
          />
        ) : null}
      </div>
      <span>{content.nome}</span>
    </S.Card>
  );
};
