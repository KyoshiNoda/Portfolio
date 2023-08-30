import Image from "next/image";
import { headerItems } from "@/constants/constant";
import { userInfo } from "@/constants/constant";
import aboutPicture from "../../public/aboutPicture.jpg";
import { SiTypescript, SiNextdotjs, SiMysql, SiExpress } from "react-icons/si";
import {
  BiLogoPython,
  BiLogoReact,
  BiLogoSpringBoot,
  BiLogoMongodb,
  BiLogoAngular,
  BiLogoTailwindCss,
  BiLogoSass,
} from "react-icons/bi";
import { TbBrandGolang } from "react-icons/tb";
function About() {
  return (
    <section
      id={headerItems.about.page}
      className="flex flex-col text-center justify-center items-center md:flex-row md:text-start pt- pb-48"
    >
      <div className={"m-4 md:ml-20 sm:ml-12 md:w-1/2"}>
        <h1 className={"text-6xl my-6 pt-4 md:pt-0"}>About</h1>
        <h2 className={"text-3xl my-4"}>Get to know me!</h2>
        <div
          dangerouslySetInnerHTML={{ __html: userInfo.about }}
          className={"[&>p]:mt-3"}
        />
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <Image
          src={aboutPicture}
          alt=""
          width={300}
          height={300}
          className={"m-auto rounded shadow-xl"}
        />
        <div className="break-words w-3/4 mt-3">
          <span className="bg-gray-200 m-1 p-2 rounded-md inline-block text-sm text-black ">
            Typescript{" "}
            <span className="inline-block" style={{ verticalAlign: "middle" }}>
              <SiTypescript />
            </span>
          </span>

          <span className="bg-gray-200 m-1 p-2 rounded-md inline-block text-sm text-black ">
            Golang{" "}
            <span className="inline-block" style={{ verticalAlign: "middle" }}>
              <TbBrandGolang size={20} />
            </span>
          </span>

          <span className="bg-gray-200 m-1 p-2 rounded-md inline-block text-sm text-black ">
            Python{" "}
            <span className="inline-block" style={{ verticalAlign: "middle" }}>
              <BiLogoPython size={20} />
            </span>
          </span>

          <span className="bg-gray-200 m-1 p-2 rounded-md inline-block text-sm text-black ">
            React{" "}
            <span className="inline-block" style={{ verticalAlign: "middle" }}>
              <BiLogoReact size={20} />
            </span>
          </span>

          <span className="bg-gray-200 m-1 p-2 rounded-md inline-block text-sm text-black ">
            Next{" "}
            <span className="inline-block" style={{ verticalAlign: "middle" }}>
              <SiNextdotjs size={20} />
            </span>
          </span>

          <span className="bg-gray-200 m-1 p-2 rounded-md inline-block text-sm text-black ">
            Spring Boot{" "}
            <span className="inline-block" style={{ verticalAlign: "middle" }}>
              <BiLogoSpringBoot size={20} />
            </span>
          </span>

          <span className="bg-gray-200 m-1 p-2 rounded-md inline-block text-sm text-black ">
            MySQL{" "}
            <span className="inline-block" style={{ verticalAlign: "middle" }}>
              <SiMysql size={20} />
            </span>
          </span>

          <span className="bg-gray-200 m-1 p-2 rounded-md inline-block text-sm text-black ">
            MongoDB{" "}
            <span className="inline-block" style={{ verticalAlign: "middle" }}>
              <BiLogoMongodb size={20} />
            </span>
          </span>

          <span className="bg-gray-200 m-1 p-2 rounded-md inline-block text-sm text-black ">
            Express{" "}
            <span className="inline-block" style={{ verticalAlign: "middle" }}>
              <SiExpress size={20} />
            </span>
          </span>

          <span className="bg-gray-200 m-1 p-2 rounded-md inline-block text-sm text-black ">
            Angular{" "}
            <span className="inline-block" style={{ verticalAlign: "middle" }}>
              <BiLogoAngular size={20} />
            </span>
          </span>

          <span className="bg-gray-200 m-1 p-2 rounded-md inline-block text-sm text-black ">
            Tailwindcss{" "}
            <span className="inline-block" style={{ verticalAlign: "middle" }}>
              <BiLogoTailwindCss size={20} />
            </span>
          </span>
          <span className="bg-gray-200 m-1 p-2 rounded-md inline-block text-sm text-black ">
            Sass{" "}
            <span className="inline-block" style={{ verticalAlign: "middle" }}>
              <BiLogoSass size={20} />
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;
