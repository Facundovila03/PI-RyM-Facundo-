const validation = (userData,errors,setErrors,property)=>{
    const validUsername = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const validPassword = /^(?=.*\d).{6,10}$/;

    if(property === 'username'){
        if (!userData.username) {
            setErrors({...errors,username:'Por Favor completar este campo'})
        }else if (userData.username.length>35) {
            setErrors({...errors,username:'El usuario no puede exceder los 35 carateres'})
        }else if (!validUsername.test(userData.username)) {
            setErrors({...errors,username:'Email invalido'})
        }else{
            setErrors({...errors,username:''})
        }
    }

    if (property === 'password') {
        if (!validPassword.test(userData.password)) {
            setErrors({...errors,password:'debe contener al menos un numero y de 6 a 10 digitos'})
        }else{
            setErrors({...errors,password:''})
        }
    }

}

export default validation;