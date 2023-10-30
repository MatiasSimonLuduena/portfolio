import styles from './projects.module.css'

import { projects } from "../../../data"

const Projects = () => {
  return (
    <div className={styles.container_app}>
        <div className='container'>
            <div className={`${styles.top} pb-5 pt-1 mb-3`}>
                <h3 className="h3_title pt-3 mt-5">Proyectos</h3>
                <div className="line"></div>
                <span className="parraf">
                A continuación, les presento una selección de algunos de los proyectos de muestra y personales en los que he trabajado. Estos proyectos abarcan una amplia gama de áreas y reflejan mi compromiso con la creatividad y la innovación. Espero que disfruten explorando mi trabajo.
                </span>
            </div>
            <div className={styles.container_main}>
                {
                    projects.map((item, index) => (
                        <div className={styles.main_div} key={index}>
                            <img alt='computer' src={item.img} />
                            <div>
                                <h3>{ item.h3 }</h3>
                                <p className='parraf mb-4'>{ item.p }</p>
                                <button className='button'>Saber más</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={styles.all_projects}>
                <button>todos los proyectos</button>
            </div>
        </div>
    </div>
  )
}

export default Projects