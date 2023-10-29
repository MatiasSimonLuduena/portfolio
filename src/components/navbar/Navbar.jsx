/* eslint-disable react/prop-types */
import styles from "./navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = ({ setSlider }) => {
  return (
    <div className={styles.container}>
        <div className={
            `${styles.container_main} container d-flex justify-content-between px-4 py-3`
        }>
            <div className={`${styles.container_logo} d-flex align-items-center`}>
                <img src="avatar.png" alt="Avatar" />
                <span className="button_hover ms-3">Matias Ludueña</span>
            </div>
            <div className={
                `${styles.container_buttons} ${styles.show}`
            }>
                <a className="button_hover buttons_a">Inicio</a>
                <a className="button_hover buttons_a">Sobre mi</a>
                <a className="button_hover buttons_a">Contacto</a>     
                <a className="button_hover buttons_a">Proyectos</a>
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