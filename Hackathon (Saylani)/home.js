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

const signOut = () => {
    firebase.auth().signOut().then(() => {
    // Sign-out successful.
    
  }).catch((error) => {
    // An error happened.
  });
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      
      var uid = user.uid;
     const displayName = document.getElementById("user");
displayName.innerText = auth.currentUser.email;
      // ...
      
    } else {
      // User is signed out
      // ...
      location.href = "./index.html"
    }
  });
// let live = 3


// let colors = ["red" , "blue" , "yellow", "green", "pink", "black"];
// let ballons = document.getElementsByClassName("balloon");
// for(let i = 0; i < 24; i++) {
//     let rang = colors[Math.floor(Math.random()*5+1)];
//  ballons[i].style.backgroundColor = rang;
//  ballons[i].setAttribute("onclick", `pop('${rang}')`)
// }

// // ballons.forEach(function (val) {
// // console.log(val)
// // })
// let score = 0;


// const pop = (b) => {
// //     document.getElementById("lives").innerText = live;
// //     let randomColor = document.getElementById("pop").innerText = colors[Math.floor(Math.random()*5+1)];
// // if(b === randomColor) {
// // score += 10;
// // } else {
// //     --live
// // }
// // document.getElementById("score").innerText = score;
// console.log(b)
// }
let live = document.getElementById("lives");
let pop = document.getElementById("pop");
let scoreDiv = document.getElementById("score");
let colorRange = ["purple","yellow","green","brown","blue","red"];
let popped = 0;
let divs = document.getElementsByClassName("balloon");
let score = 0;
let lives = 3;
const colorGenerator = () => {
    let col = colorRange[Math.floor(Math.random()*6)];
    
    // col.style.color = col;
   pop.innerHTML =  `${col}`
}
colorGenerator();

for(let i = 0; i <= 24; i++) {
    let col = colorRange[Math.floor(Math.random()*6)];
    divs[i].style.color = col;
    divs[i].style.backgroundColor = col;
    divs[i].setAttribute("onmouseover", "check(this)")

}

const check = (e) => {
    if(e.style.backgroundColor === document.getElementById("pop").innerText) {
        e.removeAttribute("onmouseover")
        e.style.backgroundColor = "white"
        e.innerText = "POP!"
score += 10;
scoreDiv.innerText = score;
colorGenerator()
    } else {
        --lives; 
        if(lives === 0) {
            live.innerText = lives;
alert("Game Over")
        } else {
            e.removeAttribute("onmouseover")
        e.style.backgroundColor = "white"
        e.innerText = "OOPS!"
            live.innerText = lives;
        colorGenerator()
        }
        
    }
}

// document.addEventListener('mouseover', function(e){
    
//     if (e.target.className === "balloon"){
//         pop.innerHTML = colorRange[Math.floor(Math.random()*6)];
//                 e.target.style.backgroundColor = "#ededed";
//                 e.target.textContent = "POP!";
//                 popped++;
//                 removeEvent(e);
//                 checkAllPopped();
//     }   
// });

// function removeEvent(e){
//     e.target.removeEventListener('mouseover', function(){
        
//     })
// };

// function checkAllPopped(){
//     if (popped === 24){
//         console.log('all popped!');
//         let gallery = document.querySelector('#balloon-gallery');
//         let message = document.querySelector('#yay-no-balloons');
//         gallery.innerHTML = '';
//         message.style.display = 'block';
//     }
// };