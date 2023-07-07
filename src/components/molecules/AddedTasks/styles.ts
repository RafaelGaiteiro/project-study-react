import { styled } from "styled-components";

export const BoxRight = styled.div`
  width: 50%;
`;

export const BoxLeft = styled.div`
  width: 50%;
`;

export const Title = styled.h1`
  font-size: 37px;
  font-weight: 700;
  padding: 4px 16px;
  color: white;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

export const TaskBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
  height: max-content;

  box-sizing: border-box;
  background-color: #155163;

  border-radius: 8px;

  padding: 4px;
`;

export const TaskCard = styled.div`
  display: flex;
  column-gap: 8px;
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

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  height: 100%;
  width: 100%;

  background-color: #22a0a0;
  color: white;
  font-size: 13px;
  font-weight: 500;
  padding: 10px;
  border-radius: 4px;

  word-break: break-word;
  min-height: 50px;

  span {
    color: white;
    font-size: 13px;
    font-weight: 600;
    padding-right: 10px;

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }
`;
