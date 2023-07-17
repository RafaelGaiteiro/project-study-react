import { ReactNode } from "react";
import { Container } from "./styles";

type MessageAlertProps = {
  children: ReactNode;
};

export const MessageAlert = ({ children }: MessageAlertProps) => {
  return <Container>{children}</Container>;
};
