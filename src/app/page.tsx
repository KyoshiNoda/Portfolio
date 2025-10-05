import NavBar from "@/sections/NavBar";
import Intro from "@/sections/Intro";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Career from "@/sections/Career";
import FooterWithLogo from "@/sections/FooterWithLogo";
export default function Home() {
  return (
    <>
      <NavBar />
      <Intro />
      <About />
      <Projects />
      <Career />
      <FooterWithLogo />
    </>
  );
}
