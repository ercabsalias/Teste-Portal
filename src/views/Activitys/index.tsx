import Image from "next/image";
import React from "react";
import { Card } from "../../components/card";
import { useFetch } from "../../hooks/useFetch";
import { IActividade } from "../../types";
import * as S from "./styles"

interface Props {
    actividade: IActividade
}

const ActivityAreaView:React.FC<Props> = ( { actividade }) =>{
    const { data } = useFetch(`/file/${actividade.fotoUrl}`)
    return(
        <>
            <S.Container>
                <S.Content>
                    <S.FirstSection>
                        <S.ContainerImage>
                            {data?.link ? (<Image layout="responsive" loader={() => data.link} src={data.link}  width={490} height={500} alt="Actividade"/>) : null}
                        </S.ContainerImage>
                        <S.ContainerLeft>
                            <S.Title>
                                {actividade.nome}
                            </S.Title>
                            <span>Data: {actividade.data}</span>
                            <span>Organizador: {actividade.organizador}</span>
                            <p>
                                {actividade?.descricao}
                            </p>
                        </S.ContainerLeft>
                    </S.FirstSection>
                </S.Content>
            </S.Container>
        </>
    );
}

export { ActivityAreaView }