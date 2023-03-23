var http = require('http');
var fs = require('fs');
const { url } = require("inspector");
const getCharById = require('./controllers/getCharById')
// const DATA = require('./utils/data') 

http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log('esta llegando una peticion')
    // if (req.url.includes('/rickandmorty/character')) {
        var id = req.url.split('/').pop()
    //     console.log('hola')
    //     console.log(DATA)
    //     console.log('chau')
    //     const personaje = DATA.find((char)=> char.id === id)
        // const personaje = DATA[id-1]
    //     res.writeHead(200,{'Content-Type':'application/json'});
    //     return res.end(JSON.stringify(personaje))
    // }
    if(req.url.includes('/rickandmorty/character')){
        getCharById(res,id)
    }

}).listen(3001,'localhost')

// console.log(DATA)
console.log('termine')