import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImagemContainer = styled.div`
  background-color: #fff;
  @media screen and (max-width: 768px) {
    //display: none;
    margin-top: 5rem;
  }
`;

export const TextContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 1rem;
  }

  p {
    color: #999;
    margin-top: 1rem 0;
    text-align: center;
  }

  button {
    transition: border-color 0.2s;
    border: none;
    background-color: #1c9deb;
    padding: 1.4rem 7rem;
    color: #fff;
    font-family: Comfortaa;
    margin-top: 3rem;
    transition: 0.3s;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #2676a5;
    }
  }
`;

export const ContainerModalConsulta = styled.div`
  background-color: #fff;
  position: absolute;
`;

export const ContainerModal = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  position: absolute;
  height: 100vh;
  z-index: 999999;
`;

export const Content = styled.div`
  margin-top: 5rem;
  width: 84%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
