import styled from "styled-components";

export const Container = styled.footer`
  position: relative;
  background-color: #161d26;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 100%;
`;

export const FooterInformations = styled.div`
  display: flex;
  justify-content: center;
  h2 {
    font-size: ${({ theme }) => theme.spacings.xxxmultipleeight};
    margin-bottom: ${({ theme }) => theme.spacings.xmultipleeight};
  }
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 9rem;
  padding: 4rem;
  width: 85%;
  margin: auto;
  color: ${({ theme }) => theme.colors.tertiary.xcinza};
`;

export const PortalSocialMedia = styled.div`
  max-width: 25rem;
  p {
    text-align: justify;
    margin: ${({ theme }) => theme.spacings.xxmultipleeight} 0;
    color: ${({ theme }) => theme.colors.tertiary.xxcinza};
    font-size: ${({ theme }) => theme.font.sizes.small};
    line-height: 2rem;
  }
  div {
    display: flex;
    justify-content: center;
    gap: 4.6rem;
    svg {
      font-size: 2.5rem;
    }
  }
`;

export const Suport = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: #ccc;
    margin-bottom: ${({ theme }) => theme.spacings.xxxmultipleeight};
  }
`;

export const DirectoReserve = styled.div`
  color: #000;
  width: 100%;
  top: 1.5rem;
  display: flex;
  justify-content: space-evenly;
  padding: 0.9rem;
  align-items: center;
`;

export const Resources = styled(Suport)``;

export const GateMed = styled(Suport)``;
