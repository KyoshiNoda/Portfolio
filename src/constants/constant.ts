import { UserObject } from "@/types/User";
import { NavItems } from "@/types/NavBar";
export const userInfo: UserObject = {
  name: "Kyoshi Noda",
  picture:
    "https://media.licdn.com/dms/image/C4E03AQF7xB3WcNl6zQ/profile-displayphoto-shrink_400_400/0/1614718854555?e=1698278400&v=beta&t=YMr-yK8n_y75DFIhkPKgyV2TE56d9Ar1Yg92yIbCfp0",
  heading:
    "I am a passionate Computer Science student with a strong foundation in programming and problem-solving. Alongside my studies, I have actively shared my knowledge as a tutor for various CS courses. I also gained practical experience through a rewarding software engineering internship, where I contributed to real-world projects and honed my development skills.",

  about: `<p>• I'm a junior in my second semester at <b>Farmingdale State College</b>, set to graduate in Fall 2024.</p>
    <p>• I'm a dedicated developer who enjoys bringing ideas to life through coding.</p>
    <p>• Outside of coding, I'm a casual soccer player and fan, and I also love to kick back and play video games.</p>`,
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

// TODO ADD TECH STACK
export const projects = {
  ScheduleFinder: {
    name: "ScheduleFinder",
    image: "/projects/ScheduleFinder.png",
    link: "https://github.com/KyoshiNoda/ScheduleFinder",
    description: `<ul>
    <li>• Full stack social media application fully written in Typescript that enables users to create and compare schedules with other users.</li>
    <li>• Allows people to browse and find new friends that are available in their free times.</li>
    <li>• Comes with advanced filtering systems on other users, making friends with common interests is extremely easy and intuitive.</li/>
    </ul>`
  },
  Codingforall: {
    name: "CodingForAll",
    image: "/projects/Codingforall.png",
    link: "https://github.com/KyoshiNoda/FSC-Coding-Society",
    description: `<ul>
    <li>•Designed & Implemented the FSC Coding Society Website</li>
    <li>• Members can see active events</li>
    <li>• Executives can edit news/current executives</li>
    </ul>`
  },
  ProsCons: {
    name: "ProsCons",
    image: "/projects/ProsCons.png",
    link: "https://github.com/KyoshiNoda/ProsCons",
    description: `<ul>
    <li>• Web Application that allows users to create pros and cons and separates into groups for better decision making</li>
    <li>• Powerful visualization between items and allows users to compare and contrast better</li>
    <li>• Follows MVC approach and maintains good backend practices</li>
    </ul>`
  },
  SteamTime: {
    name: "SteamTime",
    image: "/projects/SteamTime.png",
    link: "https://github.com/KyoshiNoda/Steam-Time",
    description: `<ul>
    <li>• Alerts user when they have played to much videogames in a session.</li>
    <li>• Tracks their gaming session and provide health statistics. </li>
    <li>• Cultivates a healthy game/break ratio and attempts to prevent the user from playing videogames too long </li>
    </ul>`
  },
};


export const footerItems = {
  Resume: {
    name: "Resume",
    link: "https://docs.google.com/document/d/10YZCabidMoFBT4ft1ocBWDAmS8LbiVzB/edit?usp=sharing&rtpof=true&sd=true"
  },
  DevPost: {
    name: "Devpost",
    link: "https://devpost.com/KyoshiNoda"
  },
  Linkedin: {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/kyoshi-noda/"
  }
}
