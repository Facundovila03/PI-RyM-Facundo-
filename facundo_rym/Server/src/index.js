const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const server = express();
const router = require("./routes/index");
const { conn } = require("./DB_connection");

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());

// server.use((req,res,next)=>{
//    const {email, password} = req.query
// console.log({email,password})
// next()
// })
server.use(router);
// console.log(router)

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log("Server raised in port: " + PORT);
  });
});
