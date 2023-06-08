import styled from "styled-components";

export const Container = styled.div`
  height: max-height;
  background-color: #f7fcfe;
`;

export const CardBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 25rem;
  background-color: #19293e;
  padding: 1rem 6rem;
  color: #fff;
  h2 {
    font-size: 4rem;
  }
  p {
    font-size: 1.7rem;
    color: #333;
  }
  button {
    border: none;
    height: 4rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    border-radius: 0.3rem;
    svg {
      margin: 0.3rem;
    }
  }
`;

export const CenterContent = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;

  h2 {
    font-size: 2.5rem;
    font-weight: 100;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
  span {
    color: #a1d3f0;
    margin-top: 1rem;
  }
`;

export const Paragraph = styled.p`
  font-weight: 500;
  text-align: start;
  max-width: 40rem;
  margin: auto;
`;

export const WrapperContainer = styled.div`
  button {
    z-index: 100;
    position: absolute;
    top: 2rem;
  }
`;
