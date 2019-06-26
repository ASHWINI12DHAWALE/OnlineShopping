var http=require('http');
//object----- model
var product ={
    title:"Cloths",
    description:"Casual wear,party wear,sports wear",
    unitprice:2200,
    quantity:50
};

var count=20;
count++;
var controller=function(request,response)
{
	response.writeHead(200,
	                {"Content-Type" : "text/plain"});
	                response.end( JSON.stringify(product));
};
var server=http.createServer(controller);
server.listen(7000);
console.log("listening on port 7000");