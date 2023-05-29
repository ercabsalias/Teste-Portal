import React from "react";
import * as S from "./styles";
import { ButtonProps } from "./type";

const Button: React.FC<ButtonProps> = ({
  type = "submit",
  Icon,
  onClick,
  textName,
}) => {
  return (
    <S.Button type={type} onClick={onClick} className="button">
      <span>{Icon}</span>
      {textName}
    </S.Button>
  );
};

export default Button;

//Clean
