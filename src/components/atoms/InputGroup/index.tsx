import { ReactNode } from "react";
import { InputGroupComponent } from "./styles";

type IInputGroupProps = {
  children: ReactNode;
};

export const InputGroup = ({ children, ...props }: IInputGroupProps) => {
  return <InputGroupComponent {...props}>{children}</InputGroupComponent>;
};
