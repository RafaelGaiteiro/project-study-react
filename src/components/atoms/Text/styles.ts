import { styled } from "styled-components";
import { Size } from ".";

export const Container = styled.div<Size>`
  display: flex;
  font-size: ${({ fontSize }) => fontSize};
  align-items: center;
  gap: 8px;
  background-color: #22a0a0;
  padding: 5px 10px;
  border-radius: 4px;
  color: white;
`;
