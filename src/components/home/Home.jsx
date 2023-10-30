import styles from "./home.module.css"

const Home = () => {
  return (
    <section className={styles.container_app} id="home">
      <div className="container">
        <h1>Hola, Soy Matias Ludueña</h1>
        <p>
          Un desarrollador web con enfoque en tecnologías como ReactJS y NodeJS, especializado en la creación tanto del frontend como del backend de sitios web y aplicaciones, contribuyendo al éxito global del producto.
        </p>
        <a className="button" href="/#projects">Proyectos</a>
      </div>
      <div className={styles.social_media}>
        <img alt="LinkedIn" src="social/linkedin.png" />
        <img alt="GitHub" src="social/github.png" />
        <img alt="Instagram" src="social/instagram.png" />
      </div>
    </section>
  )
}

export default Home