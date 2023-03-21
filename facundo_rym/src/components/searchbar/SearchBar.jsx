import React from 'react';
import styles from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {
   const [id,setId] = useState('')

   const handleChange =(event) => {
      setId(event.target.value)
   }
   return ( 
      <>   
         <div className={styles.contenedorBusqueda}>
            <div className={styles.InputBoton}>
               <input className={styles.InputBusqueda} type='search' onChange={handleChange}/>
               <button className={styles.Agregar} onClick={() => onSearch(id)}>Agregar</button>
            </div>
         </div>
         <br></br>
      </>   
   );
}
