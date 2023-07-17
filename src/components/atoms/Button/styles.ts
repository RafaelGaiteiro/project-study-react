import { styled } from "styled-components";
import { ButtonProps } from ".";

export const ButtonComponent = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  height: 40px;
  width: ${(props) => props.width};

  font-size: 13px;
  font-weight: 600;
  border-radius: 10px;
  background-color: #6b6b6b;
  color: #b0a99f;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  transition: 0.3s all;
  box-sizing: border-box;

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
