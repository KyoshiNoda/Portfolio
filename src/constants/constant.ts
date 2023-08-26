import { UserObject } from "@/Types/User";
import { NavItems } from "@/Types/Header";
export const userInfo: UserObject = {
  name: "Kyoshi Noda",
  picture:
    "https://media.licdn.com/dms/image/C4E03AQF7xB3WcNl6zQ/profile-displayphoto-shrink_400_400/0/1614718854555?e=1698278400&v=beta&t=YMr-yK8n_y75DFIhkPKgyV2TE56d9Ar1Yg92yIbCfp0",
  heading:
    "Computer Science student based in New York. Passionate in Software engineering. Profifent in Typescript and React",
  about: `passionate Computer Science student with a strong foundation in programming and problem-solving. Alongside my studies, I have actively shared my knowledge as a tutor for various Computer Science courses. I also gained practical experience through a rewarding software engineering internship, where I contributed to real-world projects and honed my development skills.`,
  skills: [
    "Typescript",
    "Golang",
    "Python",
    "React",
    "Next",
    "Spring Boot",
    "Tailwindcss",
    "MYSQL",
    "MongoDB",
    "Express",
    "Angular",
  ],
};

export const headerItems: NavItems = {
  home: { label: "Home", page: "home" },
  about: { label: "About", page: "about" },
  projects: { label: "Projects", page: "projects" },
};
