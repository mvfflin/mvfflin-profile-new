import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import ConsoleDrawer from "@/components/ConsoleDrawer";

export default function Home() {
  return (
    <>
      <Navbar />
      <CustomCursor />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <ConsoleDrawer />
    </>
  );
}
