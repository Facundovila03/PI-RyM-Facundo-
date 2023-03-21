import styles from './Menu.module.css'

export default function Menu () {
    return(
        <div className={styles.divDesplegable}>
            <button className={styles.dropbtn} >X</button>
            <div className={styles.menu}>
                <p>cosa 1</p>
                <p>cosa 2</p>
                <p>cosa 3</p>
            </div>
        </div>
    )
};