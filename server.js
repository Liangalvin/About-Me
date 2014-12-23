var fs = require("fs");
var http = require("http");
var server = http.createServer(function(request, response){
  var path = request.url;
  var title = path.split("/");
  response.end()
});
server.listen(2000);
