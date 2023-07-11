import { ReactNode } from "react";
import { SelectComponent } from "./styles";

type ComboBoxProps = {
  children: ReactNode;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
};

export const Select = ({ children, ...props }: ComboBoxProps) => {
  return <SelectComponent {...props}>{children}</SelectComponent>;
};
