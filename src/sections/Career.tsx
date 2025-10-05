"use client";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { headerItems } from "@/constants/constant";

export default function Career() {
  return (
    <section
      id={headerItems.career.page}
      className="flex-col justify-center items-center md:flex-row pt-32 pl-11 bg-blue-400 dark:bg-slate-900"
    >
      <span className="text-6xl my-6 mt-3 text-white">Career</span>
      <ExperienceTimeline />
    </section>
  );
}
