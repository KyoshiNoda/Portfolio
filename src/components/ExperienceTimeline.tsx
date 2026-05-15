"use client";

import { CareerInfo } from "@/constants/constant";
import { useTheme } from "next-themes";
import { MdOutlineWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const companyLogos: Record<string, { src: string; bgColor: string }> = {
  "Capital One": { src: "/logos/330px-Capital_One_logo.svg", bgColor: "#FFFFFF" },
  "SAS Institute": { src: "/logos/330px-SAS_logo_horiz.svg", bgColor: "#FFFFFF" },
};

function CompanyIcon({ company }: { company: string }) {
  const logo = companyLogos[company];
  if (logo) {
    return (
      <img
        src={logo.src}
        alt={company}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "88%",
          height: "88%",
          objectFit: "contain",
          padding: "5px",
        }}
      />
    );
  }
  return <MdOutlineWork />;
}

function getIconStyle(company: string) {
  const logo = companyLogos[company];
  return logo
    ? { background: logo.bgColor, color: "#fff" }
    : { background: "rgb(33, 150, 243)", color: "#fff" };
}

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
        iconStyle={getIconStyle(CareerInfo[0].company)}
        icon={<CompanyIcon company={CareerInfo[0].company} />}
      >
        <h1 className="text-2xl">{CareerInfo[0].role}</h1>
        <h1 className="text-xl">{CareerInfo[0].company}</h1>
        <h4 className="font-bold">{CareerInfo[0].location}</h4>
        <p className="flex flex-col gap-2">
          {CareerInfo[0].description.map((bullet, index) => (
            <span key={index}>
              {bullet}
              <br />
            </span>
          ))}
        </p>
      </VerticalTimelineElement>
      {CareerInfo.slice(1).map((job, index) => (
        <VerticalTimelineElement
          key={job.company + job.role + index}
          date={job.dates}
          iconStyle={getIconStyle(job.company)}
          icon={<CompanyIcon company={job.company} />}
        >
          <h1 className="dark:text-black text-2xl">{job.role}</h1>
          <h2 className="text-sm">{job.company}</h2>
          <h4 className="dark:text-black font-bold">{job.location}</h4>
          <p className="dark:text-black flex flex-col gap-2">
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
