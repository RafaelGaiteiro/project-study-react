import { styled } from "styled-components";

export const Container = styled.div`
  grid-area: HD;

  display: flex;
  align-items: center;
  gap: 10px;

  background-color: #120909;
`;

export const Logo = styled.img`
  width: 100px;
`;

export const LinkGroup = styled.ul`
  display: flex;
`;

export const Link = styled.li`
  font-size: 18px;
  font-weight: 500;
  color: white;

  list-style: none;
  cursor: pointer;
  margin: 10px;
  padding: 5px;
  transition: 0.3s;

  &&:hover {
    background-color: #0989a8;
    color: white;
    padding: 5px;
    border-radius: 5px;
    transition-duration: 0.3s;
  }

  &&:active {
    transition: none;
    background-color: #11242f;
  }
`;
