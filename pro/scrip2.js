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


const logOut = () => {
    auth.signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });

}

auth.onAuthStateChanged((user) => {
    if (user) {
        showData()
    } else {
        location.href = "./index.html"
    }
});

const createTeam = () => {
    const teamName = document.getElementById("teamname").value;
    const category = document.getElementById("category").value;
    const members = document.getElementById("members").value;
    let databaseRef = database.ref("teams");
    databaseRef.push({
        teamName,
        category,
        admin: auth.currentUser.email,
        members: [members],
    })

}

const showData = () => {
    let databaseRef = database.ref("teams");
    databaseRef.on("child_added", (snapshot) => {
        let data = snapshot.val();
        showGroups(data)
    })
}


const delGroup = (val) => {
    let databaseRef = database.ref("teams");
    databaseRef.on("child_added", (snapshot) => {
        if (snapshot.val().teamName === val) {
           database.ref("teams/" + snapshot.key).remove();
        }

    })
    
}


const showGroups = (data) => {
    let teamsOwn = document.getElementById("teamsown");
    let teamsPart = document.getElementById("teamspart");
    if (auth.currentUser.email === data.admin) {
        teamsOwn.innerHTML += `<div class="container border border-1 border-dark my-5">
        <div class="row p-4">
            <div class="col-8">
                <p class="h1">${data.teamName}</p>
            </div>
            <div class="col-4"><button type="button" class="btn btn-danger"
                    onclick="delGroup('${data.teamName}');">Delete</button>
            </div>

            <div class="col-12">
                <p><span class="fw-bold">Category: </span>${data.category}</p>
            </div>
            <div class="col-12">
                <p><span class="fw-bold">Members: </span>${data.members}</p>
            </div>
        </div>
    </div>`
    } else if (auth.currentUser.email === data.members[0]) {
        teamsPart.innerHTML += `<div class="container border border-1 border-dark my-5">
        <div class="row p-4">
            <div class="col-8">
                <p class="h1">${data.teamName}</p>
            </div>
            
            <div class="col-12">
                <p><span class="fw-bold">Category: </span>${data.category}</p>
            </div>
            <div class="col-12">
                <p><span class="fw-bold">Members: </span>${data.members[0]}</p>
            </div>
        </div>
    </div>`
    }
}