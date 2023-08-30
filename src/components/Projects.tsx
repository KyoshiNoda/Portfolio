import Image from "next/image";
import { headerItems, projects } from "@/constants/constant";
import Link from "next/link";
function Projects() {
  return (
    <section
      id={headerItems.projects.page}
      className="flex flex-col text-center justify-center items-center mb-5 md:mb-96"
    >
      <h1 className="text-6xl my-6 mt-28">Projects</h1>
      <div className="flex break-words flex-wrap text-center justify-center items-center gap-4">
        {Object.keys(projects).map((project) => (
          <Link
            href={projects[project as keyof Projects].link}
            key={projects[project as keyof Projects].name}
          >
            <h2 className="text-2xl">
              {projects[project as keyof Projects].name}
            </h2>
            <div className="w-72 h-72 md:w-96 md:h-96 relative overflow-hidden cursor-pointer hover:opacity-25 rounded shadow-2xl border">
              <div className="absolute inset-0">
                <Image
                  src={projects[project as keyof Projects].image}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  key={projects[project as keyof Projects].name}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
