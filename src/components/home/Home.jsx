import styles from "./home.module.css"

const Home = () => {
  return (
    <div className={styles.container_app}>
        <div className="container">
            <h1>Hola, Soy Matias Ludueña</h1>
            <p>
                Un desarrollador web con enfoque en tecnologías como ReactJS y NodeJS, especializado en la creación tanto del frontend como del backend de sitios web y aplicaciones, contribuyendo al éxito global del producto.
            </p>
            <button>Proyectos</button>
        </div>
        <div className={styles.social_media}>
            <img alt="LinkedIn" src="social/linkedin.png" />
            <img alt="GitHub" src="social/github.png" />
            <img alt="Instagram" src="social/instagram.png" />
        </div>
    </div>
  )
}

export default Home