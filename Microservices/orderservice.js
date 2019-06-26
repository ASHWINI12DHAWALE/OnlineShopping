var express = require('express');
var app = express();

var ordersController=function(req, res){

  var orders = [
    {id:1, customer:"Nikita",amount:2300, status:"rejected"},
    {id:2, customer:"Pratima",amount:3003, status:"completed"},
    {id:3, customer:"Komal",amount:5900, status:"rejected"},
	 {id:4, customer:"Vishal",amount:900, status:"inprocess"}
  ];
  res.send(orders);
};
 


app.get('/orders',ordersController);

var server = app.listen(8087, function () {
  var host = server.address().address
  var port = server.address().port
  console.log(" Listen to localhost:8087", host, port)
})