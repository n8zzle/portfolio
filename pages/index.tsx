import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
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

      {/*TODO:Skills*/}

      {/*TODO:Projects*/}

      {/*TODO:Contact Me*/}
    </div>
  );
}
