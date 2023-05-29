import styled from "styled-components";

export const Container=styled.input`
    border: none;
    border-bottom:.1px solid #cacaca;
    margin-top: 2rem;
    font-size: 1rem;
    padding: 1.3rem;
    width: 100%;
    max-width: 40rem;
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
`;