import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 30rem;
  height: 100%;
  gap: 1rem;
  max-height: 50rem;
  border-radius: 0.4rem;
  display: flex;
  border: 1px solid #ddd;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
  cursor: pointer;
  text-align: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  div {
    width: 100%;
    border-radius: 0.5rem;
    position: relative;
    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 1rem;
    }
    img {
      border-radius: 0.4rem 0.4rem 0 0;
      height: 100%;
      max-height: 33rem;
    }
  }

  span {
    text-align: center;
    padding-bottom: 0.5rem;
  }
`;
