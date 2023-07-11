import { styled } from "styled-components";

export const BoxRight = styled.div`
  width: 50%;
`;

export const BoxLeft = styled.div`
  width: 50%;
`;

export const TaskCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  background-color: #1c828a;
  border-radius: 4px;
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

export const TextTop = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #22a0a0;
  color: white;
  font-size: 15px;
  font-weight: 500;
  padding: 10px;
  border-radius: 4px 4px 0 0;
  word-break: break-word;
`;

export const TextBottom = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #22a0a0;
  color: white;
  font-size: 13px;
  font-weight: 500;
  padding: 10px;
  border-radius: 0 0 4px 4px;
  margin-top: -6px;
  word-break: break-word;
`;
