import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-[#29264c] h-screen snap-y snap-mandatory 
    overflow-scroll z-0 debug-screens">
      <Head>
        <title>Codeguruozzy fullstack portfolio</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experiences */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact */}
    </div>
  );
}
