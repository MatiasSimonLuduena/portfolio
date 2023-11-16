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

  // hiden nav
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [showNav, setShowNav] = useState("init");

  // menu active button
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    // section current
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

    // hidden nav
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      // Determinar si el scroll es hacia arriba o hacia abajo
      if (currentPosition > scrollPosition) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      // Actualizar la posición del scroll
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', updateCurrentSection);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <SliderMenu setSlider={setSlider} slider={slider} currentSection={currentSection} />
      <Navbar setSlider={setSlider} currentSection={currentSection} showNav={showNav} />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About/>
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
