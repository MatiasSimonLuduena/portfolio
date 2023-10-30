import { useState, useEffect } from "react"

import { Routes, Route } from "react-router-dom"

// imports components
import Navbar from "./components/navbar/Navbar"
import SliderMenu from "./components/navbar/SliderMenu"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

// imports page
import ProjectsPage from "./pages/projects/ProjectsPage"

function App() {
  const [slider, setSlider] = useState(null);

  // menu active button
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const updateCurrentSection = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionRect = section.getBoundingClientRect();
        if (sectionRect.top <= 10 && sectionRect.bottom >= 0) {
          currentSection = section.id;
        }
      });

      setCurrentSection(currentSection);
    };
    window.addEventListener('scroll', updateCurrentSection);

    updateCurrentSection();

    return () => {
      window.removeEventListener('scroll', updateCurrentSection);
    };
  }, []);

  return (
    <>
      <SliderMenu setSlider={setSlider} slider={slider} currentSection={currentSection} />
      <Navbar setSlider={setSlider} currentSection={currentSection} />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
