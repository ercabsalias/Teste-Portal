import styled from "styled-components";

interface showMenuProps {
  showMenu: boolean;
}

export const Wrapper = styled.div``;

export const MainContainer = styled.main`
  background-color: #161d26;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6.5rem;
  font-family: Comfortaa;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.div`
  color: #9fa0ad;
  display: flex;
  margin: 5%;

  li {
    padding: 0.9rem 3rem;
    font-size: 1.7rem;
    cursor: pointer;
    border-radius: 0.3rem;

    :hover {
      color: #fff;
      background-color: #090b0f;
    }
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const ContentLeft = styled.div``;

export const MenuMobile = styled.div`
  display: none;
  color: #fff;
  padding: 0.5rem;
  font-size: 2.5rem;
  width: 3.5rem;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MenuBar = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  top: 10rem;
  z-index: 10000;
  @media screen and (max-width: 500px) {
    display: block;
  }

  padding: ${({ showMenu }: showMenuProps) => (showMenu ? "1rem" : "0rem")};
  background-color: #161d26;
  height: ${({ showMenu }: showMenuProps) => (showMenu ? "15rem" : "0rem")};
  transition: 0.3s;
  li {
    display: none;
    position: relative;
    color: #fff;
    border-radius: 0.3rem;
    padding: 1rem;
    background-color: #161d30;
    margin: 0.5rem;
    cursor: pointer;

    @media screen and (max-width: 500px) {
      display: ${({ showMenu }: showMenuProps) =>
        showMenu ? "block" : "none"};
    }
  }
  li:hover {
    background-color: ${({ theme }) => theme.colors.primary.xblue};
  }
`;
