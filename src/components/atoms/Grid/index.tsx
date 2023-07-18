import { ReactNode } from "react";
import { ContainerComponent } from "./styles";

export interface IGridProps {
  children: ReactNode;
}

export const Grid = ({ children }: IGridProps) => {
  return <ContainerComponent>{children}</ContainerComponent>;
};
