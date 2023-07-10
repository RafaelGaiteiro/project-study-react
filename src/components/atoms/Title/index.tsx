import { ReactNode } from "react";
import { TitleComponent } from "./styles";

type TitleProps = {
  children: ReactNode;
};

export const Title = ({ children }: TitleProps) => {
  return <TitleComponent>{children}</TitleComponent>;
};
