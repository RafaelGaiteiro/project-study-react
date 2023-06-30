import { styled } from "styled-components";
import { ImageProps } from ".";

export const Container = styled.div``;

export const Img = styled.img<ImageProps>`
  width: ${(props) => props.width};
`;
