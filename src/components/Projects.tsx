'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'flowbite-react';
import { headerItems, projects } from '@/constants/constant';
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

function Projects() {
  const [tab, setTab] = useState<number>(0);
  const [description, setDescription] = useState<string | string[]>('');

  const handleCarouselChange = (index: number) => {
    setTab(index);
    const projectKey = Object.keys(projects)[index];
    const projectDescription = projects[projectKey as keyof typeof projects].description;
    const descriptionArray = Array.isArray(projectDescription)
      ? projectDescription
      : [projectDescription];
    setDescription(descriptionArray);
  };

  useEffect(() => {
    setDescription(projects[Object.keys(projects)[0] as keyof typeof projects].description);
  }, []);

  return (
    <section
      id={headerItems.projects.page}
      className="flex flex-col justify-center items-center mb-5 md:mb-96"
    >
      <h1 className="text-6xl my-6 mt-28">Projects</h1>
      <div className="h-96 w-3/4 mb-5 rounded shadow-lg">
        <Carousel onSlideChange={handleCarouselChange} slide={false}>
          {Object.keys(projects).map((project) => (
            <>
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
            </>
          ))}
        </Carousel>
      </div>

      <div className="h-auto md:h-64 w-3/4 bg-slate-700 text-left dark:bg-slate-100 rounded-lg relative">
        <div className="text-white dark:text-black p-4 lg:text-lg">
          {Array.isArray(description)
            ? description.map((item, index) => <p key={index} className='text-sm'>{item}</p>)
            : <p>{description}</p>
          }
        </div>
        <div className='ml-3 flex flex-wrap'>
          {projects[Object.keys(projects)[tab] as keyof typeof projects].techStack.map((item) => (
            <span key={item} className="bg-blue-400 m-1 p-2 rounded-md inline-block text-sm text-black">
              {item}
            </span>
          ))}
        </div>

        <div className='ml-auto p-3 lg:p-0 lg:ml-4 mt-4 flex flex-col space-y-2 lg:flex-row lg:items-end lg:space-y-0 lg:space-x-2'>
          {projects[Object.keys(projects)[tab] as keyof typeof projects].demo && (
            <Link
              href={projects[Object.keys(projects)[tab] as keyof typeof projects].demo!}
              className='bg-blue-500 rounded p-2 flex justify-center items-center space-x-1 gap-1 text-white'
            >
              Demo
              <IoIosLink size={20} />
            </Link>
          )}

          {projects[Object.keys(projects)[tab] as keyof typeof projects].repo && (
            <Link
              href={projects[Object.keys(projects)[tab] as keyof typeof projects].repo}
              className='bg-slate-900 rounded p-2 flex justify-center items-center space-x-1 gap-1 text-white mt-2 lg:mt-0'
            >
              Repo
              <FaGithub size={20} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
