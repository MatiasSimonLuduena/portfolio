import styles from './projectspage.module.css'

import { projects } from "../../../data"

import { useEffect } from "react"

const ProjectsPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className={styles.container_app} id='projects-top'>
      <div className='container'>
        <div className={`${styles.top} pb-5 pt-1 mb-3`}>
          <h3 className="h3_title pt-3 mt-5 text-center">Todos mis proyectos</h3>
          <div className="line"></div>
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
      </div>
    </div>
  )
}

export default ProjectsPage