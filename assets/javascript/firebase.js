

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD1Q-lpxtJSo3RyjyN8E3X7OTUURbQP12c",
    authDomain: "breakstuff-1521215484628.firebaseapp.com",
    databaseURL: "https://breakstuff-1521215484628.firebaseio.com",
    projectId: "breakstuff-1521215484628",
    storageBucket: "breakstuff-1521215484628.appspot.com",
    messagingSenderId: "991926716042"
  };
  firebase.initializeApp(config);//TODO Change authorization 

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
    $btnSignUp.on("click",e=>{
        console.log("I am signing in")

        firebase.auth().signOut();
    });

    $btnLogOut.on("click",e=>{
      console.log("I am logging out")

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
