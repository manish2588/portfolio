import React, { useEffect } from "react";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar";
import Aboutme from "./pages/About";
import HoverList from "./pages/Skills";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import "./App.css";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup Lenis on component unmount
    };
  }, []);

  return (
    <div className="App">
    

      <Navbar />

      <Element name="about" className="element pt-20">
        <Aboutme />
      </Element>
      <Element name="skills" className="element pt-20">
        <HoverList />
      </Element>
      <Element name="projects" className="element min-h-screen">
        <Project />
      </Element>
      <Element name="contact" className="element pt-20">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
