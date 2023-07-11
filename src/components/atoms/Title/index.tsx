import { ReactNode } from "react";
import { TitleComponent } from "./styles";

export type TitleProps = {
  children: ReactNode;
  disablebackground?: "true" | "false";
};

export const Title = ({ children, ...props }: TitleProps) => {
  return <TitleComponent {...props}>{children}</TitleComponent>;
};
