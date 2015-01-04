var fs = require("fs");
var http = require("http");
var server = http.createServer(function(request, response){
  var path = request.url;
  var pathSplit = path.split("/"); //path split by the slash
  if(path.slice(path.length-4,path.length)==="html"){ //if last 4 chars are html of portfolio then
    //console.log(pathSplit);
    if (pathSplit.length > 2){ // if the split path is for portfolio (greater then 2 ex: index/project) ***MEMO*** pathSplit("/") <<< this has a empty space at index[0]
     var readProj = pathSplit.splice(1, pathSplit.length); //array of pathsplit[1] and pathsplit[2]
     console.log(readProj);
     var readProjPath = readProj[0] + "/" + readProj[1]; //takes the index of previous and joins
     fs.readFile(readProjPath, function(err, data){
       response.end(data);
     });
   }
    // if path is not portfolio but only the regular HTML page
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
    //same concept for the rest of this the greater than 2 is for portfolio CSS and Javascript
    else if (path.slice(path.length-4,path.length)===".css"){
      if (pathSplit.length > 2){
        var readProj = pathSplit.splice(1, pathSplit.length);
        var readProjCss = readProj[0] + "/" + readProj[1];
        fs.readFile(readProjCss, function(err, data){
          response.end(data);
        });
      }
      else if (pathSplit.length <=2){
        var readCss = path.split("/").splice(1,1);
        fs.readFile(readCss.join(), function(err, data){
        response.end(data);
      });
    }
  }
    else if (path.slice(path.length-3,path.length)===".js"){
      if(pathSplit.length > 2){
        var readProj = pathSplit.splice(1, pathSplit.length);
        var readProjJs = readProj[0] + "/" + readProj[1];
        fs.readFile(readProjJs, function(err, data){
          response.end(data);
        })
      }
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
