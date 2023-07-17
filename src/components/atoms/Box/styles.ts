import { styled } from "styled-components";
import { BoxProps } from ".";

export const BoxComponent = styled.div<BoxProps>`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  gap: 10px;
  width: 100%;
  background-color: #1b1e1f;
  border-radius: 8px;
  padding: 4px;
`;
