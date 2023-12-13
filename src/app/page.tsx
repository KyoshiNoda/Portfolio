import NavBar from "@/components/NavBar";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Career from "@/components/Career";
import FooterWithLogo from "@/components/FooterWithLogo";
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
