var http = require('http');
var fs = require('fs');
const { url } = require("inspector");
const DATA = require('./utils/data') 

http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log('esta llegando una peticion')
    if (req.url.includes('/rickandmorty/character')) {
        var id = req.url.split('/').pop()
        const personaje = DATA.map((char)=> char.id === id)
        res.writeHead(200,{'Content-Type':'application/json'});
        return res.end(JSON.stringify(personaje))
    }
}).listen(3001,'localhost')

console.log(DATA)
console.log('termine')