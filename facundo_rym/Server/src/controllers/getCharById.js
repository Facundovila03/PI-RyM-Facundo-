const axios = require('axios');

const getCharById = (res,id)=>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response)=>{
        const { id, image, name, gender, species } = response.data
        res.writeHead(200,{'Content-Type':'application/json'})
        return res.end(JSON.stringify({ id, image, name, gender, species }))
    }).catch((err) => {
        res.writeHead(500, { "Content-Type": "text/plain" })
        return res.end(err.message)
    })
    }




module.exports=getCharById;
