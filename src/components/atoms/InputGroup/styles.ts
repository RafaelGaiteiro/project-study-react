import { styled } from "styled-components";
import { IInputGroupProps } from ".";

export const InputGroupComponent = styled.div<IInputGroupProps>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 4px;
`;
