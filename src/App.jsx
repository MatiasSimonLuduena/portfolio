import { useState } from "react"

// imports components
import Navbar from "./components/navbar/Navbar"
import SliderMenu from "./components/navbar/SliderMenu"

function App() {
  const [slider, setSlider] = useState(null);

  return (
    <>
      <SliderMenu setSlider={setSlider} slider={slider} />
      <Navbar setSlider={setSlider} />
    </>
  )
}

export default App
