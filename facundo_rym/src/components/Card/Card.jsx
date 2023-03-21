// import styled from 'styled-components'
import { useState, useEffect } from 'react';
import styles from '../Card/Card.module.css'
import {connect} from 'react-redux'
import { addCharacter, removeCharacter } from '../../Redux/action';
// import myFavorites from '../../Redux/reducer'

function CardOtros(props) {
   const [isFav, setIsFav] = useState(false)
   
   
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);
   
   
   
   const handleFavorite = ()=>{
      if(isFav){
         setIsFav(false);
         console.log(props.id)
         props.removeCharacter(props.id)
      }else{
         setIsFav(true);
         console.log(props)

         props.addCharacter(props)
      }
   }

   return (
      <>
      <div className={styles.borde}>
         <div className={styles.bigDiv}>
            <div>
               <button className={styles.botonCerrar} onClick={()=>props.onClose(props.id)}><span>X</span></button><br></br>
               <img className={styles.imagen} src={props.image} alt=""  />
               <div className={styles.nombre}><p><strong>{props.name}</strong></p></div>
            </div>
            <div className={styles.datos}>
               <p className={styles.especie}><strong>Species<br></br></strong> {props.species}</p>
               <p className={styles.genero}><strong>Gender<br></br></strong> {props.gender}</p>
            </div>
               {
            isFav ? (
               <button className={styles.favoritos} onClick={handleFavorite}>❤️</button>
            ) : (
               <button  className={styles.favoritos} onClick={handleFavorite}>🤍</button>
            )
         }
         </div>
      </div>
      </>
   );
   
}

const mapStateToProps = (state)=>{
   return {
      myFavorites : state.myFavorites,
      allCharacters: state.allCharacters
   }
}

const mapDispatchToProps = (dispatch,aux)=>{
   return {
      removeCharacter: ()=>{
         console.log('removeCharacter')
         dispatch(removeCharacter(aux.id))
      },
      addCharacter:()=>{
         console.log('addCharacter')
         dispatch(addCharacter(aux))
      }
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(CardOtros)