import styled from "styled-components";

export const Paragraph = styled.p`
  width: 100%;

  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

export const FormCard = styled.div`
  background-color: #fff;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  position: relative;
  margin: auto;
  padding: 5rem 2rem;
  bottom: 4rem;
  width: 70%;
  border-radius: 1rem;
  div:first-child {
    border-bottom: 1px solid #ccc;
    h2 {
      padding: 1rem 0;
    }
  }
  @media screen and (max-width: 820px) {
    width: 99%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div {
    width: 100%;
  }

  .label {
    margin-top: 2rem;

    label {
      cursor: pointer;
    }

    width: 100%;
    padding: 0 1.3rem;
    height: 5rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.4rem;
    margin-top: 1rem;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    outline: 0;
    color: #847d7d;
  }
  input,
  select {
    width: 100%;
    padding: 0 1.3rem;
    height: 5rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-size: 1.4rem;
    margin-top: 1rem;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    outline: 0;
    color: #847d7d;
    ::placeholder {
      font-weight: bolder;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      font-weight: 100;
      color: #847d7d;
    }
    :focus {
      border-bottom: 0.19px solid #1ba6e2;
      //transition: 2s ease-in-out;
    }
  }
  input[type="file"] {
    display: none;
  }
  select {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 1.5rem;
    color: #847d7d;
  }
  button {
    margin: 3rem 0;
    border: none;
    position: static;
    font-family: Comfortaa;
    width: 20rem;
    border-radius: 4rem;
    background: ${({ theme }) => theme.colors.primary.xblue};
    text-align: center;
    padding: 1.5rem 1rem;
    font-size: ${({ theme }) => theme.font.sizes.small};
    color: #fff;
    :hover {
      background-color: #1ba6e2;
    }
  }
`;

export const ErrorMessage = styled.label`
  width: 100%;
  color: red;
  position: relative;
  //margin-left: 0.2rem;
  top: 0.3rem;
  font-weight: 400;
  font-size: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
