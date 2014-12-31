var fs = require("fs");
var http = require("http");
var server = http.createServer(function(request, response){
  var path = request.url;
  if(path.slice(path.length-4,path.length)==="html"){
    var readHTML = path.split("/").splice(1,1);
    fs.readFile(readHTML.join(), function(err, data){
      //console.log(readHTML);
      response.end(data);
    })
  }
    else if (path.slice(path.length-4,path.length)===".css"){
      var readCss = path.split("/").splice(1,1);
      fs.readFile(readCss.join(), function(err, data){
      response.end(data.toString());
    });
  }
    else if (path.slice(path.length-3,path.length)===".js"){
      var readJs = path.split("/").splice(1,1);
      fs.readFile(readJs.join(), function(err, data){
        response.end(data);
      });
    }
    else if (path.slice(path.length-4,path.length) === ".png"){
      fs.readFile(path, function(err, data){
        console.log(path);
        console.log(data);
        response.end(data);
      });
    }
});
server.listen(2000);
