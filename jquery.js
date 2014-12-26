$(document).ready(function(){
  console.log("ready");
  $("#nextButton").click(function(){
    console.log("clicked");
    $("#slide1").slideUp("slow", function(){
      $("#slide2").slideDown("slow", function(){
        $("#slide2").css("display","inline");
        console.log("done");
      });
    });
  });
});
