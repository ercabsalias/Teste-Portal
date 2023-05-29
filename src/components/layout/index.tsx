import React from "react";

import Header from "../header";

import TopHeader from "../top-header";
import * as S from "./styles";

import { Footer } from "../footer";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Wrapper>
      <S.Content>
        <TopHeader />
        <Header />
        <S.Main>{children}</S.Main>
        <Footer />
      </S.Content>
    </S.Wrapper>
  );
};
