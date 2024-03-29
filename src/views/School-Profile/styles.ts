import styled from "styled-components";

interface BannerFundo {
  backgroundCapa: any;
}

export const Container = styled.div`
  background-color: #f3f3f3;
`;

export const Opacity = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 1rem 6rem;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.7);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const CardBackground = styled.div`
  background-image: url(${({ backgroundCapa }: BannerFundo) => backgroundCapa});

  width: 100%;
  height: 31rem;

  //background-color: ${({ theme }) => theme.colors.primary.xblue};
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
  color: #fff;
  h2 {
    font-size: 3rem;
    margin-top: -5rem;
  }
  p {
    font-size: 1.7rem;
    color: #333;
  }
`;

export const ButtonSubscribe = styled.button`
  font-size: 1.5rem;
  color: #fff;
  margin-top: -5rem;
  border: 0;
  font-weight: 800;
  background-color: ${({ theme }) => theme.colors.primary.xblue};
  padding: 0 5rem;
  border-radius: 0.25rem;
  font-family: Comfortaa;
  height: 4.4rem;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const MainContainer = styled.div`
  position: relative;
  margin: auto;
  padding: 2rem;
  bottom: 7rem;
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const Title = styled.h2`
  color: #535252;
  font-size: 2.1rem;
  margin-bottom: 0.5rem;

  font-weight: 800;

  @media screen and (max-width: 768px) {
    line-height: 2rem;
    font-weight: 900;
  }

  @media screen and (max-width: 668px) {
    font-size: 1.4rem;
    font-weight: 900;
  }
`;

export const SectionDescription = styled.div`
  display: flex;
  padding-top: 2rem;
  font-size: 1.3rem;
  color: #535252;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const MenuContainer = styled.div`
  border-radius: 0.5rem;
  height: 12rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  @media screen and (max-width: 1400px) {
    height: 18rem;
    flex-direction: column;
  }
`;

export const UserSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

interface Links {
  isActive: boolean;
}

export const LinkItem = styled.a<Links>`
  padding: 1rem 2rem;
  color: ${({ isActive }) => (isActive ? "#fff" : "#1C9DEA")};
  border-radius: 3rem;

  background: ${({ isActive }) => (isActive ? "#1C9DEA" : "transparent")};

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }

  :hover {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary.xblue};
  }
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;

  gap: 1rem;

  h1 {
    @media screen and (max-width: 1400px) {
      margin-right: 0;
    }
    @media screen and (max-width: 768px) {
      padding: 1rem 2rem;
      font-size: 1rem;
      margin-top: 0;
      margin-bottom: -2rem;
    }
    color: #161d26;
    margin-right: 6rem;
    font-weight: 100;
    background-color: #161d26;
    padding: 2rem 5rem;
    margin-top: -6rem;
    font-size: 1.8rem;
    color: #fff;
  }

  li {
    text-align: center;

    display: flex;
  }

  @media screen and (max-width: 1400px) {
    margin-top: 2rem;

    width: 100%;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;

    li {
      line-height: 1.3rem;
    }
  }
`;

export const SchoolName = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0.005rem;
  h2 {
    font-weight: 500;
  }
  span {
    color: #999;
  }
`;

export const TitleFeedBack = styled.div`
  margin-top: 2rem;
`;

export const FormularioFeedBack = styled.form`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 80%;
    padding: 0 1.5rem;
    height: 5rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1.4rem;

    outline: 0;

    &::placeholder {
      color: var(--text-body);
      font-family: Comfortaa;
    }

    & + input {
      margin-top: 1rem;
    }
  }

  textarea {
    width: 80%;
    padding: 2rem;
    height: 10rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1.4rem;
    outline: 0;
    font-family: Comfortaa;
    margin-top: 1rem;
    &::placeholder {
      color: var(--text-body);
      font-family: Comfortaa;
    }
  }

  button {
    transition: border-color 0.2s;
    border: none;
    background-color: #1c9deb;
    padding: 1.2rem 7rem;
    color: #fff;
    font-family: Comfortaa;
    margin-top: 1.5rem;
    transition: 0.3s;
    &:hover {
      background-color: #2676a5;
    }
  }
`;

export const ContainerCard = styled.div`
  width: 100%;
  height: auto;
  gap: 3rem;
  display: flex;

  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
    align-items: center;
  }
`;

export const LittleCard = styled.div`
  margin-top: 2rem;
  background-color: #fff;
  height: 20rem;
  width: 50%;
  padding: 2rem 2rem;
  div:first-child {
    h2 {
      color: #333;
    }

    padding: 1.5rem;
    border-bottom: 1px solid #ccc;
  }

  &:first-child {
    margin-right: 3rem;
  }
`;

export const PageTable = styled.div`
  width: 99%;
  display: flex;
  justify-content: flex-end;
  display: flex;
  margin-top: 3rem;

  p {
    cursor: pointer;
    border: solid;
    //background-color: #1c9deb;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.3rem;
    padding: 0.5rem 1rem;
    border: 1px solid #999;
    width: 3rem;
  }
  p:first-child {
    color: #fff;
    border: none;
    background-color: #1c9deb;
  }
`;

export const AreaFormacao = styled.div`
  margin-top: 2rem;
  background-color: #fff;
  //height: 50vh;
  width: 100%;
  padding: 2rem 2rem;

  div:first-child {
    h2 {
      color: #333;
      border-bottom: 1px solid #999;
      padding: 1rem 0;

      @media screen and (max-width: 768px) {
        font-size: 1.8rem;
        text-align: center;
      }
    }

    padding: 1rem;
  }
`;

export const CardAreaFormacao = styled.div`
  display: flex;

  justify-content: flex-end;
  align-items: center;
  margin-top: 3rem;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (max-width: 568px) {
    justify-content: center;
  }
`;

export const Historial = styled.div`
  margin-top: 2rem;
  background-color: #fff;
  height: 33rem;
  width: 100%;
  padding: 2rem 2rem;
  line-height: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  div:first-child {
    margin-bottom: 1rem;

    width: 100%;
    display: flex;

    justify-content: center;
    align-items: center;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
  }
`;

export const FeedBack = styled.div`
  margin-top: 2rem;
  background-color: #fff;
  height: 40rem;
  width: 100%;
  padding: 2rem 2rem;
  line-height: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  div:first-child {
    margin-bottom: 1rem;

    width: 100%;
    display: flex;

    justify-content: center;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
`;

export const CenterSide = styled.div``;

export const Item = styled.div`
  margin-top: 2rem;
  background-color: #fff;
  padding: 1rem;
  span {
    color: ${({ theme }) => theme.colors.primary.xblue};
  }
`;

export const Publication = styled.div``;

export const UserInfo = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Avatar = styled.div``;

export const RightSide = styled.div``;

export const Noticia = styled.div`
  display: flex;
  align-items: center;
  color: #6d6d6d;
  margin-top: 1rem;
  span {
    padding: 1rem;
    font-size: 2rem;
  }
  a {
    color: ${({ theme }) => theme.colors.primary.xblue};
  }
`;
