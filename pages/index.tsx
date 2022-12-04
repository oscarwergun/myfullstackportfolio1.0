import Head from "next/head";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Header from "../components/Header";
import Hero from "../components/Hero";
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
      <section id="skills">
        <Skills />
      </section>
      {/* Projects */}
      {/* Contact */}
    </div>
  );
}
