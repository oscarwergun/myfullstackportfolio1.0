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
  experiences: Experience[] ;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};
export default function Home({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
}: Props) {
  return (
    <div
      className="bg-[#29264c] h-screen snap-y snap-mandatory 
    overflow-scroll z-0 debug-screens"
    >
      <Head>
        <title>Codeguruozzy fullstack portfolio</title>
      </Head>
      <Header socials={socials}/>
      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo}/>
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>
       
      <section id="experiences" className="snap-center">
        <Experiences experiences={experiences}/>
      </section>
      <section id="skills" className="snap-center">
        <Skills skills={skills}/>
      </section>
      <section id="projects" className="snap-center">
        <Projects projects={projects}/>
      </section>
      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  );
}

//? pull out information from backend we need to define getStaticProps function
//*define the function
//*define type of props
//* it fetches data at build time
export const getStaticProps: GetStaticProps<Props> = async () => {
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
