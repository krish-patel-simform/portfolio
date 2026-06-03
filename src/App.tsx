import "./App.css";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Project from "./component/Project/Project";
import Skills from "./component/Skills/Skills";

function App() {
  return (
    <section className="main-container">
      <Header />
      <Hero id={"hero"} />
      <About id={"about"} />
      <Skills id={"skills"} />
      <Project id={"project"} />
      <Contact id={"contact"} />
    </section>
  );
}

export default App;
