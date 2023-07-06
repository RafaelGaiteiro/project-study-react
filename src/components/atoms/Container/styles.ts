import { styled } from "styled-components";
import { IContainerProps } from ".";

export const ContainerComponent = styled.div<IContainerProps>`
  display: flex;
  justify-content: ${(props) => props.justifycontent};
  align-items: ${(props) => props.alignitems};
  flex-direction: ${(props) => props.flexdirection};
  gap: ${(props) => props.gap};
  row-gap: ${(props) => props.rowgap};
  column-gap: ${(props) => props.columngap};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  flex-wrap: ${(props) => props.flexwrap};
`;
