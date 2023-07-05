import { styled } from "styled-components";

interface IStyledInputProps {
  bordercolor: boolean;
}

export const InputComponent = styled.input<IStyledInputProps>`
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  border-radius: 10px;
  padding: 10px 15px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  background-color: #3b3b3b;
  color: #b0a99f;
  border: ${(props) =>
    props.bordercolor ? "solid 2px #22A0A0" : "solid 2px transparent"};
`;
