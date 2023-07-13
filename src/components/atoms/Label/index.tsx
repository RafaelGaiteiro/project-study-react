import { ReactNode } from "react";
import { LabelComponent } from "./styles";

type LabelProps = {
  children: ReactNode;
  htmlFor?: string | undefined;
};

export const Label = ({ children, htmlFor }: LabelProps) => {
  return <LabelComponent htmlFor={htmlFor}>{children}</LabelComponent>;
};
