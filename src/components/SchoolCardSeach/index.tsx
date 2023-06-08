import Image from "next/image";
import { useState } from "react";
import * as S from "./styles";
import { useRouter } from "next/router";
import { useFetch } from "../../hooks/useFetch";

type schoolProps = {
  id: string;
  index: number;
  nome: string;
  fotoUrl: string;
};

type ISchoolCardSearchProps = {
  content: schoolProps;
};

export const SchoolCardSearch = ({ content }: ISchoolCardSearchProps) => {
  const router = useRouter();
  const { data } = useFetch(`/file/${content.fotoUrl}`);

  const [ishovering, setIsHovering] = useState(-1);

  function mouseOver(index: number) {
    setIsHovering(index);
  }

  function mouseOut() {
    setIsHovering(-1);
  }

  return (
    <>
      <S.SectionCard
        onClick={() =>
          router.push({
            pathname: "/SearchSchool",
            query: { id: content.id },
          })
        }
        key={content.index}
        onMouseOver={() => mouseOver(content.index)}
        onMouseOut={mouseOut}
      >
        <S.ContainerImage>
          {data?.link ? (
            <Image
              loader={() => data?.link}
              src={data?.link}
              alt={data.link}
              width={"100"}
              height={"100"}
            />
          ) : null}
        </S.ContainerImage>

        <S.Title>{content.nome}</S.Title>
        <S.Button onClick={() => router.push(`/SearchSchool/${content.id}`)}>
          Ver Perfil
        </S.Button>
      </S.SectionCard>
    </>
  );
};
