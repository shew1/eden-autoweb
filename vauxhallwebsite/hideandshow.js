<!--javascript for the hidden content-->

$(document).ready(function(){
    <!--Crossland X Div-->
    
    $("p1").hide();
    $("button.1c").hide();
    $("div1").hide();
  $("#show1").click(function(){
    $("p1").show();
    $("button.1c").show();
     $("button.2c").hide();
      $("div1").show();
  });
    $("#hide1").click(function(){
    $("p1").hide();
    $("button.2c").show();
     $("button.1c").hide()
    $("div1").hide();
  });
    <!--Mokka X Div-->
    
      $("p2").hide();
    $("button.1b").hide();
  $("#show2").click(function(){
    $("p2").show();
    $("button.1b").show();
     $("button.2b").hide();
  });
    $("#hide2").click(function(){
    $("p2").hide();
    $("button.2b").show();
     $("button.1b").hide()
  });
    <!--Grandland X Div-->
    
      $("p3").hide();
    $("button.1a").hide();
  $("#show3").click(function(){
    $("p3").show();
    $("button.1a").show();
     $("button.2a").hide();
  });
    $("#hide3").click(function(){
    $("p3").hide();
    $("button.2a").show();
     $("button.1a").hide()
  });
});