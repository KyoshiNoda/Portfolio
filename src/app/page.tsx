import NavBar from "@/components/NavBar";
import Main from "@/pages/Main";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Carrer from "@/components/Carrer";
import FooterWithLogo from "@/components/FooterWithLogo";
export default function Home() {
  return (
    <>
      <NavBar />
      <Main />
      <About />
      <Projects />
      <Carrer />
      <FooterWithLogo />
    </>
  );
}
