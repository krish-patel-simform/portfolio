import "./App.css";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";

function App() {
  return (
    <section className="main-container">
      <Header />
      <Hero />
      <About />
    </section>
  );
}

export default App;
