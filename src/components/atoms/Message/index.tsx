import { ReactNode } from "react";
import { ContainerMessage } from "./styles";

export type MessageProps = {
  children: ReactNode;
  backgroundcolor: string;
};
export const Message = ({ backgroundcolor, children }: MessageProps) => {
  return (
    <ContainerMessage backgroundcolor={backgroundcolor}>
      {children}
    </ContainerMessage>
  );
};
