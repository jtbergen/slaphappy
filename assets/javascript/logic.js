


$(document).ready(function(){ 

    $(".mainImage").click(function() {
        showMe();
    });

    function showMe() {
        $(".choose").text("What's Pissing You Off Today?"); 
        $(".mainImage").remove(); 
        $(".whatItIs").append("<img class='pic pic1' src='../assets/images/boss.jpg'>");
        $(".whatItIs").append("<img class='pic pic2' src='../assets/images/family.png'>");
        $(".whatItIs").append("<img class='pic pic3' src='../assets/images/traffic.jpg'>");
        $(".whatItIs").append("<img class='pic pic4' src='../assets/images/mamaFratelli.jpg'>");
    };


   $("pic").on("click", function() {
         $("pic").hide();
    });


});



