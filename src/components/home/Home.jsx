/* eslint-disable react/prop-types */
import styles from "./home.module.css"

const Home = () => {
  return (
    <section className={styles.container_app} id="home">
      <div className={`${styles.container_init} container`}>
            <h1>Hola, soy Matias Ludueña</h1>
            <p>Un desarrollador web con enfoque en tecnologías como ReactJS y NodeJS, especializado en la creación tanto del frontend como del backend de sitios web y aplicaciones, contribuyendo al éxito global del producto.</p>
            <a className="button op0" href="/#projects">Proyectos</a>
          </div>
          <div className={styles.social_media}>
            <a href="https://wa.me/543518147093" target="_blank" rel="noreferrer">
              <img alt="Whatsapp" src="social/whatsapp.png" />
            </a>
            <a
              href="https://www.linkedin.com/in/matiassimonluduena"
              target="_blank" rel="noreferrer"
            >
              <img alt="LinkedIn" src="social/linkedin.png" />
            </a>
            <a href="https://github.com/MatiasSimonLuduena" target="_blank" rel="noreferrer">
              <img alt="GitHub" src="social/github.png" />
            </a>
            <a href="https://www.instagram.com/matias.sluduena" target="_blank" rel="noreferrer">
              <img alt="Instagram" src="social/instagram.png" />
            </a>
          </div>
          <a className={styles.mail} href="mailto:matiasluduena.contacto@gmail.com">
            matiasluduena.contacto@gmail.com
          </a> 
    </section>
  )
}

export default Home