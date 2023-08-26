"use client";
import { Timeline } from "flowbite-react";
import { headerItems } from "@/constants/constant";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork } from "react-icons/md";
export default function Carrer() {
  return (
    <section
      id={headerItems.carrer.page}
      className="flex-col justify-center md:flex-row"
    >
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title dark:text-black">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle dark:text-black font-semibold">
            San Francisco, CA
          </h4>
          <p className="dark:text-black">
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title dark:text-black">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle dark:text-black font-semibold">
            San Francisco, CA
          </h4>
          <p className="dark:text-black">
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title dark:text-black">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle dark:text-black font-semibold">
            San Francisco, CA
          </h4>
          <p className="dark:text-black">
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p className="dark:text-black">
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}
