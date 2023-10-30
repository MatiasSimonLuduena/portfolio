/* eslint-disable react/prop-types */
import styles from "./slidermenu.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

const SliderMenu = ({ slider, setSlider, currentSection }) => {
  return (
    <div className={`
      ${styles.container}
      ${slider === "left" ? styles.left : (slider === "right" ? styles.right : styles.hidden)}
    `}
      onClick={() => setSlider("left")}
    >
      <div className={`${styles.container_main} d-flex flex-column align-items-start`}
        onClick={e => e.stopPropagation()}
      >
        <a href="#home" onClick={() => setSlider("left")}
          className={`button_hover buttons_a mt-3
          ${currentSection === "home" && "button_active"}`}
        >Inicio</a>
        <a href="#about" onClick={() => setSlider("left")}
          className={`button_hover buttons_a 
          ${currentSection === "about" && "button_active"}`}
        >Sobre mi</a>
        <a href="#projects" onClick={() => setSlider("left")}
          className={`button_hover buttons_a 
          ${currentSection === "projects" && "button_active"}`}
        >Proyectos</a>
        <a href="#contact" onClick={() => setSlider("left")}
          className={`button_hover buttons_a 
          ${currentSection === "contact" && "button_active"}`}
        >Contacto</a>

      <p>
        La simplicidad es la máxima sofisticación. <br/>- Leonardo da Vinci</p>
      </div>
      <FontAwesomeIcon icon={faXmark} onClick={() => setSlider("left")} />
    </div>
  )
}

export default SliderMenu