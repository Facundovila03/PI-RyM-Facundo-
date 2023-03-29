const permitidos = require('../utils/users')

const login = (req,res)=>{
    const {email , password} = req.query
    const usuario =  permitidos.find((user)=>user.email === email && user.password === password)
    if(usuario){  res.status(200).send({access:true})}
    else{  res.status(200).send({access:false})}
}

module.exports = login