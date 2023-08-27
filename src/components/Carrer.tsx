"use client";
import { headerItems } from "@/constants/constant";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork } from "react-icons/md";
import { useTheme } from "next-themes";
export default function Carrer() {
  const { theme } = useTheme();
  const contentStyle =
    theme === "dark"
      ? { background: "rgb(4, 59, 102)", color: "#fff" }
      : { background: "rgb(33, 150, 243)", color: "#fff" };
  return (
    <section
      id={headerItems.carrer.page}
      className="flex-col justify-center items-center md:flex-row pt-32 pl-11 bg-blue-300 dark:bg-slate-900"
    >
      <span className="text-6xl my-6 mt-3 text-white">Carrer</span>
      <VerticalTimeline className=" space-y-24 mt-28">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2021 - May 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h1 className="vertical-timeline-element-title dark:text-black text-2xl">
            Vice President ACM
          </h1>
          <h2 className="text-sm">Farmingdale State College</h2>
          <h4 className="vertical-timeline-element-subtitle dark:text-black font-bold">
            Farmingdale, NY
          </h4>
          <p className="dark:text-black">
            ● Founded a computer science ACM Chapter for university with over
            250 active members.
            <br />
            ● Responsible for organizing numerous events that involved technical
            talks with industry professionals. <br />● Responsible for
            interviewing over 50+ candidates for executive positions
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August 2021 - May 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h1 className="vertical-timeline-element-title dark:text-black text-2xl">
            Computer Science Tutor
          </h1>
          <h2 className="text-sm">Farmingdale State College</h2>
          <h4 className="vertical-timeline-element-subtitle dark:text-black font-bold">
            Farmingdale, NY
          </h4>
          <p className="dark:text-black">
            ● Tutored various programming courses (Intro Programming, Object
            Oriented, Data Structures) at university level with over 50 active
            students. <br />● Responsible for creating personalized practice
            questions and demonstrating strong communication skills.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: contentStyle.background, color: "#fff" }}
          contentArrowStyle={{ borderRight: ")" }}
          date="May 2023 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h1 className="vertical-timeline-element-title text-2xl">
            Software Engineer Intern
          </h1>
          <h1 className="text-xl">SAS Institute</h1>
          <h4 className="vertical-timeline-element-subtitle font-bold">
            Cary, NC
          </h4>
          <p>
            ● Handled full stack development for license generations for all SAS
            software. <br />
            ● Developed responsive user-friendly front-end components with
            Angular with Typescript that handled license metadata.
            <br />
            ● Implemented RESTful APIs using Spring Boot that dealt with license
            expirations. <br />● Developed comprehensive unit tests for both
            front-end and back-end, ensuring a robust and error-free
            application.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}
