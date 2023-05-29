import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  footer {
    flex: 1;
    justify-content: end;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  background: #fff !important;
  padding-bottom: 4rem;
  padding-top: 5rem;

  @media screen and (max-width: 768px) {
    padding-bottom: 20rem;
  }
`;

export const FirstSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 0.5rem 15rem;
  gap: 5rem;

  @media screen and (max-width: 768px) {
    padding: 2rem 2rem;
    flex-direction: column;
  }

  @media screen and (max-width: 1000px) {
    padding: 2rem 4rem;
  }
  @media screen and (max-width: 1300px) {
    padding: 2rem 4rem;
  }
`;

export const ContainerImage = styled.div`
  min-width: 300px;
  width: 400px;
  height: auto;
  padding-bottom: 2rem;
  border-radius: 0.8rem;
  position: relative;
  /* border: 0.5px solid rgba(0, 0, 0); */

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    height: auto;
    padding-bottom: 0.5rem;
    min-width: 150px;
  }

  img {
    border-radius: 0.8rem;
    width: 100%;

    @media screen and (max-width: 768px) {
      max-height: 400px !important;
    }
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  h2 {
    margin-top: 1rem;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }

  span {
    margin-top: 2rem;
  }

  p {
    margin-top: 2rem;
  }
`;

export const Title = styled.h2`
  color: #535252;
  font-size: 2.5rem;
  font-weight: 400;
`;

export const SectionDescription = styled.div`
  display: flex;
  padding-top: 2rem;
  font-size: 1.8rem;
  color: #535252;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
    flex-direction: column;

    div {
      display: flex;
      gap: 0.5rem;
    }
  }
`;

export const ContainerLeftFooter = styled.div`
  padding-top: 3rem;
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  section:nth-child(1) {
    display: flex;
    flex-direction: column;
    width: 10rem;
    gap: 1rem;
    max-width: 300px;

    img {
      border-radius: 50%;

      @media screen and (max-width: 768px) {
        width: 200px;
      }
    }
  }

  section:nth-child(2) {
    display: flex;
    align-items: flex-end;
    @media screen and (max-width: 768px) {
      justify-content: start;
      margin-top: 2rem;
    }
  }
`;

export const SecondSection = styled.div`
  margin-top: 5rem;
  width: 100%;
  height: auto;
  padding: 2rem 15rem;
  @media screen and (max-width: 768px) {
    padding: 2rem 2rem;
    flex-direction: column;
    h2 {
      font-size: 1.9rem;
    }
  }
  @media screen and (max-width: 1000px) {
    padding: 2rem 4rem;
  }
  @media screen and (max-width: 1300px) {
    padding: 2rem 4rem;
    flex-direction: column;
  }
`;

export const ContainerCard = styled.div`
  width: 100%;
  height: auto;
  gap: 2rem;
  display: flex;
  padding-top: 4rem;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;
