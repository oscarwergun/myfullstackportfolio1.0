import { GetStaticProps } from "next";
import Head from "next/head";

import About from "../components/About";
import Contact from "../components/Contact";
import Experiences from "../components/Experiences";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { Experience, pageInfo, Project, Skill, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProject } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: pageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  title: String
};
export default function Home({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
  title
}: Props) {
  return (
    <div
      className="bg-[#1C1F33] text-[#fafafa] h-screen snap-y snap-mandatory overflow-y-scroll w-full 
      scrollbar scrollbar-track-[#21253c] scrollbar-thumb-yellow-600"
    >
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} title="About" />
      </section>

      <section id="experiences" className="snap-center">
        <Experiences experiences={experiences} title="Experiences/ Education"/>
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} title="Skills"/>
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} title="Project"/>
      </section>
      <section id="contact" className="snap-center">
        <Contact pageInfo={pageInfo} title="Contact"/>
      </section>
    </div>
  );
}

//? pull out information from backend we need to define getStaticProps function
//*define the function
//*define type of props
//* it fetches data at build time
export const getStaticProps: GetStaticProps = async () => {
  //fetch the experience data
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();
  const projects: Project[] = await fetchProject();
  const pageInfo: pageInfo[] = await fetchPageInfo();
  return {
    //return in form of props
    props: {
      experiences,
      skills,
      socials,
      pageInfo,
      projects,
    },
    //? when we deploy sanity it fetch data from the server and build that page and then it will cached. it will not redeploy every request but it will be outdated after a certain time by using revalidate flag next.js will attempt regenerate the page in a certain amount time
    revalidate: 10,
  };
};
