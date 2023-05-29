import styled from "styled-components";

export const WrapperContainer=styled.div`
    
`;

export const Paragraph=styled.p`
    font-weight: 500;
    text-align: start;
    max-width: 40rem;
    margin: auto;
`;

export const CardBackground=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 25rem;
    background-color:#19293e;
    padding: 1rem 6rem;
    color: #fff;
    h2{
        font-size: 4rem;
    }
    p{
        font-size: 1.7rem;
        color: #333;
    }
    button{
        border: none;
        height: 4rem;
        padding: 1rem;
        display: flex;
        align-items: center;
        border-radius: .3rem;
        svg{
            margin:.3rem;
        }
    }
`;


export const FormCard=styled.div`
    background-color: #fff;
    box-shadow:0 .5rem 1.5rem rgba(0,0,0,0.1);
    position: relative;
    margin:auto;
    padding: 5rem 2rem;
    bottom: 4rem;
    width: 70%;
    border-radius: 1rem;
    div:first-child{
        border-bottom: 1px solid #ccc;
        h2{
            padding:1rem 0;
        }
    }
    
    @media screen and  (max-width: 820px) {
        width: 99%;
    }
`;

export const Forms=styled.div`
    display:flex ;
    align-items: center;
    justify-content: center;
    div{
        margin: 2rem;
        color:#fff;
        background-color:#1ba6e2 ;
        font-size: 10rem;
        width: 20rem;
        height:20rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        
        @media screen and  (max-width: 820px) {
            width: 15rem;
            height: 15rem;
        }
    } 
`;
