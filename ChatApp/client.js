//var ws = new WebSocket("ws://localhost:3000");
//var ws = new WebSocket("ws://alvin.princesspeach.nyc:3000");
var ws = new WebSocket("http://104.131.85.193:8080/");

var ul = document.createElement("ul");
var body = document.querySelector("body");
var div = document.querySelector("div");
var clientList = document.querySelector("#clientsConnected");
div.appendChild(ul);

ws.addEventListener("open", function(evt){
  var userName = prompt("GIVE ME YOUR PHUCKING NAME").trim();
  var sendIt = function(person){
  //  var userMessage = {name: userName};
    jsName["name"]= userName;
    //console.log(userMessage);
    var jsNamed = JSON.stringify(jsName); //jsName.name
    //console.log(jsNamed.name)
    ws.send(userMessage);
    console.log(userMessage);
    var newClientLi = document.createElement("li");
    newClientLi.innerHTML=userName;
    clientList.appendChild(newClientLi);
  }
    var userColor = prompt("pick a color");

    //addText('Current Status: Connected');
    var addText = function(msg){
      var newli = document.createElement("li");
      //var clientLi = document.createElemetn("li");
      var jsMsg = JSON.parse(msg);
      var printMessage = jsMsg.name + ": " + jsMsg.newMessage;
      //console.log(mssg);
      //var clientName = mssg.name.trim();
      //clientList.appendChild(clientLi);
      //clientName.innerHTML = mssg.name;
      var parseMessage = jsMsg.newMessage.trim();
      //console.log(parseMessage);
      var msgAry = parseMessage.split(" ");
      input.value = " ";
      for(var i = 0; i < msgAry.length; i++){
        if(msgAry[i] === "!yell"){
          msgAry.splice(i, 1);
          //console.log(msgAry);
          for(var i = 0 ; i < msgAry.length; i++){
            msgAry[i] = msgAry[i].toUpperCase();
            //console.log(msgAry);
            printMessage = "<li>" + jsMsg.name + ": " + msgAry.join(" ") + "!" + "</li>";
          }
        }
        else if (msgAry[i] === "!kurbee"){
          msgAry.splice(i, 1);
          msg = ("<(''<) (^''^) (>'')> <(''<) (^''^) (>'')>   <<< LOOK AT KIRBY GO!")
          printMessage = "<li>" + jsMsg.name + ": " + msg + "<li>";
        }
      }

      newli.style.color = jsMsg.color;

      newli.innerHTML = printMessage;
      var firstli = ul.firstChild;
      ul.insertBefore(newli, firstli);
      //ul.appendChild(newli);
      // var clientLi = document.createElemetn("li");
      // var clientName = mssg.name;
      // clientList.appendChild(clientLi);
      // clientName.innerHTML = mssg.name;
    }

  ws.addEventListener("message", function(evt){
    addText(evt.data);
//});

    var picParse = JSON.parse(evt.data);
    var createLi = document.createElement("li");
    ul.appendChild(createLi);
    var picMsg = picParse.newMessage;

    var fourChar = picMsg.substring(0, 5).trim();
    if (fourChar === "http"){
      var length = picMsg.length;
      //console.log(length);
      var lastThree = picMsg.substring(length-3, length);
      //console.log(lastThree);
      if (lastThree === "png" || lastThree === "jpg" || lastThree === "bmp" || lastThree === "gif"){
        innerMessage = "<img src='" + picMsg +"'>";
      }
      else{
        innerMessage = "<a href='" + picMsg + "'>" + picMsg + "</a>";
        //console.log(innerMessage);
      }
      createLi.innerHTML = innerMessage;
      //console.log(innerMessage);
    }
  });



  button.addEventListener("click", function(evt){
    var inputStr = document.querySelector("#input");
    var userMessage = {name: userName, newMessage: inputStr.value, color: userColor};
    // user["strings"] = inputStr.toString().trim();
    var info = JSON.stringify(userMessage);
      ws.send(info);
      input.value = " ";
  });

  input.addEventListener("keypress", function(evt){
      if(evt.keyCode === 13){
        var inputStr = document.querySelector("#input");
        var userMessage = {name: userName, newMessage: inputStr.value, color: userColor};
        var info = JSON.stringify(userMessage);
      ws.send(info);
      input.value = " ";
    }
  });
});
