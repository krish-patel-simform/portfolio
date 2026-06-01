import "./App.css";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Input from "./component/Input/Input";
import Skills from "./component/Skills/Skills";

function App() {
  return (
    <section className="main-container">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Contact />

      <Input type="email" name="email" placeholder="Your Email" />
    </section>
  );
}

export default App;
