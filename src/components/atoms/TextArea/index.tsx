import { useState } from "react";
import { TextAreaComponent } from "./styles";

export interface IInputProps {
  type: string;
  placeholder: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export const TextArea = ({ ...props }: IInputProps) => {
  const [borderColor, setBorderColor] = useState<boolean>(false);

  return (
    <TextAreaComponent
      {...props}
      bordercolor={borderColor ? "true" : "false"}
      onFocus={() => setBorderColor(true)}
      onBlur={() => setBorderColor(false)}
    />
  );
};
