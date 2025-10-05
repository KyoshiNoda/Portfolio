"use client";

import { CareerInfo } from "@/constants/constant";
import { useTheme } from "next-themes";
import { MdOutlineWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function ExperienceTimeline() {
  const { theme } = useTheme();
  const contentStyle =
    theme === "dark"
      ? { background: "rgb(4, 59, 102)", color: "#fff" }
      : { background: "rgb(33, 150, 243)", color: "#fff" };
  return (
    <VerticalTimeline className="space-y-24 mt-28">
      <VerticalTimelineElement
        key={CareerInfo[0].company + CareerInfo[0].role}
        contentStyle={{ background: contentStyle.background, color: "#fff" }}
        contentArrowStyle={{ borderRight: ")" }}
        date={CareerInfo[0].dates}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdOutlineWork />}
      >
        <h1 className="text-2xl">{CareerInfo[0].role}</h1>
        <h1 className="text-xl">{CareerInfo[0].company}</h1>
        <h4 className="font-bold">{CareerInfo[0].location}</h4>
        <p>
          {CareerInfo[0].description.map((bullet, index) => (
            <span key={index}>
              {bullet}
              <br />
            </span>
          ))}
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        key={CareerInfo[1].company + CareerInfo[1].role}
        contentStyle={{ background: contentStyle.background, color: "#fff" }}
        contentArrowStyle={{ borderRight: ")" }}
        date={CareerInfo[1].dates}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdOutlineWork />}
      >
        <h1 className="text-2xl">{CareerInfo[1].role}</h1>
        <h1 className="text-xl">{CareerInfo[1].company}</h1>
        <h4 className="font-bold">{CareerInfo[1].location}</h4>
        <p>
          {CareerInfo[1].description.map((bullet, index) => (
            <span key={index}>
              {bullet}
              <br />
            </span>
          ))}
        </p>
      </VerticalTimelineElement>
      {CareerInfo.slice(2).map((job, index) => (
        <VerticalTimelineElement
          key={job.company + job.role + index}
          date={job.dates}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h1 className="dark:text-black text-2xl">{job.role}</h1>
          <h2 className="text-sm">{job.company}</h2>
          <h4 className="dark:text-black font-bold">{job.location}</h4>
          <p className="dark:text-black">
            {job.description.map((bullet, i) => (
              <span key={i}>
                {bullet}
                <br />
              </span>
            ))}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
