var http = require('http');
var fs = require('fs');
const { url } = require("inspector");
const DATA = require('./utils/data') 

http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes('/rickandmorty/character')) {
        var id = url.split('/').pop()
        const personaje = DATA.map((char)=> char.id === id)
    }
}).listen(3001,'localhost')

console.log(DATA)
console.log('termine')