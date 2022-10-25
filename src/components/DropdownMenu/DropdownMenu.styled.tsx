import styled from "styled-components";

const DropdownMenuContainer = styled.div`
  height: 8vh;
  padding: 0 1rem 0 1rem;
  margin: 0 2rem 0 2rem;
  display: flex;
  align-items: center;
  /* border: 2.5px solid white; */

  span {
    color: white;
  }
`;

const DropdownMenuButton = styled.div`
  background-color: green;
  height: 8vh;
  padding: 0 1rem 0 1rem;
  margin: 0 2rem 0 2rem;
  display: flex;
  align-items: center;
  border: 2.5px solid white;

  a {
    color: white;
  }
`;

const DropdownMenuList = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  position: absolute;
  top: 6rem;
  list-style: none;
  text-align: start;
  color: white;
`;

const DropdownMenuItem = styled(DropdownMenuButton)`
  background-color: green;
  width: 10rem;
  height: 8vh;

  :hover {
    background-color: blue;
  }
`;
export {
  DropdownMenuContainer,
  DropdownMenuList,
  DropdownMenuButton,
  DropdownMenuItem,
};
