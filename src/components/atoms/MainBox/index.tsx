import { ReactNode } from "react";
import { BoxComponent } from "./styles";
import { Title } from "./styles";

type MainBoxProps = {
  children: ReactNode;
  title: ReactNode;
};

export type MainBoxStyled = {
  width?: string;
  justifycontent?:
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
};

export const MainBox = ({
  children,
  title,
  ...props
}: MainBoxProps & MainBoxStyled) => {
  return (
    <BoxComponent {...props}>
      <Title>{title}</Title>
      {children}
    </BoxComponent>
  );
};
