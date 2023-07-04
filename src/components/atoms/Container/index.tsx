import { ReactNode } from "react";
import { ContainerComponent } from "./styles";

export interface IContainerProps {
  children: ReactNode;
  display?: string;
  justifycontent?: string;
  alignitems?: string;
  gap?: string;
  rowgap?: string;
  columngap?: string;
  height?: string;
  width?: string;
  padding?: string;
  margin?: string;
}

export const Container = ({ children, ...props }: IContainerProps) => {
  return <ContainerComponent {...props}>{children}</ContainerComponent>;
};
