import styled from "styled-components";

export const Paragraph=styled.p`
    font-weight: 500;
    text-align: start;
    max-width: 45rem;
    margin: auto;
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

export const FormContainer=styled.div`
    display:flex ;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    input,select{
        border: none;
        border-bottom:.1px solid #cacaca;
        margin-top: 2rem;
        font-size: 1rem;
        padding: 1.3rem;
        width: 100%;
        max-width: 45rem;
        flex: 1;
        font-size: 1.2rem;
        ::placeholder{
            font-weight: bolder;
            color:#a9a6b3;
        }
        :focus{
            border-bottom:.1px solid #1ba6e2;
            transition: 2s ease-in-out;
        }
    }
    select{
        font-size: 1.5rem;
        color:#a9a6b3;        
    }
    button{
        margin: 3rem 0;
        border: none;
        position: static;
        width: 20rem;
        border-radius: 4rem;
        background: ${({ theme }) => theme.colors.primary.xblue};
        text-align: center;
        padding: 1.5rem 1rem;
        font-size: ${({ theme }) => theme.font.sizes.small};
        color: #fff;
        :hover{
            border-color: ${({ theme }) => theme.colors.primary.xblue};
            border-color: var(--cui-input-focus-border-color, ${({ theme }) => theme.colors.primary.xblue});
            box-shadow: 0 0 0 0.25rem rgb(20 31 255 / 25%);
        }
    }
`;

export const ErrorMessage = styled.label`
  color: #c70606;
  position: relative;
  margin-left: 0.2rem;
  top: 0.3rem;
  font-weight: 400;
  font-size: ${({ theme }) => theme.font.sizes.midle};
`
