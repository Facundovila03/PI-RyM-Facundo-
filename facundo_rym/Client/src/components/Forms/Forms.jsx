import {useState} from 'react'
import validation from './validation'
import styles from './Forms.module.css'

export default function Form (props){
    
    const [userData,setUserData] = useState({
        username:'',
        password:''
    })
    
    const [errors,setErrors] = useState({
        username:'',
        password:'' 
    })
    
    const handleInputChange =(event)=>{
        const property = event.target.name;
        const valor = event.target.value;
        setUserData({...userData,[property]:valor});
        validation({...userData,[property]:valor},errors,setErrors,property)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData)
    }
    
    return(
        <form className={styles.contenedorEncuesta} onSubmit={handleSubmit}>
            <div className={styles.username} >
                <p>{errors.username}</p>
                <label htmlFor="username">Username:</label>
                <input type='text'  name="username"  value={userData.username} onChange={handleInputChange}></input>
            </div>
            <div>
                <p>{errors.password}</p>
                <label htmlFor="password" >Password:</label>
                <input type='text' name="password" onChange={handleInputChange} value={userData.password}></input>
            </div>
            <button >login</button>
        </form>
    )
}