import {useState} from 'react'
import validation from './validation'
import styles from './Forms.module.css'

export default function Form (props){
    
    const [userData,setUserData] = useState({
        email:'',
        password:''
    })
    
    const [errors,setErrors] = useState({
        email:'',
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
        <div className={styles.Contenedor}>
        <form className={styles.form} onSubmit={handleSubmit}>

            <div className={styles.PasswordContainer}>
                <label htmlFor="email" className={styles.labelUsername} >Email:</label>
                <input type='text' name="email" onChange={handleInputChange} value={userData.email} className={styles.UsernameInput}></input>
                <div className={styles.UsernameWarning} style={errors.email?{display:'block'}:{display:'none'}}> &#9888;</div>
                <p className={styles.warningMessageUser}>{errors.email}</p>
            {/* </div>
            <div className={styles.PasswordContainer}> */}
                <label htmlFor="password" className={styles.labelPassword} >Password:</label>
                <div className={styles.auxPass}><input type='password' name="password" onChange={handleInputChange} value={userData.password} className={styles.PasswordInput}></input>
                <div className={styles.PasswordWarning} style={errors.password?{display:'block'}:{display:'none'}}> &#9888;</div>
                <p className={styles.warningMessagePass} > {errors.password}</p>
                </div>
            </div>
            <button className={styles.login} >login</button>
        </form>
        </div>
    )
}