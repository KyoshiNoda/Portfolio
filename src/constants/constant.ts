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
  heading: `CS student with a strong foundation in programming and problem-solving. 
    Alongside my studies, I have actively shared my knowledge as a tutor for various CS courses. 
    I also gained practical experience through a rewarding software engineering internship, where I contributed to real-world projects and honed my development skills.
    `,
  about: `<p>• I'm a graduate student studying in <b>CUNY Queens College</b>, set to graduate in Fall 2026.</p>
    <p>•Primarily focused on Full Stack and Machine Learning development.</p>`,
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
      "• Developed a full-stack social media app that enables users to create and compare schedules with others, tailored for individuals seeking to connect with others based on shared availability and common hobbies.",
      "• Integrated an AI-powered user recommendation engine using a Weighted Sum (WS) model following the Multi-Objective Optimization (MOO) framework to match users based on availability, distance, hobbies, and gender preferences.",
      "• Implemented a friend request system with automated email notifications, enhancing user engagement and retention rates.",
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
  Flux: {
    name: "Flux",
    image: "/projects/Flux.png",
    repo: "https://github.com/tferdous17/flux",
    description: [
      "• Developed a distributed real-time event streaming and message queue platform designed for high throughput, horizontal scalability and fault tolerance. Inspired by Apache Kafka architecture.",
      "• Processed 330,000 messages/sec by optimizing buffering, parallelizing network requests and hash-based load-balancing.",
      "• Implemented gRPC-based communication with Protocol Buffers for data transmissions and service orchestration across nodes.",
      "• Designed hierarchical storage architecture with partitioned logs and segment persistence for data management and retrieval.",
    ],
    techStack: [
      "Java",
      "gRPC",
      "Protocol",
      "Buffers",
      "Docker",
      "Kyro",
      "Maven",
    ],
  },
  Elevate: {
    name: "Elevate",
    image: "/projects/Elevate.png",
    repo: "https://github.com/KyoshiNoda/elevate",
    description: [
      "• Created a universal fitness hub that lets users log workouts and meals, access guided tutorials and nutritional info, and track weekly health metrics—leading to stronger user retention and more informed health decisions.",
      "• Implemented a dynamic weekly dashboard summarizing user activities, including calories consumed, water intake, and top workouts, by integrating data visualization tools to provide actionable insights.",
      "• Engineered a local gym finder feature by integrating geolocation APIs, facilitating users to locate nearby fitness centers.",
    ],
    techStack: [
      "Typescript",
      "React",
      "Express",
      "Redux",
      "PostgreSQL",
      "Redis",
      "TailwindCSS",
    ],
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
    link: "https://docs.google.com/document/d/1wKAqrOIVBaaEueMLxlVPdbVBYgesVEsc/edit?usp=sharing&ouid=104674600947882521163&rtpof=true&sd=true",
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
      `● Designed and implemented Python testing tool script using Pandas and Matplotlib to facilitate QA Testing.`,
    ],
  },
  {
    company: "Code Path",
    role: "Tech Fellow",
    location: "San Francisco CA",
    dates: "May 2025 - Present",
    description: [
      `● Mentored 300+ students in Technical Interview Prep 102 course, focusing on LeetCode-style data structures and algorithms covering topics such as Two Pointer, Hashmaps, Stacks, Queues, Linked List, Trees, Graphs, Dynamic Programming etc.`,
      `● Led interactive discussions on problem-solving strategies and debugging techniques to enhance technical proficiency.`,
    ],
  },
  {
    company: "Farmingdale State College",
    role: "Undergraduate ML Researcher ",
    location: "Farmingdale NY",
    dates: "March 2024- Feb 2025",
    description: [
      `● Created a Random Forest machine learning model with 86% accuracy to predict the likelihood of professional soccer players getting injured in future games, in conjunction with Dr. Mohammed Alshibli, published by February 2025.`,
      `● Collected and preprocessed 100,000+ data points from multiple sources, integrating real-time weather and match details to improve prediction accuracy by 15% using Python, Pandas, scikit-learn, TensorFlow, Beautiful Soup`,
      `● Leveraged real-time APIs to provide injury predictions within 5 minutes of weather or game condition changes.`,
    ],
  },
  {
    company: "Center for Academic Success & Tutoring",
    role: "Computer Science Tutor",
    location: "Farmingdale, NY",
    dates: "August 2021 - May 2023",
    description: [
      `● Tutored university-level programming courses to over 50 active students per semester, providing support for subjects such as Intro to Programming, Java Programming, and Data Structures & Algorithms.`,
      `● Created 100+ personalized practice questions and mock exams to reinforce key concepts and enhance student understanding.`,
      `● Conducted 20+ group workshops and review sessions each semester, helping students prepare for midterms and final exams.`,
    ],
  },
  {
    company: "Association for Computing Machinery (ACM)",
    role: "Vice President",
    location: "Farmingdale, NY",
    dates: "April 2021 - May 2022",
    description: [
      `● Founded the university's ACM Chapter, with total membership to 250+ and organizing 15+ diverse events, including industry experts talks, technical workshops, resume reviews, and networking, with a 70% average turnout.`,
      `● Designed and oversaw the recruitment process by crafting a diverse set of interview questions and conducting interviews with over 50 candidates for executive roles, leading to a 50% expansion in the club's leadership team.`,
    ],
  },
];
