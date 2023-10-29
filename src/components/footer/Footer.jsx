import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className="container p-3 py-4">
            <div className={styles.container_main}>
                <div className={styles.divs}>
                    <h2 className="mx-3">Matias Simon Ludueña</h2>
                    <p className="m-3 mt-4">Un desarrollador web con enfoque en tecnologías como ReactJS y NodeJS, especializado en la creación tanto del frontend como del backend de sitios web y aplicaciones, contribuyendo al éxito global del producto.</p>
                </div>
                <div className={styles.divs}>
                    <span className="m-3">Redes sociales</span>
                    <div className="m-3 mt-4">
                        <img alt="LinkedIn" src="social/linkedin.png" />
                        <img alt="GitHub" src="social/github.png" />
                        <img alt="Instagram" src="social/instagram.png" />
                    </div>
                </div>
            </div>
            <hr/>
            <div>
                <p className="copyright text-center pt-2">
                    © Copyright 2023. Made by Matías Simón Ludueña
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer