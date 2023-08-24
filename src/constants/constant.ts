import { UserObject } from "@/Types/User";
import { NavItems } from "@/Types/Header";
export const userInfo: UserObject = {
  name: "Kyoshi Noda",
};

export const headerItems: NavItems = {
  home: { label: "Home", page: "home" },
  about: { label: "About", page: "about" },
  projects: { label: "Projects", page: "projects" },
};
