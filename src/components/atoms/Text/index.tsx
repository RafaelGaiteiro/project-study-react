import { ReactNode } from "react";
import { Container } from "./styles";

type TextProps = {
  children: ReactNode;
};

export const Text = ({ children }: TextProps) => {
  return <Container>{children}</Container>;
};
