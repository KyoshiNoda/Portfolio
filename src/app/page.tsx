import NavBar from "@/components/NavBar";
import Main from "@/pages/Main";
import About from "@/components/About";
import Projects from "@/components/Projects";
import CarrerTimeLine from "@/components/CarrerTimeLine";
export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <Main />
      <About />
      <Projects />
      <CarrerTimeLine />
    </>
  );
}
