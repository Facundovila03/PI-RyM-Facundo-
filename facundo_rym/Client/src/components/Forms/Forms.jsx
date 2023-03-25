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
        <div className={styles.Contenedor}>
        <form className={styles.form} onSubmit={handleSubmit}>
            {/* <div className={styles.PasswordContainer} >
                <label htmlFor="username" >Username:</label>
                <input type='text'  name="username"  value={userData.username} onChange={handleInputChange} className={styles.PasswordInput}></input>
                <div className={styles.PasswordWarning} style={errors.username?{opacity:1}:{opacity:0}}> &#9888;</div>
                <p className={styles.warningMessagePass}>{errors.username}</p>
            </div> */}
            <div className={styles.PasswordContainer}>
                <label htmlFor="username"  >Username:</label>
                <input type='text' name="username" onChange={handleInputChange} value={userData.username} className={styles.UsernameInput}></input>
                <div className={styles.UsernameWarning} style={errors.username?{display:'block'}:{display:'none'}}> &#9888;</div>
                <p className={styles.warningMessageUser}>{errors.username}</p>
            {/* </div>
            <div className={styles.PasswordContainer}> */}
                <label htmlFor="password"  >Password:</label>
                <input type='password' name="password" onChange={handleInputChange} value={userData.password} className={styles.PasswordInput}></input>
                <div className={styles.PasswordWarning} style={errors.password?{display:'block'}:{display:'none'}}> &#9888;</div>
                <p className={styles.warningMessagePass}>{errors.password}</p>
            </div>
            <button className={styles.login} >login</button>
        </form>
        </div>
    )
}