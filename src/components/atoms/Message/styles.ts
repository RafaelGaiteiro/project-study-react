import { styled } from "styled-components";
import { MessageProps } from ".";

export const ContainerMessage = styled.div<MessageProps>`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 10px;
  background-color: ${(props) => props.backgroundcolor};
  width: 100%;

  color: white;
  font-size: 13px;
  font-weight: 600;
  border-radius: 5px;
`;
