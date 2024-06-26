import { UserObject } from "@/types/User";
import { NavItems } from "@/types/NavBar";
import { Project } from "@/types/Projects";
import { SiTypescript, SiNextdotjs, SiMysql, SiExpress } from "react-icons/si";
import React from "react";
import {
  BiLogoPython,
  BiLogoReact,
  BiLogoSpringBoot,
  BiLogoMongodb,
  BiLogoAngular,
  BiLogoTailwindCss,
  BiLogoSass,
} from "react-icons/bi";
import { TbBrandGolang } from "react-icons/tb";
import { CareerObject } from "@/types/Career";
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
    { name: "Typescript", icon: React.createElement(SiTypescript) },
    { name: "Golang", icon: React.createElement(TbBrandGolang, { size: 20 }) },
    { name: "Python", icon: React.createElement(BiLogoPython, { size: 20 }) },
    { name: "React", icon: React.createElement(BiLogoReact, { size: 20 }) },
    { name: "Next", icon: React.createElement(SiNextdotjs, { size: 20 }) },
    {
      name: "Spring Boot",
      icon: React.createElement(BiLogoSpringBoot, { size: 20 }),
    },
    {
      name: "Tailwindcss",
      icon: React.createElement(BiLogoTailwindCss, { size: 20 }),
    },
    { name: "MYSQL", icon: React.createElement(SiMysql, { size: 20 }) },
    { name: "MongoDB", icon: React.createElement(BiLogoMongodb, { size: 20 }) },
    { name: "Express", icon: React.createElement(SiExpress, { size: 20 }) },
    { name: "Angular", icon: React.createElement(BiLogoAngular, { size: 20 }) },
    {
      name: "TailwindCSS",
      icon: React.createElement(BiLogoTailwindCss, { size: 20 }),
    },
    { name: "Sass", icon: React.createElement(BiLogoSass, { size: 20 }) },
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

export const CareerInfo: CareerObject[] = [
  {
    company: "SAS Institute",
    role: "Software Engineer Intern",
    location: "Cary, NC",
    dates: "May 2023 - Present",
    description: [
      `● Developed responsive user-friendly front-end components with Angular with Typescript that handled license metadata.`,
      `● Implemented RESTful APIs using Spring Boot that dealt with license expirations.`,
      `● Conducted full stack unit testing with 95-100% line coverage using Mockito, Junit, Jest, Jasmine, TestBed etc. `,
      `● Designed and implemented Python testing tool script using Pandas and Matplotlib to facilitate QA Testing.`
    ],
  },
  {
    company: "Farmingdale State College",
    role: "Computer Science Tutor",
    location: "Farmingdale, NY",
    dates: "August 2021 - May 2023",
    description: [
      `● Tutored various programming courses (Intro Programming, Object Oriented, Data Structures) at university level with over 50 active students.`,
      `● Responsible for creating personalized practice questions and demonstrating strong communication skills.`,
    ],
  },
  {
    company: "Association for Computing Machinery (ACM)",
    role: "Vice President",
    location: "Farmingdale, NY",
    dates: "April 2021 - May 2022",
    description: [
      `● Founded a computer science ACM chapter for university with over 250 active members.`,
      `● Responsible for organizing numerous events that involved technical talks with industry professionals.`,
      `● Responsible for interviewing over 50+ candidates for executive positions`,
    ],
  },
];