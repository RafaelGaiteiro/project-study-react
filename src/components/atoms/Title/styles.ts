import { styled } from "styled-components";
import { TitleProps } from ".";

export const TitleComponent = styled.h1<TitleProps>`
  background-color: ${(props) =>
    props.disablebackground === "true" ? "transparent" : " #1c828a"};
  padding: 4px 12px;
  border-radius: 4px;
  color: white;

  font-size: 37px;
  font-weight: 700;
  color: white;
`;
