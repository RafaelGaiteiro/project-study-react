import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled.img`
  width: 100px;
`;
export const LinkGroup = styled.ul``;

export const Link = styled.li`
  display: inline-block;
  list-style: none;
  cursor: pointer;
  margin: 10px;
  padding: 5px;
  transition: 0.3s all;

  &&:hover {
    background-color: #0989a8;
    color: white;
    padding: 5px;
    border-radius: 5px;
    transition-duration: 0.5s;
  }

  &&:active {
    background-color: #11242f;
  }
`;
