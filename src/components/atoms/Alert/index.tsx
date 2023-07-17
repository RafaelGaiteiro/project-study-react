import { ReactNode } from "react";
import { ContainerAlert } from "./styles";

export type AlertProps = {
  children: ReactNode;
  backgroundcolor: string;
};
export const Alert = ({ backgroundcolor, children }: AlertProps) => {
  return (
    <ContainerAlert backgroundcolor={backgroundcolor}>
      {children}
    </ContainerAlert>
  );
};
