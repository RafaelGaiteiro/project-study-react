import { styled } from "styled-components";

export const ButtonComponent = styled.button`
  font-size: 13px;
  font-weight: 600;
  padding: 10px;
  border-radius: 10px;
  background-color: #6b6b6b;
  color: #b0a99f;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  transition: 0.5s all;

  &&:active {
    transform: scale(1.1);
  }
`;
