import * as S from "./styles";
import Image from "next/image";

const topHeader = () => {
  return (
    <S.TopHeader>
      <Image
        src="https://i.ibb.co/R2T7Y84/med.png"
        width={150}
        height={30}
        alt="med"
      />
    </S.TopHeader>
  );
};
export default topHeader;
