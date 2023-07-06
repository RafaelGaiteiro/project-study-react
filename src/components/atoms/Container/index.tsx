import { ReactNode } from "react";
import { ContainerComponent } from "./styles";

export interface IContainerProps {
  children: ReactNode;
  justifycontent?: string;
  flexdirection?: "row" | "row-reverse" | "column" | "column-reverse";
  alignitems?: "stretch" | "center" | "start" | "end";
  gap?: string;
  rowgap?: string;
  columngap?: string;
  height?: string;
  width?: string;
  padding?: string;
  margin?: string;
  flexwrap?: "nowrap" | "wrap" | "wrap-reverse";
}

export const Container = ({ children, ...props }: IContainerProps) => {
  return <ContainerComponent {...props}>{children}</ContainerComponent>;
};
