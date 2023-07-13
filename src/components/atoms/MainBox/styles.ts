import { styled } from "styled-components";
import { MainBoxStyled } from ".";

export const BoxComponent = styled.div<MainBoxStyled>`
  display: flex;
  justify-content: ${(props) => props.justifycontent};
  align-items: flex-start;
  gap: 10px;
  flex-wrap: wrap;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: max-content;

  box-sizing: border-box;
  background-color: #155163;

  border-radius: 8px;

  padding-top: 4px;
  padding-right: 4px;
  padding-bottom: 4px;
  padding-left: 4px;
`;

export const Title = styled.h1`
  background-color: transparent;
  padding-left: 12px;
  border-radius: 4px;
  color: white;
  font-size: 37px;
  font-weight: 700;
  color: white;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;
