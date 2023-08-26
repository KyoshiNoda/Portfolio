'use client';
import { headerItems } from "@/constants/constant";
import { userInfo } from "@/constants/constant";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
function Intro() {
  return (
    <section
      id={headerItems.home.page}
      className="h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start"
    >
      <div className="mt-10 md:mt-0">
        <Image
          src={userInfo.picture}
          alt=""
          width={300}
          height={300}
          className="rounded-full shadow-2xl mt-10"
        />
      </div>
      <div className={"md:ml-20 sm:ml-12 md:w-1/2"}>
        <h1 className={"text-7xl uppercase hidden md:block"}>
          Software
          <br />
          Engineer
        </h1>
        <h1 className={"text-2xl mt-5 md:text-3xl"}>
          Hi, I&#39;m{" "}
          <span
            className={"text-blue-600 dark:text-blue-400 text-3xl md:text-4xl"}
          >
            {userInfo.name}
          </span>
          !
        </h1>
        <p
          className={"md:mt-4 md:mb-4 sm:"}
          dangerouslySetInnerHTML={{ __html: userInfo.heading }}
        />
        <ScrollLink
          to={headerItems.projects.page}
          className={
            "bg-blue-600 rounded text-neutral-100 flex w-28 h-10 m-auto items-center justify-center md:m-0"
          }
          spy={true}
          smooth={true}
        >
          Projects <FaChevronDown className={"ml-2"} />
        </ScrollLink>
      </div>
    </section>
  );
}

export default Intro;
