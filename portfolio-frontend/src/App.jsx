
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Contact from "./sections/Contact";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer />
    </>
  );
}

export default App;
