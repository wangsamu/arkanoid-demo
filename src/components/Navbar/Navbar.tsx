import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { NavbarContainer, NavbarItem } from "./NavbarStyled";

function Navbar() {
  return (
    <>
      <NavbarContainer>
        <NavbarItem>
          <Link to="/game">GAME</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/">HIGH SCORES</Link>
        </NavbarItem>
        <DropdownMenu />

        {/* <Link to="/">PROFILE</Link> */}

        {/* displaying word PROFILE or user avatar?
            when hovered upon, displays a drop down with options of:
            MY PROFILE AND SIGN OUT */}

        {/* MENU LIST */}
      </NavbarContainer>
      <Outlet />
    </>
  );
}

export default Navbar;
