'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'flowbite-react';
import { headerItems, projects } from '@/constants/constant';

function Projects() {
  const [tab, setTab] = useState<number>(0);
  const [description, setDescription] = useState<string>(
    projects[Object.keys(projects)[0] as keyof typeof projects].description
  );

  const handleCarouselChange = (index: number) => {
    setTab(index);
    const projectKey = Object.keys(projects)[index];
    setDescription(projects[projectKey as keyof typeof projects].description);
  };
  useEffect(() => {
    // Update the description on the client side after the component is mounted.
    setDescription(projects[Object.keys(projects)[0] as keyof typeof projects].description);
  }, []); // Ensure the dependencies array is empty if you want it to run only once on mount.
  

  return (
    <section
      id={headerItems.projects.page}
      className="flex flex-col text-center justify-center items-center mb-5 md:mb-96"
    >
      <h1 className="text-6xl my-6 mt-28">Projects</h1>
      <div className="h-96 w-3/4 mb-5 rounded shadow-lg">
        <Carousel onSlideChange={handleCarouselChange}>
          {Object.keys(projects).map((project) => (
            <Link
              href={projects[project as keyof typeof projects].link}
              key={projects[project as keyof typeof projects].name}
            >
              <h2 className="text-2xl">
                {projects[project as keyof typeof projects].name}
              </h2>
              <div className="h-96 overflow-hidden cursor-pointer rounded shadow-2xl border">
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

      <div className="h-64 w-3/4 bg-slate-700 dark:bg-slate-100 rounded-lg">
        <p className="text-white  text-sm p-4" dangerouslySetInnerHTML={{ __html: description || '' }} />
      </div>
    </section>
  );
}

export default Projects;
