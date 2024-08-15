import React from "react";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar";
import Aboutme from "./pages/About";
import HoverList from "./pages/Skills";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import './App.css';

function App() {
  return (
    <div className="App">
      <video autoPlay muted loop className="background-video">
        <source src="/videos/4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Navbar />

      <Element name="about" className="element pt-20">
        <Aboutme />
      </Element>
      <Element name="skills" className="element pt-20">
        <HoverList />
      </Element>
      <Element name="projects" className="element pt-20">
        <Project />
      </Element>
      <Element name="contact" className="element pt-20">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
