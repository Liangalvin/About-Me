var fs = require("fs");
var http = require("http");
var server = http.createServer(function(request, response){
  var path = request.url;
  if(path.slice(path.length-4,path.length)==="html"){
    var pathSplit = path.split("/");
    //console.log(pathSplit);
    if (pathSplit.length > 2){
     var readProj = pathSplit.splice(1, pathSplit.length);
     var readProjPath = readProj[0] + "/" + readProj[1];
     console.log(readProjPath);
     fs.readFile(readProjPath, function(err, data){
       response.end(data);
     });
   }
      else if (pathSplit.length <= 2){
          var readHtml = pathSplit.splice(1,1);
          //console.log(readHtml);
          fs.readFile(readHtml.join(), function(err, data){
            response.end(data);
        });
      }
    }
    else if (path === "/"){
      fs.readFile("index.html", function(err, data){
        response.end(data);
      });
    }

  //   console.log(path.split("/"));
  //   var readHtml = path.split("/").splice(1,1);
  //   fs.readFile(readHtml.join(), function(err, data){
  //     console.log(readHtml);
  //     response.end(data);
  //   })
  // }
    else if (path.slice(path.length-4,path.length)===".css"){
      var readCss = path.split("/").splice(1,1);
      fs.readFile(readCss.join(), function(err, data){
      response.end(data);
    });
  }
    else if (path.slice(path.length-3,path.length)===".js"){
      var readJs = path.split("/").splice(1,1);
      fs.readFile(readJs.join(), function(err, data){
        response.end(data);
      });
    }
    else if (path.slice(path.length-4,path.length) === ".png"){
      var readPng = path.split("/").splice(2, 1).join();
      //console.log(readPng);
      fs.readFile("images/"+readPng, function(err, data){
        response.end(data);
      });
    }
});
server.listen(2000);
