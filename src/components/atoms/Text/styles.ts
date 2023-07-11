import { styled } from "styled-components";
import { Font } from ".";

export const Container = styled.div<Font>`
  display: flex;
  font-size: ${({ fontSize }) => fontSize};
  align-items: center;
  gap: 8px;

  background-color: ${(props) =>
    props.disablebackground === "true" ? "transparent" : " #22a0a0"};
  padding: 5px 10px;
  border-radius: 4px;
  color: white;
`;
