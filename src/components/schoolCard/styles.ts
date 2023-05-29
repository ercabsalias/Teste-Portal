import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiary.white};
  max-width: 33rem;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: ${({ theme }) => theme.spacings.xxxxxmultipleeight};
  padding: ${({ theme }) => theme.spacings.xxxmultipleeight};
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h3`
  margin-top: ${({ theme }) => theme.spacings.xxxmultipleeight};
  text-align: center;
`;

export const Paragraph = styled.p`
  margin-top: ${({ theme }) => theme.spacings.xxxmultipleeight};
  color: #b5b5b5;
  text-align: center;
`;

export const Button = styled.button`
  margin-top: ${({ theme }) => theme.spacings.xxxmultipleeight};
  width: 100%;
  height: 4rem;
  border: none;
  transition: 0.2s;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.primary.xblue};
  color: ${({ theme }) => theme.colors.tertiary.white};
  font-size: ${({ theme }) => theme.font.sizes.midle};
`;