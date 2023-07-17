import { ReactNode } from "react";
import { BoxComponent } from "./styles";

export type BoxProps = {
  children: ReactNode;
};

export const Box = ({ children }: BoxProps) => {
  return <BoxComponent>{children}</BoxComponent>;
};
