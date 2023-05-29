import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Card } from "../../components/card";
import { useFetch } from "../../hooks/useFetch";
import { IAreaDeFormacao } from "../../types";
import * as S from "./styles"

interface Props {
    area: IAreaDeFormacao
}

const TrainingAreaView:React.FC<Props> = ( { area }) =>{
    const router = useRouter()
    const { data } = useFetch(`/file/${area.fotoUrl}`)    

    return(
        <>
            <S.Container>
                <S.Content>
                    <S.FirstSection>
                        <S.ContainerImage>
                            {data?.link ? (<Image layout="responsive" loader={() => data.link} src={data.link}  width={490} height={500} alt="escola"/>) : null}
                        </S.ContainerImage>
                        <S.ContainerLeft>
                            <S.Title>
                                Área de {area.nome}
                            </S.Title>
                            <span>Categoria: {area?.Categoria?.nome}</span>
                            <p>
                                {area.descricao}
                            </p>
                        </S.ContainerLeft>
                    </S.FirstSection>
                    <S.SecondSection>
                        <S.Title>
                            Nossos Cursos
                        </S.Title>
                        <S.ContainerCard>
                            {area.Curso?.map((curso) => (
                                <Card key={curso.id} content={curso} onClick = {() => router.push(`/SearchSchool/Curso/${curso.id}`)} />
                            ))}
                        </S.ContainerCard>
                    </S.SecondSection>
                    <S.SecondSection>
                        <S.Title>
                            Perfis de Saidas
                        </S.Title>
                        <S.ContainerCard>
                            {area.PerfilDeSaida?.map((profile) => (
                                <Card key={profile.id} content={profile} onClick={() => router.push(`/SearchSchool/PerfilDeSaida/${profile.id}`)}  />
                            ))}
                        </S.ContainerCard>
                    </S.SecondSection>
                </S.Content>
            </S.Container>
        </>
    );
}

// onClick = {() => router.push(`/SearchSchool/AreaDeFormacao/${area.id}`)} 
export { TrainingAreaView }