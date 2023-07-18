import { ReactNode } from "react";
import { InputGroupComponent } from "./styles";

export type IInputGroupProps = {
  children: ReactNode;
};

export const InputGroup = ({ children }: IInputGroupProps) => {
  return <InputGroupComponent>{children}</InputGroupComponent>;
};
