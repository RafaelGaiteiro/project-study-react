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

  transition: 0.3s all;

  &&:hover {
    color: white;
    background-color: #1a6e84;
    transform: scale(1.03);
  }

  &&:active {
    color: white;
    background-color: #154c5e;
    transform: scale(1.05);
  }
`;
