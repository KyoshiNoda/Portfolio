import Image from "next/image";
import { headerItems } from "@/constants/constant";
import { userInfo } from "@/constants/constant";
import aboutPicture from '../../public/aboutPicture.jpg';
function About() {
  return (
    <section
      id={headerItems.about.page}
      className="h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start"
    >
      <div className={"m-4 md:ml-20 sm:ml-12 md:w-1/2"}>
        <h1 className={"text-6xl my-6"}>About</h1>
        <h2 className={"text-3xl my-4"}>Get to know me!</h2>
        <p className={"[&>p]:mt-3"}>{userInfo.about}</p>
    
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
          {userInfo.skills.map((skill) => (
            <span
              className={"bg-gray-200 m-1 p-2 rounded-md inline-block text-sm text-black"}
              key="skill"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
