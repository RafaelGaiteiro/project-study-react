import { ReactNode } from "react";
import { ContainerComponent } from "./styles";

export interface IContainerProps {
  children: ReactNode;
  justifycontent?:
    | "start"
    | "end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
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
  backgroundcolor?: string;
  radius?: string;
}

export const Flex = ({ children, ...props }: IContainerProps) => {
  return <ContainerComponent {...props}>{children}</ContainerComponent>;
};
