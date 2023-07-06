import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "AS HD"
    "AS CT";
  grid-template-rows: 80px auto;
  grid-template-columns: 200px auto;
  height: 100%;
  background-color: #f8f8f8;
`;
