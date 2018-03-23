


$(document).ready(function(){ 

    $(".mainImage").click(function() {
        showMe();
        console.log("show it");
    });
   
    function showMe() {
        $(".choose").text("What's Pissing You Off Today?"); 
        $(".mainImage").remove(); 

        $(".whatItIs").append("<img class='pic pic1' src='../images/boss.jpg'>");
        $(".whatItIs").append("<img class='pic pic2' src='../images/family.png'>");
        $(".whatItIs").append("<img class='pic pic3' src='../images/traffic.jpg'>");
        $(".whatItIs").append("<img class='pic pic4' src='../images/mamaFratelli.jpg'>");

    };


   $(".pic").on("click", function() {
         $(".pic").hide();
         console.log("i am hidden")
    });


});

//Site premise is to find places that will make a user less stressed
//use click on a image to enter site
//user selects from a list of pics to open the map
//Map centers on the location of the person once it authorizes
    //Map centers on user location
    //Map will consume the location
    //Send the location to firebase so it can be pass the location
//Use firebase to add user identification with a timestamp from the time
    //they click to enter the site
//The chat box will take user input that is visible to others live


