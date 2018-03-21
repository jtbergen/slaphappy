

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD1Q-lpxtJSo3RyjyN8E3X7OTUURbQP12c",
    authDomain: "breakstuff-1521215484628.firebaseapp.com",
    databaseURL: "https://breakstuff-1521215484628.firebaseio.com",
    projectId: "breakstuff-1521215484628",
    storageBucket: "breakstuff-1521215484628.appspot.com",
    messagingSenderId: "991926716042"
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
