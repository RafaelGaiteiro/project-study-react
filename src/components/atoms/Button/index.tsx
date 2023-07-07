import { ReactNode } from "react";
import { Container } from "../Container";
import { ButtonComponent } from "./styles";

type ButtonProps = {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
};

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <Container>
      <ButtonComponent {...props}>{children}</ButtonComponent>
    </Container>
  );
};
