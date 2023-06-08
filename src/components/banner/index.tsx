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
            <span>Transformando vidas por meio da educação</span>
            <S.ButtonsContainer>
              <S.Button color="#fff" backgroundColor="#1C9DEA">
                <Link href={"/SearchSchool"}>Inscrever-se</Link>
              </S.Button>
            </S.ButtonsContainer>
          </S.Content>
          <Image
            src="https://i.ibb.co/pxyP2bD/m4.jpg"
            alt="m1"
            layout="responsive"
            height={500}
            width={1009}
          />
        </S.Container>
        <S.Container>
          <S.Content>
            <h1>Inscreva-se na melhor escola de Angola</h1>
            <span>Preparando mentes brilhantes para um futuro promissor.</span>
            <S.ButtonsContainer>
              <S.Button color="#fff" backgroundColor="#1C9DEA">
                <Link href={"/SearchSchool"}>Inscrever-se</Link>
              </S.Button>
            </S.ButtonsContainer>
          </S.Content>
          <Image
            src="https://i.ibb.co/4RhgCgL/m1.jpg"
            alt="m1"
            layout="responsive"
            height={500}
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
            src="https://i.ibb.co/YyQg3WS/m2.jpg"
            alt="m1"
            layout="responsive"
            height={500}
            width={1009}
          />
        </S.Container>

        <S.Container>
          <S.Content>
            <h1>Inscreva-se na melhor escola de Angola</h1>
            <span>Um lugar onde a aprendizagem ganha vida</span>
            <S.ButtonsContainer>
              <S.Button color="#fff" backgroundColor="#1C9DEA">
                Inscrever-se
              </S.Button>
            </S.ButtonsContainer>
          </S.Content>
          <Image
            src="https://i.ibb.co/dcLN1G7/m3.jpg"
            alt="m1"
            layout="responsive"
            height={500}
            width={1009}
          />
        </S.Container>

        <S.Container>
          <S.Content>
            <h1>Inscreva-se na melhor escola de Angola</h1>
            <span>Criando um futuro brilhante juntos</span>
            <S.ButtonsContainer>
              <S.Button color="#fff" backgroundColor="#1C9DEA">
                <Link href={"/SearchSchool"}>Inscrever-se</Link>
              </S.Button>
            </S.ButtonsContainer>
          </S.Content>
          <Image
            src="https://i.ibb.co/4RhgCgL/m1.jpg"
            alt="m1"
            layout="responsive"
            height={500}
            width={1009}
          />
        </S.Container>
      </S.ContainerMain>
    </S.ContainerContainer>
  );
};
export default Banner;
