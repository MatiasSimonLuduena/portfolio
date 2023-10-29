/* eslint-disable react/prop-types */
import styles from "./slidermenu.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

const SliderMenu = ({ slider, setSlider }) => {
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
        <a className="button_hover">Inicio</a>
        <a className="button_hover">Sobre mi</a>
        <a className="button_hover">Contacto</a>
        <a className="button_hover">Proyectos</a>
      </div>
      <FontAwesomeIcon icon={faXmark} onClick={() => setSlider("left")} />
    </div>
  )
}

export default SliderMenu