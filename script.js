$(".top-left").click(function(){
   $(".clickBox").text("Thank you for clicking on me!");
   $(".top-left").css("background-color", "green");
});

$(".top-right").dblclick(function(){
    $("dblClickbox").text("thank you for double clicking on me!");
    $(".top-right").css("background-color","blue");
    
});

$(".bottom-left").hover(function(){
    $("hoverbox").text("thank you for hovering on me!");
    $(".bottom-left").css("background-color","yellow");
    
});

$(".bottom-right").mouseenter(function(){
    $("mouseenter").text("thank you for visiting!");
    $(".bottom-right").css("background-color","white");
    
});
