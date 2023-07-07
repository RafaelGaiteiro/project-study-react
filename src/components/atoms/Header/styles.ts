import { styled } from "styled-components";

export const Container = styled.div`
  grid-area: HD;

  display: flex;
  align-items: center;
  gap: 10px;

  background-color: #f8f8f8;
`;

export const Logo = styled.img`
  width: 100px;
`;

export const LinkGroup = styled.ul`
  display: flex;
  width: 100%;
`;

export const Link = styled.li`
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
  width: 100%;

  list-style: none;
  cursor: pointer;
  margin: 10px;
  padding: 4px;
  transition: 0.3s;

  border-radius: 4px;
  background-color: #1b1e1f;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  &&:hover {
    background-color: #1a6e84;
    color: white;
    padding: 4px;
    border-radius: 4px;
    transition-duration: 0.3s;
  }

  &&:active {
    transition: none;
    background-color: #154c5e;
  }
`;
