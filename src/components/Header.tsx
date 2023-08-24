"use client";
import { useState } from "react";
import { userInfo, headerItems } from "../constants/constant";
import { NavItems } from "@/Types/Header";
import { BiMenu } from "react-icons/bi";
function Header() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  return (
    <header className="bg-white p-6 md:flex w-full z-10 justify-between fixed top-0 text-black">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{userInfo.name}</h2>
        <BiMenu
          size={30}
          className="md:hidden"
          onClick={() => setIsMobile((prev) => !prev)}
        />
      </div>
      <div
        className={`mr-8 md:space-x-6 mt-3 md:mt-0 ${
          isMobile ? "block" : "hidden"
        }`}
      >
        {Object.keys(headerItems).map((item) => (
          <a
            key={headerItems[item as keyof NavItems].label}
            className="block md:inline-block cursor-pointer"
          >
            {headerItems[item as keyof NavItems].label}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Header;
