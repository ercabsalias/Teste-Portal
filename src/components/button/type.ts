import { ButtonHTMLAttributes } from "react";

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  Icon: React.ReactNode;
  textName: React.ReactNode;
} & ButtonTypes;
