import styled from "styled-components";

export const Button = styled.button`
  width: 15rem;
  height: 4rem;
  border: none;
  transition: 0.2s;
  border-radius: 0.3rem;
  background: ${({ theme }) => theme.colors.primary.xblue};
  color: ${({ theme }) => theme.colors.tertiary.white};
  font-size: ${({ theme }) => theme.font.sizes.midle};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Comfortaa;
  span {
    margin: 0 0.7rem;
  }

  :hover {
    cursor: pointer;
    filter: brightness(0.7);
    transition: 2s;
  }
`;
