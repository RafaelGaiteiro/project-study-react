import { ReactNode } from "react";
import { Header, InputGroupComponent } from "./styles";

type IInputGroupProps = {
  children: ReactNode;
  title?: ReactNode;
};

export const InputGroup = ({ children, title, ...props }: IInputGroupProps) => {
  return (
    <InputGroupComponent {...props}>
      <Header>{title}</Header>
      {children}
    </InputGroupComponent>
  );
};
