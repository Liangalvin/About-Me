$(document).ready(function(){
  console.log("ready");
  $("#nextButton").click(function(){ //on next button clicked
    console.log("clicked");
    $("#slide1").slideUp("slow", function(){ //slide1 not visible
      $("#slide2").slideDown("slow", function(){ //slide2 visible
        $("#slide2").css("display","inline");
        console.log("slide2 done");
      });
    });
  });
  $("#backButton").click(function(){  //on back button clicked
    console.log("back");
    $("#slide2").slideUp("slow", function(){ //slide2 not visible
      $("#slide1").slideDown("slow", function(){ //slide 1 visible
        $("#slide1").css("display", "inline");
        console.log("slide1 done");
      });
    });
  });
});
