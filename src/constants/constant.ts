import { UserObject } from "@/types/User";
import { NavItems } from "@/types/NavBar";
export const userInfo: UserObject = {
  name: "Kyoshi Noda",
  picture:
    "https://media.licdn.com/dms/image/C4E03AQF7xB3WcNl6zQ/profile-displayphoto-shrink_400_400/0/1614718854555?e=1698278400&v=beta&t=YMr-yK8n_y75DFIhkPKgyV2TE56d9Ar1Yg92yIbCfp0",
  heading:
    "I am a passionate Computer Science student with a strong foundation in programming and problem-solving. Alongside my studies, I have actively shared my knowledge as a tutor for various CS courses. I also gained practical experience through a rewarding software engineering internship, where I contributed to real-world projects and honed my development skills.",

  about: `<p>I'm a junior in my second semester at <b>Farmingdale State College</b>, set to graduate in Fall 2023.</p>
    <p>I'm a dedicated developer who enjoys bringing ideas to life through coding.</p>
    <p> Outside of coding, I'm a casual soccer player and fan, and I also love to kick back and play video games.</p>`,
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

export const projects = {
  scheduleFinder: {
    name: 'scheduleFinder',
    image: "https://i.ibb.co/Z1qBS7X/Screenshot-2023-08-26-at-2-17-51-AM.png",
    link: "https://github.com/KyoshiNoda/ScheduleFinder",
  },
  codingforall: {
    name: 'codingforall',
    image: "https://i.ibb.co/dP4srJx/codingforall.png",
    link: "https://github.com/KyoshiNoda/FSC-Coding-Society",
  },
  prosCons: {
    name: 'prosCons',
    image: "https://i.ibb.co/SRRKZYr/proscons.png",
    link: "https://github.com/KyoshiNoda/ProsCons",
  },
  steamTime: {
    name: 'steamTime',
    image: "https://i.ibb.co/RNyC9ht/Screenshot-2023-08-26-at-3-09-12-AM.png",
    link: "https://github.com/KyoshiNoda/GymPal",
  },
};
