import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Experiences from "../components/Experiences";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div
      className="bg-[#29264c] h-screen snap-y snap-mandatory 
    overflow-scroll z-0 debug-screens"
    >
      <Head>
        <title>Codeguruozzy fullstack portfolio</title>
      </Head>
      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experiences" className="snap-center">
        <Experiences />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      <section id="contact" className="snap-center">
        <Contact />
      </section>
      {/* Contact */}
      
    </div>
  );
}
