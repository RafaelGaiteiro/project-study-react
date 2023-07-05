import { styled } from "styled-components";

interface IStyledInputProps {
  borderColor: boolean;
}

export const InputComponent = styled.input<IStyledInputProps>`
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  border-radius: 10px;
  padding: 10px 15px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  border: ${(props) =>
    props.borderColor ? "solid 2px #23a2ad" : "solid 2px transparent"};
`;
