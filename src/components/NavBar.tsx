"use client";
import { useState } from "react";
import { userInfo, headerItems } from "../constants/constant";
import { NavItems } from "@/types/NavBar";
import { BiMenu } from "react-icons/bi";
import ThemeSwitcher from "@/app/ThemeSwitcher";
import { Link as ScrollLink } from "react-scroll";

function NavBar() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  return (
    <header className="bg-gray-50 dark:bg-slate-800 dark:text-white p-6 md:flex w-full z-10 justify-between fixed top-0 text-black">
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
          !isMobile ? "block" : "hidden"
        }`}
      >
        {Object.keys(headerItems).map((item) => (
          <ScrollLink
            to={headerItems[item as keyof NavItems].page}
            key={headerItems[item as keyof NavItems].label}
            className="block md:inline-block cursor-pointer"
            spy={true}
            smooth={true}
          >
            {headerItems[item as keyof NavItems].label}
          </ScrollLink>
        ))}
        <div className="block md:inline-block">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
