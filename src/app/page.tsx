import NavBar from "@/components/NavBar";
import Main from "@/pages/Main";
import About from "@/components/About";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <Main />
      <About />
      <Projects />
    </>
  );
}
