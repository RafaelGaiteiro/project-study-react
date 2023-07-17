import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 4px 8px;
  background-color: #db3f69;
  width: 100%;

  color: white;
  font-size: 13px;
  font-weight: 600;
  border-radius: 4px;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  @keyframes animationAlert {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(16px);
    }
    100% {
      transform: translateX(0);
    }
  }

  animation: 1s ease-out 0s 1 animationAlert;
`;
