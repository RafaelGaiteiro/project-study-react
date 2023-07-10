import { ReactNode } from "react";
import { Container } from "./styles";

type TextContainerProps = {
  children: ReactNode;
};

export const TextContainer = ({ children }: TextContainerProps) => {
  return <Container>{children}</Container>;
};
