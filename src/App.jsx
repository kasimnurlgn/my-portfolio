import "./App.css";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Services from "./sections/Services/Services";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import WhyWorkWithMe from "./sections/WhyWorkWithMe/WhyWorkWithMe";

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Services />
      <WhyWorkWithMe />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
