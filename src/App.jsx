import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About2 from "./components/About2";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About2 />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
