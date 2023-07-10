import { ReactNode } from "react";
import { Select } from "./styles";

type ComboBoxProps = {
  children: ReactNode;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
};

export const ComboBox = ({ children, ...props }: ComboBoxProps) => {
  return <Select {...props}>{children}</Select>;
};
