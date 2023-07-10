import { styled } from "styled-components";

interface IStyledInputProps {
  bordercolor: string;
}

export const TextAreaComponent = styled.textarea<IStyledInputProps>`
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  padding: 10px 16px;
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.1);
  background-color: #3b3b3b;
  color: #b0a99f;
  border: ${(props) =>
    props.bordercolor === "true"
      ? "solid 2px #22A0A0"
      : "solid 2px transparent"};
  resize: none;
`;
