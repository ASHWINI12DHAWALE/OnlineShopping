var express = require('express');
var app = express();

var customerController=function (req, res) {
  console.log("CAlling rest API");
  var customers=[
            {firstName:'Ram',lastName:'Talele',age:22},
            {firstName:'pratima',lastName:'kale',age:21},
            {firstName:'Vishal',lastName:'Soni',age:30},
            {firstName:'Komal',lastName:'jain',age:33}
      ];
  res.send(customers);
};

app.get('/customers',customerController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("listen to localhost:8088", host, port)
})