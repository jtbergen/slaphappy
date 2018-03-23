/*
 _____   _           ___   _____   _   _       ___   _____   _____  __    __ 
/  ___/ | |         /   | |  _  \ | | | |     /   | |  _  \ |  _  \ \ \  / / 
| |___  | |        / /| | | |_| | | |_| |    / /| | | |_| | | |_| |  \ \/ /  
\___  \ | |       / / | | |  ___/ |  _  |   / / | | |  ___/ |  ___/   \  /   
 ___| | | |___   / /  | | | |     | | | |  / /  | | | |     | |       / /    
/_____/ |_____| /_/   |_| |_|     |_| |_| /_/   |_| |_|     |_|      /_/   
*/

$(document).ready(function(){ 

    $(".mainImage").click(function() {
        showMe();
    });
  
    function showMe() {
        $(".choose").text("What's Pissing You Off Today?"); 
        $(".mainImage").remove(); 
        $(".whatItIs").append("<a href='./main.html'><img src='./assets/images/boss.jpg' class='pic pic1' alt='Link to Main Page'></a>");
        $(".whatItIs").append("<a href='./main.html'><img src='./assets/images/family.png' class='pic pic2' alt='Link to Main Page'></a>");
        $(".whatItIs").append("<a href='./main.html'><img src='./assets/images/traffic.jpg' class='pic pic3' alt='Link to Main Page'></a>");
        $(".whatItIs").append("<a href='./main.html'><img src='./assets/images/mamaFratelli.jpg' class='pic pic4' alt='Link to Main Page'></a>");
    };
  
    $("pic").on("click", function() {
        $("pic").hide();
    });
  
    $(".gym").hide();
    $(".arcades").hide();
    $(".bars").hide();


    $(".holdMe1").on("click", function() {
        $(".gym").show();
        $(".holdMe1").hide();
    });

    $(".holdMe2").on("click", function() {
        $(".arcades").show();
        $(".holdMe2").hide();
    });

    $(".holdMe3").on("click", function() {
        $(".bars").show();
        $(".holdMe3").hide();
    });
    

  
  
  });
  
  //////////////////////////////////////////////////////// The Drop  ////////////////////////////////////////////////////////
  /*

    NODE JS FOR FOURSQUARE


    const request = require('request');

request({
  url: 'https://api.foursquare.com/v2/venues/explore',
  method: 'GET',
  qs: {
    client_id: 'CLIENT_ID',
    client_secret: 'CLIENT_SECRET',
    ll: '40.7243,-74.0018',
    query: 'coffee',
    v: '20170801',
    limit: 1
  }
}, function(err, res, body) {
  if (err) {
    console.error(err);
  } else {
    console.log(body);
  }
});


  */
  
  
  