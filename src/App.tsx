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
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </section>
  );
}

export default App;
