import styles from './contact.module.css'

const Contact = () => {
  return (
    <div className={styles.container_app}>
        <div className='container'>
            <div className={`${styles.top} pb-3`}>
                <h3 className="h3_title pt-3 mt-5">Contacto</h3>
                <div className="line"></div>
                <span className="parraf">
                    No dudes en ponerte en contacto conmigo a través del siguiente formulario, estaré encantado de responderte lo más pronto posible.
                </span>
            </div>
            <div className={styles.container_form}>
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type='text' placeholder='Escribe tu nombre' />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type='text' placeholder='Escribe tu email' />
                </div>
                <div>
                    <label htmlFor=''>Mensaje</label>
                    <textarea placeholder='Escribe tu mensaje'></textarea>
                </div>
                <button className='button mt-3'>Enviar</button>
            </div>
        </div>
    </div>
  )
}

export default Contact