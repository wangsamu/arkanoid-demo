import styled from "styled-components";

const NavbarContainer = styled.div`
  height: 10vh;
  display: flex;
  justify-content: right;
  align-items: center;
  /* gap: 5rem; */
  border: 2.5px solid white;
`;

const NavbarItem = styled.div`
  text-align: center;
  height: 8vh;
  min-width: 6rem;
  padding: 0 1rem 0 1rem;
  margin: 0 2rem 0 2rem;
  display: flex;
  align-items: center;
  border: 2.5px solid white;
  background-color: green;

  a {
    color: white;
  }

  :hover {
    background-color: blue;
  }
`;

export { NavbarContainer, NavbarItem };
