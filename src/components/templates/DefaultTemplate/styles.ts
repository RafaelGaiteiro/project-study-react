import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "AS HD"
    "AS CT";
  grid-template-rows: 80px auto;
  grid-template-columns: 200px auto;
  background-color: #1b1e1f;
  height: 100%;
`;
