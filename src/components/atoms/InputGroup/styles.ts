import { styled } from "styled-components";
import { IInputGroupProps } from ".";

export const InputGroupComponent = styled.div``;

export const Header = styled.h1`
  background-color: transparent;
  padding-left: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  color: white;
  user-select: none;
  border-radius: 4px;
`;

export const Content = styled.div<IInputGroupProps>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 4px;
  padding-left: ${({ leftspacing }) =>
    leftspacing === "true" ? "12px" : "4px"};
`;
