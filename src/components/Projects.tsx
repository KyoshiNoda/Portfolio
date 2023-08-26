import Image from "next/image";
import { headerItems, projects } from "@/constants/constant";
import Link from "next/link";
function Projects() {
  return (
    <section
      id={headerItems.projects.page}
      className="flex flex-col text-center justify-center items-center mb-10"
    >
      <h1 className={"text-6xl my-6 mt-28"}>Projects</h1>
      <div className="flex break-words flex-wrap text-center justify-center items-center">
        {Object.keys(projects).map((project) => (
          <Link
            href={projects[project as keyof Projects].link}
            key={projects[project as keyof Projects].name}
          >
            <Image
              src={projects[project as keyof Projects].image}
              alt=""
              width={600}
              height={600}
              className="mt-4 md:m-1 cursor-pointer"
              key={projects[project as keyof Projects].name}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
