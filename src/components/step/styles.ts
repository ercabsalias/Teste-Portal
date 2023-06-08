import styled from "styled-components";
import { StepProps } from "./type";

export const IconsContainer = styled.div`
  margin: 2rem;
  display: flex;
  align-items: center;
  > div:nth-child(${({ step }: StepProps) => step}) {
    div {
      div {
        color: #1ba6e2;
        background-color: #fff;
        border-radius: 50%;
      }
    }
  }
  > div {
    > div {
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        border: 1px solid #a1d3f0;
      }
      color: #a1d3f0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    p {
      color: #a1d3f0;
      font-weight: 500;
      text-align: start;
    }
  }
  @media screen and (max-width: 620px) {
    width: 100%;
    margin: auto;
    padding: 2rem 0;
  }
  hr {
    width: 5rem;
  }
`;
