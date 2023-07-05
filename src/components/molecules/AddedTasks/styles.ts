import { styled } from "styled-components";

export const TaskCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  flex-direction: row;
  background-color: #1c828a;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  transition: 0.2s;
  transform: translate(0px);

  &&:hover {
    transform: translate(3px);
  }
`;

export const Text = styled.p`
  width: 100%;
  background-color: #22a0a0;
  color: white;
  font-size: 13px;
  font-weight: 500;
  padding: 10px;
  border-radius: 10px;
`;
