import styled from "styled-components";

export const Container = styled.div`
  background-color: #edfdff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImagemContainer = styled.div`
  background-color: #1c9deb;
  border-radius: 20rem;

  img {
    border-radius: 0 25rem;

    @media screen and (max-width: 768px) {
      border-radius: 0 15rem;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 4rem;
  }
`;

export const TextContainer = styled.div`
  //background-color: #fff;
  display: flex;

  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 80%;
  padding: 3rem;
  p {
    color: #999;
    margin-top: 0.5rem;
  }

  h1 {
    margin-bottom: 1rem;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  width: 30rem;
  padding: 2rem;
  margin: 1.6rem 0;
  border-radius: 10px;
  border-left: 4px solid #1c9deb;
  cursor: pointer;

  div {
    h4 {
      margin-bottom: 1rem;
    }
    span {
      color: #999;
    }
  }
`;

export const ContentBody = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
