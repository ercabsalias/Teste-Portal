import styled from "styled-components";

export const Wrapper = styled.div`
  color: #fff;
  width: 100%;
  height: 35vh;
  background-color: #161d26;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h1 {
    font-size: 5rem;

    span {
      color: red;
    }
  }

  p {
    font-style: italic;
    font-weight: 100;
    line-height: 2.3rem;
    width: 50rem;
    text-align: center;
    @media screen and (max-width: 768px) {
      width: 30rem;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
