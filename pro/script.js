const firebaseConfig = {
    apiKey: "AIzaSyCdz5nM-ZHG-oX7Q3CRtOo3gJ6TmEkBu9A",
    authDomain: "ubaid-a5667.firebaseapp.com",
    databaseURL: "https://ubaid-a5667-default-rtdb.firebaseio.com",
    projectId: "ubaid-a5667",
    storageBucket: "ubaid-a5667.appspot.com",
    messagingSenderId: "447125838888",
    appId: "1:447125838888:web:5dd9696f3b1a6fdf1aa91d"
  };

// Initialize firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

let userName;

const signUp = () => {
     
    const email = document.getElementById("useremail").value;
    const password = document.getElementById("userpass").value;
    


    
    
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                // ...

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error)
                // ..
            });
   

}

auth.onAuthStateChanged((user) => {
    if (user) {
        
        location.href = "./main.html"
    } else {

    }
});

const logIn = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    // console.log(email.value, password.value);
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            alert("please put right email and password")
            // ...
            // ..
        });
}





