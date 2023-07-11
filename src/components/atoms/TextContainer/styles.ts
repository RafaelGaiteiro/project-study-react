import { styled } from "styled-components";
import { TextContainerProps } from ".";

export const Container = styled.div<TextContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 4px;
  margin-top: ${(props) => (props.margintop ? props.margintop : "0px")};
  margin-bottom: ${(props) =>
    props.marginbottom ? props.marginbottom : "0px"};
`;
