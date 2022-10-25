import React, { useState } from "react";
import { signOutUser } from "../../utils/firebase/firebaseUtils";

import {
  DropdownMenuButton,
  DropdownMenuContainer,
  DropdownMenuItem,
  DropdownMenuList,
} from "./DropdownMenu.styled";

function DropdownMenu() {
  const [isOverButton, setIsOverButton] = useState(false);

  return (
    <DropdownMenuContainer
      onMouseEnter={() => {
        setIsOverButton(true);
        console.log("mouse entered!");
      }}
      onMouseLeave={() => {
        setIsOverButton(false);
        console.log("mouse exited!");
      }}
    >
      {/* MENU BUTTON */}
      <DropdownMenuButton>
        <span>PROFILE</span>
      </DropdownMenuButton>
      {isOverButton && (
        <DropdownMenuList
          onClick={() => {
            setIsOverButton(false);
            console.log("mouse clicked!");
          }}
        >
          <DropdownMenuItem>
            <span>MY PROFILE</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => signOutUser()}>
            <span>LOG OUT</span>
          </DropdownMenuItem>
        </DropdownMenuList>
      )}
    </DropdownMenuContainer>
  );
}

export default DropdownMenu;
