import { styled } from "styled-components";

export const TaskBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  flex-wrap: wrap;
  width: 50%;
  height: max-content;

  box-sizing: border-box;
  background-color: #155163;

  border-radius: 5px;

  padding: 10px;
`;

export const TaskCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  flex-direction: row;
  background-color: #1c828a;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  transition: 0.2s;
  transform: translate(0px);

  @keyframes animationTaskCard {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(10px);
    }
    100% {
      transform: translateX(0);
    }
  }

  animation: 1s ease-out 0s 1 animationTaskCard;

  &&:hover {
    transform: translate(3px);
  }
`;

export const Text = styled.p`
  width: 100%;
  background-color: #22a0a0;
  color: white;
  font-size: 13px;
  font-weight: 500;
  padding: 10px;
  border-radius: 10px;
`;
