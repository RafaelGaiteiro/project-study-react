import { ReactNode } from "react";
import { BoxComponent } from "./styles";
import { Title } from "./styles";

type MainBoxProps = {
  children: ReactNode;
  title: ReactNode;
};

export const MainBox = ({ children, title }: MainBoxProps) => {
  return (
    <BoxComponent>
      <Title>{title}</Title>
      {children}
    </BoxComponent>
  );
};
