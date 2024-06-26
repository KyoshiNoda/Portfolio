import Image from "next/image";
import { headerItems } from "@/constants/constant";
import { userInfo } from "@/constants/constant";
import aboutPicture from "../../public/aboutPicture.jpg";

function About() {
  return (
    <section
      id={headerItems.about.page}
      className="flex flex-col text-center justify-center items-center md:flex-row md:text-start pt-24 md:pt-32 pb-0 md:pb-48"
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
          className={"m-auto rounded shadow-2xl border-2"}
        />
        <div className="break-words w-3/4 mt-3">
          {userInfo.skills.map((skill) => (
            <span
              key={skill.name}
              className="bg-gray-200 m-1 p-2 rounded-md inline-block text-sm text-black"
            >
              {skill.name}{" "}
              <span
                className="inline-block"
                style={{ verticalAlign: "middle" }}
              >
                {skill.icon}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
