import styled from "styled-components";

export const Wrapper = styled.div`
  color: #fff;
  width: 100%;
  height: 35vh;
  background-color: #161d26;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and  (max-width: 500px) {
    height: 20rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2{
    padding: 2rem;
  }
  @media screen and  (max-width: 500px) {
    h2{
      text-align: center;
      font-size: 1.8rem;
    }
  }
`;

export const InputContainer=styled.div`
  width: 45rem;
  height: 4.5rem;
  background-color: #fff;
  padding: 2.6rem .2rem;
  display: flex;
  align-items: center;
  border-radius: .5rem;
  @media screen and  (max-width: 500px) {
    max-width:33rem;
  }
`;

export const Input=styled.input`
  padding: 2.4rem;
  width: 75%;
  border: none;
  height: 100%;
  background-color: transparent;
`;

export const Button=styled.button`
  color: #fff;
  padding: 1.6rem 4rem;
  background-color: ${({theme})=>theme.colors.primary.xblue};
  border: none;
  border-radius: .5rem;
`;