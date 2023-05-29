import React from "react";
import Image from "next/image";

import { Triangle, ThreeDots } from "react-loader-spinner";
import * as S from "./styles";

const loading: React.FC = () => {
  return (
    <S.Container>
      <Triangle
        height="90"
        width="90"
        color="#7016d0"
        ariaLabel="triangle-loading"
        visible={true}
      />

      <Image src="/assets/portal2.png" width={290} height={90} alt="logo" />
    </S.Container>
  );
};

export default loading;
