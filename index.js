// // // console.log(`hello`);
// // // console.log(`i like bugati`);

// // // window.alert(`this is me trying js again`)
// // document.getElementById(`myh1`).textContent = `hello world`;
// // document.getElementById(`myp`).textContent = `lorem`;

// // //  this is data type:variable

// // let name = "mubarak"
// // let age = 26
// // let price = 10.99

// // console.log(typeof age)
// // console.log(`the name of myblud is ${name}`)
// // console.log(`and  myblud is ${age} years old`)
// // console.log(`and  myblud bought his pc for ${price} `)
// // let coming = true;

// // console.log(`he is  ${coming}`)
// let firstName = "mubarak olalekan";
// let age = 25;
// let student = false;

// document.getElementById("p1").textContent = `my name is ${firstName}`;
// document.getElementById("p2").textContent =  `i am ${age} years old`;
// document.getElementById("p3").textContent = `enrolled: ${student}`;

// let students = 30;

// //  students = students+1
// //  students = students-1
// //  students = students-1
// //  students = students**3
//  extraStudent = students**=2

//  console.log(extraStudent,stude
// console.log( students)
// user input 
// let username;

// username = window.prompt("whats your username?");

// // console.log(username)
// let username;


// document.getElementById("mysubmit").onclick = function() {
//     username = document.getElementById("mytext").value;
//     document.getElementById("myh1").textContent = `hello ${username}`
// }

// const PI = 3.1428571429;
// let radius;
// let circumfrence;

// radius = window.prompt(`enter your radius value`)
// radius = Number(radius)
// circumfrence = 2 * PI * radius;

// console.log(circumfrence)
let pi =  3.1428571429;
let radius;
let circumfrence;

document.getElementById("mysubmit").onclick = function() {
    radius = document.getElementById(`mytext`).value;
radius = Number(radius);
circumfrence = 2 * pi * radius;
    document.getElementById("myh3").textContent = "circumfrence =" + circumfrence + "cm";
    }

    



