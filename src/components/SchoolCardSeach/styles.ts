import styled from "styled-components";

export const SectionCard = styled.div`
  position: relative;
  padding-bottom: 1rem;
  width: 25%;
  max-width: 33rem;
  height: 100%;
  max-height: 40rem;
  background: #fff;
  //border: 1px solid #ddd;
  background-color: #f3f3f3;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (max-width: 894px) {
    width: 90%;
    min-width: 250px;
  }
`;
export const ContainerImage = styled.div`
  display: flex;
  height: 30rem;
  max-height: 33rem;
  justify-content: center;

  img {
    width: 40rem !important;
    height: 5rem !important;
    border-radius: 0.4rem 0.4rem 0 0;
    object-fit: cover;
    @media screen and (max-width: 768px) {
      display: flex;
      flex: 1;
      object-fit: cover;
    }
  }
`;
export const Title = styled.h2`
  padding-top: 1rem;
  font-size: 1.4rem;
  text-align: center;
  font-weight: 300;

  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  margin: 1.5rem;
  font-family: Comfortaa;
  border: none;
  background: none;
  background-color: #161d26;
  color: #fff;
  padding: 0.2rem 1rem;
  font-size: 1.3rem;
  height: 4rem;
  width: 13rem;
  cursor: pointer;
`;
