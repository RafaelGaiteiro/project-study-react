import { ReactNode } from "react";
import { BoxComponent } from "./styles";

type MainBoxProps = {
  children: ReactNode;
};

export const MainBox = ({ children }: MainBoxProps) => {
  return <BoxComponent>{children}</BoxComponent>;
};
