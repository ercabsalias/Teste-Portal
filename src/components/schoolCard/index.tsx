import Image from "next/image";
import Link from "next/link";
import * as S from "./styles";
import { SchoolCardProps } from "./type";
import {useRouter} from "next/router"
import { useFetch } from "../../hooks/useFetch";
const SchoolCard = ({ image, name, description, id }: SchoolCardProps) => {

  const { data, error } = useFetch(`/file/${image}`)
  const router = useRouter()

  return (
    <S.Container>
      <S.ImageContainer>
        {data?.link ? (<Image  loader={()=> data.link} width={100} height={76} src={data.link} alt="school" />) : null}
      </S.ImageContainer>
      <S.Title>{name}</S.Title>
      <S.Paragraph>{description}</S.Paragraph>
      <S.Button onClick={() => router.push(`/SearchSchool/${id}`)}>
        Ver perfil
      </S.Button>
    </S.Container>
  );
};

export default SchoolCard;
