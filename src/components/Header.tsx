import React from "react";
import { userInfo, headerItems } from "../constants/constant";
import { NavItems } from "@/Types/Header";
type Props = {};

function Header({}: Props) {
  return (
    <header>
      <div>
        <h2>{userInfo.name}</h2>
      </div>
      <div>
        {
          Object.keys(headerItems).map(item => (
            <a>{headerItems[item as keyof NavItems].label}</a>
          ))
        }
      </div>
    </header>
  );
}

export default Header;
