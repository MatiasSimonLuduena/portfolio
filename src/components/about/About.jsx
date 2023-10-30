import styles from "./about.module.css"

import { about } from "../../../data"

const About = () => {
  return (
    <section className={styles.container_app} id="about">
        <div className="container">
            <div className={`${styles.top} pb-3`}>
                <h3 className="h3_title pt-3 mt-5">Sobre mi</h3>
                <div className="line"></div>
                <span className="parraf">
                    Aquí encontrarás más información sobre mí, lo que hago y mis habilidades actuales principalmente en términos de programación y tecnología.
                </span>
            </div>
            <div className={styles.body}>
                <div className={styles.body_div}>
                    <h4 className="pb-3">Conóceme!</h4>
                    {
                        about.introduce.map((item, i) => (
                            <p className="pb-2 parraf" key={i}>
                                { item }
                            </p>
                        ))
                    }
                    <button className="button">Contactame</button>
                </div>
                <div className={styles.body_div}>
                    <h4 className="pb-3">Mis habilidades</h4>
                    {
                        about.skills.map((item, i) => (
                            <div key={i}>
                                <div className={styles.cajas}>
                                    { item.array.map((itemDos, index) => (
                                        <div key={index}>{ itemDos }</div>
                                    )) }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default About