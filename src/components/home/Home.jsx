/* eslint-disable react/prop-types */
import styles from "./home.module.css"

const Home = ({ data, loading }) => {
  return (
    <section className={styles.container_app} id="home">
      {
        loading ? (
          <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="spinner-border"></div>
          </div>
        ) : (<>
          <div className="container">
            <h1>{ data.title }</h1>
              <p>{ data.parraf }</p>
              <a className="button" href="/#projects">Proyectos</a>
          </div>
          <div className={styles.social_media}>
            <img alt="LinkedIn" src="social/linkedin.png" />
            <img alt="GitHub" src="social/github.png" />
            <img alt="Instagram" src="social/instagram.png" />
          </div>
          <a className={styles.mail} href="mailto:matiasluduena.contacto@gmail.com">
            matiasluduena.contacto@gmail.com
          </a>     
        </>)
      }
    </section>
  )
}

export default Home