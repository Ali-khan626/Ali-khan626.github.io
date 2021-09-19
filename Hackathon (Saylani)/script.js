// M MODAL
$(document).ready(function() {
    $('.modal').modal();
});
       

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuSpSKIDcPWSCeawe5IPAEC_fcTmjdQaY",
    authDomain: "hackathon-36340.firebaseapp.com",
    projectId: "hackathon-36340",
    storageBucket: "hackathon-36340.appspot.com",
    messagingSenderId: "848062551388",
    appId: "1:848062551388:web:b8599b3c77ea7485bf1d99",
    measurementId: "G-TV2L8LR4EV"
  };
  
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const firestore = firebase.firestore();

const signUp = () => {
    const email  = document.getElementById("useremail").value;
    const password  = document.getElementById("userpassword").value;
    const userName = document.getElementById("username").value;
    auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    user.userName = userName;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

}

const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    document.getElementById("error").innerText = errorMessage
  });
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      
      var uid = user.uid;
      // ...
      location.href = "./home.html"
    } else {
      // User is signed out
      // ...
    }
  });