import { styled } from "styled-components";
import { IGridProps } from ".";

export const ContainerComponent = styled.div<IGridProps>`
  display: grid;
  grid-template-areas: "A B";
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 4px;
`;
