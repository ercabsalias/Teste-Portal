import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 26rem;
  height: 100%;

  max-height: 30rem;
  border-radius: 0.4rem;
  display: flex;
  //border: 1px solid #ddd;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
  text-align: center;

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
      //border-radius: 0.4rem 0.4rem 0 0;
      height: 100%;
      max-height: 33rem;
    }
  }

  section {
    margin-top: -1rem;
    background-color: #f3f3f3;
    text-align: center;
    width: 92%;
    padding: 1rem;
    color: #000;
    //border-top: 4px dotted #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      margin: 1.5rem;
      font-family: Comfortaa;
      border: none;
      background: none;
      background-color: #161d26;
      color: #fff;
      padding: 0.2rem 1rem;
      font-size: 1rem;
      height: 3rem;
      width: 13rem;
      cursor: pointer;
    }
  }
`;
