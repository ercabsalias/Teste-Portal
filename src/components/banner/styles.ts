import styled, { keyframes } from "styled-components";

interface buttonProps {
  color: string;
  backgroundColor: string;
}

const slider = keyframes`
0%{
  left: 0;
}
20%{
  left: 0;
}
25%{
  left: -100%;
}
45%{
  left: -100%;
}
50%{
  left: -200%;
}
70%{
  left: -200%;
}
75%{
  left: -300%;
}
95%{
  left: -300%;
}
100%{
  left: 0;
}
`;

export const ContainerContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 80vh;
  @media screen and (max-width: 920px) {
    height: 69vh;
  }

  @media screen and (max-width: 800px) {
    height: 60vh;
  }

  @media screen and (max-width: 700px) {
    height: 58vh;
  }

  @media screen and (max-width: 600px) {
    height: 45vh;
  }

  @media screen and (max-width: 500px) {
    height: 40vh;
  }
`;

export const ContainerMain = styled.div`
  position: relative;
  width: 500%;
  height: 100%;
  left: 0px;
  margin: 0;
  animation: 30s ${slider} infinite;
`;

export const Container = styled.div`
  float: left;
  width: 20%;
  height: 80%;
`;

export const ButtonsContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacings.xxmultipleeight};
  display: flex;
  gap: 3rem;
  justify-content: center;
`;

export const Button = styled.button`
  border: none;
  border-radius: 1.1rem;
  width: 21rem;
  height: 5rem;
  font-family: Comfortaa;
  padding: 1.2rem ${({ theme }) => theme.spacings.xxxmultipleeight};
  background-color: ${({ backgroundColor }: buttonProps) => backgroundColor};
  color: ${({ color }: buttonProps) => color};
  z-index: 100;
  @media screen and (max-width: 620px) {
    width: 15rem;
    height: 4rem;
    border-radius: 0.6rem;
  }
`;

export const Content = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;

  flex-direction: column;
  color: #fff;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

  h1 {
    text-align: center;
    font-weight: 700;
    font-size: 4.5rem;
    position: relative;
  }

  span {
    font-size: 2rem;
    color: #bfbfbf;
    margin: 1rem 0 1rem 0;
  }
  @media screen and (max-width: 620px) {
    height: 100%;
    h1 {
      font-size: 2.7rem;
    }
    span {
      font-size: 1.7rem;
    }
  }
`;
