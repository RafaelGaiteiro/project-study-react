import { ReactNode } from "react";
import { LabelComponent } from "./styles";

type LabelProps = {
  children: ReactNode;
};

export const Label = ({ children }: LabelProps) => {
  return <LabelComponent>{children}</LabelComponent>;
};
