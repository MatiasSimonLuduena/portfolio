import { useState } from "react"

// imports components
import Navbar from "./components/navbar/Navbar"
import SliderMenu from "./components/navbar/SliderMenu"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Footer from "./components/footer/Footer"

function App() {
  const [slider, setSlider] = useState(null);

  return (
    <>
      <SliderMenu setSlider={setSlider} slider={slider} />
      <Navbar setSlider={setSlider} />
      <Home />
      <About />
      <Footer />
    </>
  )
}

export default App
