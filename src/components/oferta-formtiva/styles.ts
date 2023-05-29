import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  margin-top: 5rem;
  text-align: center;
  font-family: Comfortaa;
  font-weight: 300;
  padding: 1.9rem;
`;

export const Card = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  h2 {
    margin-top: 3rem;
  }
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 5rem;
    font-size: 2.7rem;
    font-family: Comfortaa;
  }
`;
