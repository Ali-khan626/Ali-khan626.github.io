//Task 1
// let itemsArray=[
//     {name: "Juice", price: 50, quantity: 3},
//     {name: "cookie", price: 30, quantity: 9},
//     {name: "shirt", price: 880, quantity: 1},
//     {name: "pen", price: 100, quantity: 2}
// ];
// console.log(itemsArray[0].price * itemsArray[0].quantity);
// console.log(itemsArray[1].price * itemsArray[1].quantity);
// console.log(itemsArray[2].price * itemsArray[2].quantity);
// console.log(itemsArray[3].price * itemsArray[3].quantity);

//Task 2
// let obj = {
//     name:"Ali",
//     email:"A@gmail",
//     password:"ak",
//     age: 19,
//     city: "Karachi",
//     country: "Pakistan"
// }
// console.log("age" in obj);
// console.log("country" in obj);
// console.log("firstName" in obj);
// console.log("lastName" in obj);

//Task 3
// function Plan (name, surname, age, gender){
//     this.name = name
//     this.surname = surname
//     this.age = age
//     this.gender = gender
// }
// let ali = new Plan ("Ali", "Khan", 19, "Male");
// console.log(ali)

function Plan (name,gender,address,education,profession){
    this.name = name
    this.gender = gender
    this.address = address
    this.education = education
    this.profession = profession
};
function check(){
    let name = document.getElementById("name")
    name.value
};
