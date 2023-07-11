import { ReactNode } from "react";
import { Container } from "./styles";

export type TextContainerProps = {
  children: ReactNode;
  margintop?: string;
  marginbottom?: string;
};

export const TextContainer = ({ children, ...props }: TextContainerProps) => {
  return <Container {...props}>{children}</Container>;
};
