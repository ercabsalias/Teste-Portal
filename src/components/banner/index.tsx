import * as S from "./styles";
import Link from "next/link";

import Image from "next/image";

const Banner = () => {
  return (
    <S.ContainerContainer>
      <S.ContainerMain>
        <S.Container>
          <S.Content>
            <h1>Seu sonho começa aqui</h1>
            <span>Criando o futuro apenas com um click</span>
            <S.ButtonsContainer>
              <S.Button color="#fff" backgroundColor="#1C9DEA">
                <Link href={"/SearchSchool"}>Procurar Escolas</Link>
              </S.Button>
            </S.ButtonsContainer>
          </S.Content>
          <Image
            src="/assets/m4.jpg"
            alt="m1"
            layout="responsive"
            height={540}
            width={1009}
          />
        </S.Container>
        <S.Container>
          <S.Content>
            <h1>Inscreva-se na melhor escola de Angola</h1>
            <span>Criando o futuro apenas com um click</span>
            <S.ButtonsContainer>
              <S.Button color="#fff" backgroundColor="#1C9DEA">
                <Link href={"/SearchSchool"}>Inscrever-se</Link>
              </S.Button>
            </S.ButtonsContainer>
          </S.Content>
          <Image
            src="/assets/m1.jpg"
            alt="m1"
            layout="responsive"
            height={540}
            width={1009}
          />
        </S.Container>
        <S.Container>
          <S.Content>
            <h1>Já sabe onde estudar?</h1>
            <span>Comece aqui</span>
            <S.ButtonsContainer>
              <S.Button color="#fff" backgroundColor="#1C9DEA">
                <Link href={"/SearchSchool"}>Inscrever-se</Link>
              </S.Button>
            </S.ButtonsContainer>
          </S.Content>
          <Image
            src="/assets/m2.jpg"
            alt="m1"
            layout="responsive"
            height={540}
            width={1009}
          />
        </S.Container>

        <S.Container>
          <S.Content>
            <h1>Inscreva-se na melhor escola de Angola</h1>
            <span>Criando o futuro apenas com um click</span>
            <S.ButtonsContainer>
              <S.Button color="#fff" backgroundColor="#1C9DEA">
                Inscrever-se
              </S.Button>
            </S.ButtonsContainer>
          </S.Content>
          <Image
            src="/assets/m3.jpg"
            alt="m1"
            layout="responsive"
            height={540}
            width={1009}
          />
        </S.Container>

        <S.Container>
          <S.Content>
            <h1>Inscreva-se na melhor escola de Angola</h1>
            <span>Criando o futuro apenas com um click</span>
            <S.ButtonsContainer>
              <S.Button color="#fff" backgroundColor="#1C9DEA">
                <Link href={"/SearchSchool"}>Inscrever-se</Link>
              </S.Button>
            </S.ButtonsContainer>
          </S.Content>
          <Image
            src="/assets/m1.jpg"
            alt="m1"
            layout="responsive"
            height={540}
            width={1009}
          />
        </S.Container>
      </S.ContainerMain>
    </S.ContainerContainer>
  );
};
export default Banner;
