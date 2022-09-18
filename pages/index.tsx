import Head from "next/head";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-grey-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Igor's Portfolio</title>
      </Head>

      {/*Header*/}
      <Header />
      {/*TODO:Hero*/}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/*TODO:About*/}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/*TODO:  Experience*/}
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      {/*TODO:Skills*/}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/*TODO:Projects*/}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/*TODO:Contact Me*/}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
}
