import { ReactElement } from "react";

interface Skill {
  name: string;
  icon: ReactElement;
}

export interface UserObject {
  name: string;
  picture: string;
  heading: string;
  about: string;
  skills: Skill[];
}
