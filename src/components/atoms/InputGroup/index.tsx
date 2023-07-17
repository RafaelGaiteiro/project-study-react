import { ReactNode } from "react";
import { Content, Header, InputGroupComponent } from "./styles";

export type IHeaderProps = {
  title?: ReactNode;
};

export type IInputGroupProps = {
  children: ReactNode;
  leftspacing?: "true" | "false";
};

export const InputGroup = ({
  children,
  title,
  leftspacing,
}: IInputGroupProps & IHeaderProps) => {
  return (
    <InputGroupComponent>
      <Header>{title}</Header>
      <Content leftspacing={leftspacing}>{children}</Content>
    </InputGroupComponent>
  );
};
