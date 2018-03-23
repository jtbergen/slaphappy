


$(document).ready(function(){ 

    $(".mainImage").click(function() {
        showMe();
    });

    function showMe() {
        $(".choose").text("What's Pissing You Off Today?"); 
        $(".mainImage").remove(); 
        $(".whatItIs").append("<img class='pic pic1' src='../images/boss.jpg'>");
        $(".whatItIs").append("<img class='pic pic2' src='../images/family.png'>");
        $(".whatItIs").append("<img class='pic pic3' src='../images/traffic.jpg'>");
        $(".whatItIs").append("<img class='pic pic4' src='../images/mamaFratelli.jpg'>");
    };


   $("pic").on("click", function() {
         $("pic").hide();
    });


});



