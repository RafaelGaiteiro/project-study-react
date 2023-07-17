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
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }
  
  10%, 30%, 50%, 70%, 90% {
    transform: translate3d(-2px, 0, 0);
  }

  20%, 40%, 60%, 80% {
    transform: translate3d(2px, 0, 0);
  }
}



  animation: animationAlert 0.6s ease-in-out;
`;
