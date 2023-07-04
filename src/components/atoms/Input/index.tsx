import { InputComponent } from "./styles";

interface IInputProps {
  type: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export const Input = ({ ...props }: IInputProps) => {
  return <InputComponent {...props} />;
};
