'use client';
import Image from "next/image";
import { headerItems, projects } from "@/constants/constant";
import Link from "next/link";
import { Carousel } from 'flowbite-react';
function Projects() {
  return (
    <section
      id={headerItems.projects.page}
      className="flex flex-col text-center justify-center items-center mb-5 md:mb-96"
    >
      <h1 className="text-6xl my-6 mt-28">Projects</h1>
      <div className="h-96 w-3/4 mb-5 rounded shadow-lg">
        <Carousel slide={false}>
          {Object.keys(projects).map((project) => (
            <Link
              href={projects[project as keyof Projects].link}
              key={projects[project as keyof Projects].name}
            >
              <h2 className="text-2xl">
                {projects[project as keyof Projects].name}
              </h2>
              <div className="md:w-96 md:h-96 overflow-hidden cursor-pointer rounded shadow-2xl border">
                <div className="absolute inset-0">
                  <Image
                    src={projects[project as keyof typeof projects].image}
                    alt=""
                    layout="fill"
                    style={{ objectFit: 'cover' }}
                    key={projects[project as keyof typeof projects].name}
                  />
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>

      <div className='h-64 w-3/4 bg-slate-700 dark:bg-slate-100 rounded-lg'>

      </div>

    </section>
  );
}


export default Projects;