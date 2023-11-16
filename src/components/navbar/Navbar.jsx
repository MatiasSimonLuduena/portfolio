/* eslint-disable react/prop-types */
import styles from "./navbar.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = ({ setSlider, currentSection, showNav }) => {
  return (
    <div className={`
        ${styles.container} ${showNav !== "init" && (showNav ? styles.mostrar : styles.oculto)}
    `}>
        <div className={
            `${styles.container_main} container d-flex justify-content-between px-4 py-3`
        }>
            <a className={`${styles.container_logo} d-flex align-items-center`} href="/#home">
                <img src="avatar.png" alt="Avatar" />
                <span className="ms-3">Matias Ludueña</span>
            </a>
            <div className={
                `${styles.container_buttons} ${styles.show}`
            }>
                <a href="/#home"
                    className={`button_hover buttons_a 
                    ${currentSection === "home" && "button_active"}`}
                >Inicio</a>
                <a href="/#about"
                    className={`button_hover buttons_a 
                    ${currentSection === "about" && "button_active"}`}
                >Sobre mi</a>
                <a href="/#projects"
                    className={`button_hover buttons_a 
                    ${currentSection === "projects" && "button_active"}`}
                >Proyectos</a>
                <a href="/#contact"
                    className={`button_hover buttons_a 
                    ${currentSection === "contact" && "button_active"}`}
                >Contacto</a>
            </div>
            <div className={
                `${styles.container_bars} ${styles.hidden} d-flex align-items-center`
            }
                onClick={() => setSlider("right")}
            >
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
    </div>
  )
}

export default Navbar