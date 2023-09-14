import "./App.scss";
import Header from "./components/Header/index.js";
import Hero from "./components/Hero/index.js";
import About from "./components/About/index.js";
import Projects from "./components/Projects/index.js";
import Contact from "./components/Contact/index.js";
import Footer from "./components/Footer/index.js";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
