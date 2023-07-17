import { useState, forwardRef } from "react";
import { InputComponent } from "./styles";

export interface IInputProps {
  id?: string;
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  required?: boolean | undefined;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const [borderColor, setBorderColor] = useState<boolean>(false);

  return (
    <InputComponent
      {...props}
      ref={ref}
      bordercolor={borderColor ? "true" : "false"}
      onFocus={() => setBorderColor(true)}
      onBlur={() => setBorderColor(false)}
    />
  );
});
