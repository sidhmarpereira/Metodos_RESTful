  

  const express = require("express");
  const server = express();

server.use(express.json());

let customers = [

{id: 1, name: "Dev Samurai", site: "http:// devsamurai.com.br"},
{id: 2, name: "Google", site: "http://google.com"},
{id: 3, name: "UOL", site: "http://uol.com.br"}

];

server.get("/customer",(req, res)=>{
 return res.json(customers);
});

server.get("/customers/:id", (req, res)=>{
const id = parseInt(req.params.id);
const customer = customers.find(item =>item.id === id);
const status = customer ? 200 : 404;

return res.status(status).json(customer);

});
 
server.post("/customers", (req ,res) => {
const {name,site} = req.body;
const id = customers[customers.length - 1].id + 1;

const newCustomer = {id, name, site};
customers.push(newCustomer);
return res.status(201).json(newCustomer)


});


server.listen(3000);

