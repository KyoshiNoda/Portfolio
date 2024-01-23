import { UserObject } from "@/types/User";
import { NavItems } from "@/types/NavBar";
import { Project } from "@/types/Projects";
export const userInfo: UserObject = {
  name: "Kyoshi Noda",
  picture:
    "https://media.licdn.com/dms/image/C4E03AQF7xB3WcNl6zQ/profile-displayphoto-shrink_400_400/0/1614718854555?e=1698278400&v=beta&t=YMr-yK8n_y75DFIhkPKgyV2TE56d9Ar1Yg92yIbCfp0",
  heading:
    "I am a passionate Computer Science student with a strong foundation in programming and problem-solving. Alongside my studies, I have actively shared my knowledge as a tutor for various CS courses. I also gained practical experience through a rewarding software engineering internship, where I contributed to real-world projects and honed my development skills.",

  about: `<p>• I'm a senior studying in <b>Farmingdale State College</b>, set to graduate in Fall 2024.</p>
    <p>• I'm a dedicated developer who enjoys bringing ideas to life.</p>
    <p>•Primarily focused on full stack development.</p>`,
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
  career: { label: "Career", page: "career" },
};

export const projects: Record<string, Project> = {
  ScheduleFinder: {
    name: "ScheduleFinder",
    image: "/projects/ScheduleFinder.png",
    repo: "https://github.com/KyoshiNoda/ScheduleFinder",
    demo: "https://schedulefinder.netlify.app/",
    description: [
      "• Full stack social media application that enables users to create and compare schedules with other users.",
      "• Allows people to browse and find new friends that are available in their free times.",
      "• Comes with advanced filtering systems on other users, making friends with common interests is extremely easy and intuitive.",
    ],
    techStack: [
      "Typescript",
      "React",
      "Express",
      "MongoDB",
      "TailwindCSS",
      "Redux",
    ],
  },
  Codingforall: {
    name: "CodingForAll",
    image: "/projects/Codingforall.png",
    repo: "https://github.com/KyoshiNoda/FSC-Coding-Society",
    demo: "https://acm-coding-society.netlify.app/",
    description: [
      "• Designed & Implemented the FSC Coding Society Website",
      "• Members can see active events",
      "• Executives can edit news and current executives.",
    ],
    techStack: [
      "Javascript",
      "React",
      "Tailwindcss",
      "Express",
      "PostgreSQL",
      "HeadlessUI",
    ],
  },
  ProsCons: {
    name: "ProsCons",
    image: "/projects/ProsCons.png",
    repo: "https://github.com/KyoshiNoda/ProsCons",
    description: [
      "• Web Application that allows users to create pros and cons and separates into groups for better decision making",
      "• Powerful visualization between items and allows users to compare and contrast better.",
      "• Follows MVC approach and maintains good backend practices.",
    ],
    techStack: ["Javascript", "React", "Express", "MYSQL", "TailwindCSS"],
  },
  SteamTime: {
    name: "SteamTime",
    image: "/projects/SteamTime.png",
    repo: "https://github.com/KyoshiNoda/Steam-Time",
    description: [
      "• Alerts user when they have played to much videogames in a session.",
      "• Tracks their gaming session and provide health statistics.",
      "• Cultivates a healthy game/break ratio and attempts to prevent the user from playing videogames too long",
    ],
    techStack: [
      "Python",
      "Javascript",
      "React",
      "Flask",
      "MongoDB",
      "TailwindCSS",
    ],
  },
};

export const footerItems = {
  Resume: {
    name: "Resume",
    link: "https://docs.google.com/document/d/10YZCabidMoFBT4ft1ocBWDAmS8LbiVzB/edit?usp=sharing&rtpof=true&sd=true",
  },
  DevPost: {
    name: "Devpost",
    link: "https://devpost.com/KyoshiNoda",
  },
  Linkedin: {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/kyoshi-noda/",
  },
};
