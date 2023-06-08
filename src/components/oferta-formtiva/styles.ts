import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  margin-top: 4rem;
  text-align: center;
  font-family: Comfortaa;

  padding: 1.9rem;
`;

export const Card = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  flex-wrap: wrap;
  width: 100%;

  section {
    background-color: #1c9deb;
    border-radius: 20rem;

    @media screen and (max-width: 768px) {
      margin-top: 3rem;
    }
  }

  h2 {
    margin-top: 3rem;
  }
  img {
    border-radius: 22rem 0;
  }
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  max-width: 50rem;

  h2 {
    margin-bottom: 5rem;
    font-size: 2.7rem;
    font-family: Comfortaa;
  }
  p {
    color: #999;
    margin-bottom: 5rem;
    text-align: justify;
    font-size: 1.6rem;
    line-height: 1.5;
  }
`;
