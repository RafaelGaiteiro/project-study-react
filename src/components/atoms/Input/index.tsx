import { useState } from "react";
import { InputComponent } from "./styles";

export interface IInputProps {
  type: string;
  placeholder: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export const Input = ({ ...props }: IInputProps) => {
  const [borderColor, setBorderColor] = useState<boolean>(false);

  return (
    <InputComponent
      {...props}
      bordercolor={borderColor ? "true" : "false"}
      onFocus={() => setBorderColor(true)}
      onBlur={() => setBorderColor(false)}
    />
  );
};
