import styles from './Nav.module.css'
import {NavLink} from 'react-router-dom'

function Nav (prop){
  const imgSrc= "https://i5.walmartimages.com/asr/bcc4085e-c311-4886-a7a4-aa58127883d7.5958f8a36f96aa4c08dbc4a8a580e57c.png"
    return(
        <div className={styles.nav} >
        <img className={styles.imagen} src={imgSrc} alt=""></img>
        <div className={styles.navegacion}>
        <NavLink className={styles.aboutBtn} to='/about'>About</NavLink>
        <NavLink className={styles.homeBtn} to='/home'>Home</NavLink>
        <NavLink className={styles.favoritos} to='/favoritos'>Favoritos</NavLink>
        </div>
      </div>
    )
}


export default Nav;