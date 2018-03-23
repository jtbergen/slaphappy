

 
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDF7PZf6cLD3-fopJc-9FLNlUfNZR0m_gA",
    authDomain: "slap-happy-114d7.firebaseapp.com",
    databaseURL: "https://slap-happy-114d7.firebaseio.com",
    projectId: "slap-happy-114d7",
    storageBucket: "slap-happy-114d7.appspot.com",
    messagingSenderId: "385144633022"
  };
  firebase.initializeApp(config);

  //Get the elements into the DOM
  const $txtEmail =$("#txtEmail");
  const $txtPassword =$("#txtPassword");
  const $btnLogin =$("#btnLogin");
  const $btnSignUp =$("#btnSignUp");
  const $btnLogOut =$("#btnLogOut");

//When the dom is ready fire off these events
$(document).ready(function()
{

    //Add Login Event
    $btnLogin.on("click",e=>{
        console.log("i am logging in")
        //get email and passoword
        const email = $txtEmail.val().trim();
        const pass = $txtPassword.val().trim();
        //This returns everything we need for authentication
        const auth = firebase.auth();
    
        //SignIn email and password will return a promise
        const promise= auth.signInWithEmailAndPassword(email,pass);
        //Instead of resolving the user, I am going to catch errors that might occcur
        promise.catch(e=>console.log(e.message));
  });

  //Add Signup Event
    $btnLogOut.on("click",e=>{
        console.log("I am logging out")

        firebase.auth().signOut();
    });

    $btnSignUp.on("click",e=>{
      console.log("I am signing up")

      //get email and passoword from user
      const email = $txtEmail.val().trim();
      const pass = $txtPassword.val().trim();
      //This returns everything we need for authentication
      const auth = firebase.auth();
  
      //Create User with email and password will return a promise
      //TODO check for real email
      const promise= auth.createUserWithEmailAndPassword(email,pass);
      //Instead of resolving the user, I am going to catch errors that might occcur
      promise.catch(e=>console.log(e.message));

  });
    // Add a realtime event listener to check to see if the user is present
    //Attach an object observer to the global authentication object"firebase.auth()" and then
    //use the onAuthStateChanged method to see if the state change meaning a user is present
    //if not then log a message to the console.
    firebase.auth().onAuthStateChanged(firebaseUser =>{
      if(firebaseUser){
        console.log(firebaseUser);
        $btnLogOut.removeClass("invisible");//If the use is logged in, remove the invisibility
      }else{
        console.log("not logged in");
        $btnLogOut.addClass("invisible");//Otherwise keep logout invisible
      }
    });//Works use is logging to console with same name and email that I entered

      /////////////GOOGLE AUTHTICATION/////////////
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });


});

//   //Create and instance of the google provider
//   var provider = new firebase.auth.GoogleAuthProvider();

//   auth.signInWithRedirect(provider);

// })


//   firebase.auth().getRedirectResult().then(function(result) {
//     if (result.credential) {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       var token = result.credential.accessToken;
//       // ...
//     }
//     // The signed-in user info.
//     var user = result.user;
//   }).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
