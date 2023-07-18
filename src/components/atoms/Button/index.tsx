import { ReactNode } from "react";
import { Flex } from "../Flex";
import { ButtonComponent } from "./styles";

export type ButtonProps = {
  type?: "button" | "reset" | "submit";
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  width?: string;
};

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <Flex padding="4px 0">
      <ButtonComponent {...props}>{children}</ButtonComponent>
    </Flex>
  );
};
