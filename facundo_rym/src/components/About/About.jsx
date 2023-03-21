import styles from './About.module.css'

export default function About(){
    return(
    <div className={styles.presentacion}>
        <div className={styles.contenedorAbout}>
            <div className={styles.imagen}/>
            <div className={styles.texto}>
                <span> Hello world! esto es una pagina desarrollada por Facundo Vila, como parte del proyecto integrador del que forma parte en el moduo 2 del bootcamp de Soy Henry, en el apartado de front-end</span>
            </div>
        </div>
    </div>)
}