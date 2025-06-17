const express = require ("express");

const server = express();


server.get("/hello", (req, res) =>{
    const name =req.query.name;
    return  res.json({
    title:  "Hello word",
    message: 'Olá  {nome} tudo bem!?'

   });

});

server.listen(3000);

