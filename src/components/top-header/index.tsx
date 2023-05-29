import * as S from "./styles";
import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/med.png";

const topHeader = () => {
  return (
    <S.TopHeader>
      <Image src={logo} width={150} height={30} alt="med" />
    </S.TopHeader>
  );
};
export default topHeader;
