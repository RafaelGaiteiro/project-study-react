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

  @keyframes animationMessage {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(15px);
    }
    100% {
      transform: translateX(0);
    }
  }

  animation: 1s ease-out 0s 1 animationMessage;
`;
