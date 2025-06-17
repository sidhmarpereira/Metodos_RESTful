const express = require ("express");

const server = express();

server.use(express.json());
let customers =[

{id: 1, name: "Dev Samurai", site: "Http://devsamurai.com.br"},
{id: 2, name: "Google", site: "http://google"},
{id: 3, name: "UOL", site:"http://uol.com.br"}
] ;

server.get("/customers",(req,res)=>{
return res.json(customers);

});

server.listen(3000);

