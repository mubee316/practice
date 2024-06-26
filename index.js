// // // // // // // // // // // // console.log(`hello`);
// // // // // // // // // // // // console.log(`i like bugati`);

// // // // // // // // // // // // window.alert(`this is me trying js again`)
// // // // // // // // // // // document.getElementById(`myh1`).textContent = `hello world`;
// // // // // // // // // // // document.getElementById(`myp`).textContent = `lorem`;

// // // // // // // // // // // //  this is data type:variable

// // // // // // // // // // // let name = "mubarak"
// // // // // // // // // // // let age = 26
// // // // // // // // // // // let price = 10.99

// // // // // // // // // // // console.log(typeof age)
// // // // // // // // // // // console.log(`the name of myblud is ${name}`)
// // // // // // // // // // // console.log(`and  myblud is ${age} years old`)
// // // // // // // // // // // console.log(`and  myblud bought his pc for ${price} `)
// // // // // // // // // // // let coming = true;

// // // // // // // // // // // console.log(`he is  ${coming}`)
// // // // // // // // // // let firstName = "mubarak olalekan";
// // // // // // // // // // let age = 25;
// // // // // // // // // // let student = false;

// // // // // // // // // // document.getElementById("p1").textContent = `my name is ${firstName}`;
// // // // // // // // // // document.getElementById("p2").textContent =  `i am ${age} years old`;
// // // // // // // // // // document.getElementById("p3").textContent = `enrolled: ${student}`;

// // // // // // // // // // let students = 30;

// // // // // // // // // // //  students = students+1
// // // // // // // // // // //  students = students-1
// // // // // // // // // // //  students = students-1
// // // // // // // // // // //  students = students**3
// // // // // // // // // //  extraStudent = students**=2

// // // // // // // // // //  console.log(extraStudent,stude
// // // // // // // // // // console.log( students)
// // // // // // // // // // user input 
// // // // // // // // // // let username;

// // // // // // // // // // username = window.prompt("whats your username?");

// // // // // // // // // // // console.log(username)
// // // // // // // // // // let username;


// // // // // // // // // // document.getElementById("mysubmit").onclick = function() {
// // // // // // // // // //     username = document.getElementById("mytext").value;
// // // // // // // // // //     document.getElementById("myh1").textContent = `hello ${username}`
// // // // // // // // // // }

// // // // // // // // // // const PI = 3.1428571429;
// // // // // // // // // // let radius;
// // // // // // // // // // let circumfrence;

// // // // // // // // // // radius = window.prompt(`enter your radius value`)
// // // // // // // // // // radius = Number(radius)
// // // // // // // // // // circumfrence = 2 * PI * radius;

// // // // // // // // // // console.log(circumfrence)
// // // // // // // // // let pi =  3.1428571429;
// // // // // // // // // let radius;
// // // // // // // // // let circumfrence;

// // // // // // // // // document.getElementById("mysubmit").onclick = function() {
// // // // // // // // //     radius = document.getElementById(`mytext`).value;
// // // // // // // // // radius = Number(radius);
// // // // // // // // // circumfrence = 2 * pi * radius;
// // // // // // // // //     document.getElementById("myh3").textContent = "circumfrence =" + circumfrence + "cm";
// // // // // // // // //     }

    



// // // // // // // // // let x = 3;
// // // // // // // // // let y = 2;
// // // // // // // // // let z = 1 ;

// // // // // // // // // // z = Math.round(x)
// // // // // // // // // // z = Math.floor(x)
// // // // // // // // // // z = Math.pow(x, y)
// // // // // // // // // // z = Math.trunc(x)
// // // // // // // // // // z = Math.sqrt(x)
// // // // // // // // // // z = Math.abs(x)
// // // // // // // // // // z = Math.sin(x)
// // // // // // // // // // z = Math.log(x);
// // // // // // // // // // let max = Math.max(x , y ,z);
// // // // // // // // // // let min = Math.min(x , y ,z);
// // // // // // // // // // 
// // // // // // // // // console.log(min)

// // // // // // // // // const  myButton = document.getElementById("mybutton");
// // // // // // // // // const  myLabel = document.getElementById("label");
// // // // // // // // // const min = 1;
// // // // // // // // // const max = 6;
// // // // // // // // // let randomNum;

// // // // // // // // // myButton.onclick = function(){
// // // // // // // // //     randomNum = Math.floor(Math.random()*max)+min;
// // // // // // // // //     myLabel.textContent = randomNum;
   
// // // // // // // // // }

// // // // // // // // // console.log(myButton)
// // // // // // // // // let mubee = 3 + "3"
// // // // // // // // // console.log(mubee)
// // // // // // // // // let student = true;
// // // // // // // // // let age = 18;

// // // // // // // // // if(student){
// // // // // // // // //     console.log("werey you are welcome");
// // // // // // // // // }

// // // // // // // // // if(age>=100){
// // // // // // // // // console.log("werey cary on")
// // // // // // // // // }
// // // // // // // // // else if(age<=18){
// // // // // // // // //     console.log("baba koshi na your type they dey find for here")

// // // // // // // // // }
// // // // // // // // // else if(age>=100){
// // // // // // // // //     console.log("omo ase sha wole bebe")

// // // // // // // // // }
// // // // // // // // // else{
// // // // // // // // //     console.log("if i catch your papa for gate")
// // // // // // // // // }

// // // // // // // // // const myText = document.getElementById("myText");
// // // // // // // // // const mySubmit = document.getElementById("mySubmit");
// // // // // // // // // const result = document.getElementById("result");
// // // // // // // // // let age;

// // // // // // // // // mySubmit.onclick = function(){

// // // // // // // // //     age  = myText.value;
// // // // // // // // //     age = Number(age);

// // // // // // // // //     if(age>=100){
// // // // // // // // //         result.textContent = "werey cary on"
// // // // // // // // //         }
// // // // // // // // //         else if(age<=18){
// // // // // // // // //             result.textContent = "baba koshi na your type they dey find for here"
        
// // // // // // // // //         }
// // // // // // // // //         else if(age>=100){
// // // // // // // // //             result.textContent = "omo ase sha wole bebe"
        
// // // // // // // // //         }
// // // // // // // // //         else{
// // // // // // // // //             result.textContent = "if i catch your papa for gate"
// // // // // // // // //         }
// // // // // // // // // }




// // // // // // // // // if (age<=18){
// // // // // // // // //     console.log("fr your mind you seff don dey old enough");
// // // // // // // // // }
// // // // // // // // // else{
// // // // // // // // //     console.log("werey cmmot for here your papa never reach age");
// // // // // // // // // }

// // // // // // // // const creditCardBtn = document.getElementById("creditCardBtn");
// // // // // // // // const payPal = document.getElementById("payPalBtn");
// // // // // // // // const pamlPay = document.getElementById("palmPayBtn");
// // // // // // // // const mySubmit = document.getElementById("mySubmit")
// // // // // // // // const details = document.getElementById("details")
// // // // // // // // const subDetails = document.getElementById("subDetails")


// // // // // // // // mySubmit.onclick = function(){
    
// // // // // // // // if(creditCardBtn.checked){
// // // // // // // //     details.textContent = "so this werey don old sha ur papa get credit card";
// // // // // // // // }
// // // // // // // // else{
// // // // // // // //     details.textContent = "werey koshi danu"
// // // // // // // // }
// // // // // // // // if (subscribeBtn.checked){
// // // // // // // // subDetails.textContent = "ok na u don suscribe commot for my front"
// // // // // // // // }
// // // // // // // // else{
// // // // // // // //     subDetails.textContent = "werey go back go subscribe"
// // // // // // // // }
// // // // // // // // }

// // // // // // // // let time = 16;
// // // // // // // // let clock = time > 11 ? "you came late my friend" : "you are in time my friend";

// // // // // // // // console.log(clock);

// // // // // // // // let purchase = 125;
// // // // // // // // let discount = purchase > 100 ? 10 : 0;

// // // // // // // // console.log(`your total amount is $${purchase - purchase *discount/100 }`)
 

// // // // // // // // let testScore = 98;
// // // // // // // // let testGrade;


// // // // // // // // switch (true) {
// // // // // // // //     case testScore >=90:
// // // // // // // //         testGrade = "A";
        
// // // // // // // //         break;
// // // // // // // //     case testScore >=80:
// // // // // // // //         testGrade = "B";
        
// // // // // // // //         break;
// // // // // // // //     case testScore >=70:
// // // // // // // //         testGrade = "C";
        
// // // // // // // //         break;
// // // // // // // //     case testScore >=60:
// // // // // // // //         testGrade = "D";
        
// // // // // // // //         break;
// // // // // // // //     case testScore >=50:
// // // // // // // //         testGrade = "E";
        
// // // // // // // //         break;
  

// // // // // // // //     default :
// // // // // // // //         testGrade = "F";
        
        
// // // // // // // // }


// // // // // // // // console.log(testGrade)
// // // // // // // // let userName = "mubee316";

// // // // // // // // let username = window.prompt("enter username: ");
// // // // // // // // username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// // // // // // // // console.log(username)

// // // // // // // // const fullName = "mubarak olalekan";

// // // // // // // // let firstName = fullName.slice(0, fullName.indexOf(" "));
// // // // // // // // let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// // // // // // // //  console.log(firstName)
// // // // // // // //  console.log(lastName)

// // // // // // // // const email =  window.prompt("enter your email address")


// // // // // // // // let userName = email.slice(0 , email.indexOf("@"))
// // // // // // // // console.log(userName)

// // // // // // // // let username = window.prompt("enetrr your username:")

// // // // // // // // username = username.trim();
// // // // // // // // let letter = username.charAt(0);
// // // // // // // // letter = letter.toUpperCase();



// // // // // // // // let extra = username.slice(1);
// // // // // // // // extra = extra.toLowerCase()

// // // // // // // // username = letter + extra

// // // // // // // // console.log(username);

// // // // // // // let temperature= window.prompt("enter Temp:");

// // // // // // // switch (true) {
// // // // // // //     case temperature > 0 :
// // // // // // //    temp = "good"
          
// // // // // // //         break;
// // // // // // //     case temperature < 0 :
// // // // // // //    temp = "bad"
        
// // // // // // //         break;
// // // // // // //     case temperature <=30:
// // // // // // //    temp = "good"
        
// // // // // // //         break;
// // // // // // //     case temperature >30:
// // // // // // //    temp = "bad"
        
// // // // // // //         break;

// // // // // // //     default:
// // // // // // //         break;
// // // // // // // }

// // // // // // // console.log(`the weather is ${temp}`)


// // // // // // // const pi = "3.14";

// // // // // // // if (pi !==3.14){
// // // // // // //     console.log("this is a pi")
// // // // // // // }else{
// // // // // // //     console.log("this is not a pi");
// // // // // // // }
// // // // // // // let username = "";
// // // // // // // if (username === ""){
// // // // // // //     console.log("werey go back and enter your username")
// // // // // // // }else {
// // // // // // //     console.log(`welcome ${username}`)
// // // // // // // }
// // // // // // // let loggedIn  = true;
// // // // // // // let username;
// // // // // // // let password;


// // // // // // // while(!loggedIn){
// // // // // // //     username = window.prompt(`enter your username`);
// // // // // // //     password = window.prompt(`enter your password`);

// // // // // // //     if(username === "myuser" && password === "mypass"){
// // // // // // //         loggedIn = true;
// // // // // // //         console.log("you are logged in");
// // // // // // //     }else{
// // // // // // //         console.log("invalid credentials try again");
// // // // // // //     }
// // // // // // // }

// // // // // // // function add(x,y){
// // // // // // //     return x+y;
// // // // // // // }
// // // // // // // console.log (add(10,3))


// // // // // // // function subtract(t,u){
// // // // // // //     return t-u;
// // // // // // // }
// // // // // // // console.log(subtract(10,7))

// // // // // // function isValidEmail(email){
// // // // // //     if (email.includes("@")){
// // // // // //      return true;
// // // // // //     }else{
// // // // // //         return false;
// // // // // //     }
// // // // // // }
// // // // // // console.log (isValidEmail("mubarak316@.com"));

// // // // // // //or this shorter form 

// // // // // // // function isValidEmail(email){
// // // // // // //     return email.includes("@") ? true : false
// // // // // // // }
// // // // // // // console.log (isValidEmail("mubrak316@.com"))

// // // // // // // function isEven(Number){
// // // // // // // if (Number % 2 === 0){
// // // // // // //     return true;

// // // // // // // }else{
// // // // // // //     return false;
// // // // // // // }
// // // // // // // }
// // // // // // // console.log(isEven(21))

// // // // // // // shorter version

// // // // // // function isEven(number){
// // // // // //  return(number % 2 === 0) ? true : false
// // // // // // }
// // // // // // console.log(isEven(4))

// // // // // // //arrays

// // // // // // //let fruits = ["banana", "apple", "pineapple"]
// // // // // // //   fruits.unshift("grape")
// // // // // // // for (let fruit of fruits){
// // // // // // //     console.log(fruits[1])
// // // // // // // }
// // // // // //     for(let i = fruits.length +1 ; i >= 0 ; i++){
// // // // // // console.log(fruits[i])
// // // // // //     }
// // // // // //     // console.log(fruits[])

// // // // // // hello(japa);

// // // // // // function hello(callback){
// // // // // //     console.log("hello")
// // // // // // //     callback(  )
// // // // // // // }

// // // // // // // function japa (){
// // // // // // //     console.log("japa")
// // // // // // // }



// // // // // // // let number = [1,2,3,4,5];
// // // // // // // number.forEach(square)
// // // // // // // number.forEach(display);


// // // // // // // function double(element, index , array){
// // // // // // //     array[index] = element*2
    
// // // // // // // }
// // // // // // // function tripple(element, index , array){
// // // // // // //     array[index] = element*3
    
// // // // // // // }
// // // // // // // function square(element, index , array){
// // // // // // //     array[index] = Math.pow(element , 2)
    
// // // // // // // }
// // // // // // // function display(element){
// // // // // // //     console.log(element)
// // // // // // // }

// // // // // // let fruit = ["banana", "apple" , "coconut", "mango","grape"];

// // // // // // fruit.forEach(capitalize);
// // // // // // fruit.forEach(display);

// // // // // // // function upperCase(element, index , array){
// // // // // // //     array[index] = element.toUpperCase();
// // // // // // // }

// // // // // // // function lowerCase(element, index , array){
// // // // // // //     array[index] = element.toLowerCase

// // // // // // // }


// // // // // // function capitalize(element, index , array){
// // // // // //     array[index] = element.charAt(0).toUpperCase() +element.slice(1)
// // // // // // }
// // // // // // function display(element){
// // // // // //     console.log(element)
// // // // // // }

// // // // // // const dates = ["2024-1-10" ,"2025-2-20" , "2026-3-30"];
// // // // // // const formatted = dates.map(formatDate)

// // // // // // console.log( typeof formatted)
// // // // // // console.log(formatted)

// // // // // // function formatDate(element){
// // // // // //     const parts = element.split("-")
// // // // // //     return `${parts[1]}/${parts[2]}/${parts[0]}`
// // // // // // }


// // // // // // let number = [1,2,3,4,5,6,7,8,9,10];
// // // // // // let evenNUm = number.filter(isEven)
// // // // // // let oddNum  = number.filter(isOdd)
// // // // // // console.log(oddNum)
// // // // // // function isEven(element){
// // // // // //     return element % 2 === 0
// // // // // // }
// // // // // // function isOdd(element){
// // // // // //     return element % 2 !== 0
// // // // // // }

// // // // // // const word = ["mubarak", "purple", "miles","development","ink"];
// // // // // // const words = word.filter(longWord);
// // // // // // console.log(words)

// // // // // // function shortWord(element){
// // // // // //     return element.length <= 5
// // // // // // }
// // // // // // function longWord(element){
// // // // // //     return element.length > 5
// // // // // // }

// // // // // const price = [20,50,100,25]
// // // // // const total = price.reduce(sum)
// // // // // console.log(`$${total.toFixed(5)}`)

// // // // // function sum(Accumulator , element){
// // // // //     return Accumulator + element

// // // // // }

// // // // // const maximum = [20,50,100,25,11,150]
// // // // // maximum.forEach(display)
// // // // // const max = maximum.reduce(getMax)
// // // // // console.log(`the maximum value is :${max}`)

// // // // // function display(element){
// // // // //     console.log(element)
// // // // // }

// // // // // function getMax(Accumulator, element){
// // // // //     return Math.max(Accumulator, element)
// // // // // }
// // // // // const values = maximum.map(function(element){
// // // // //  return Math.pow(element, 3)
// // // // // })
// // // // // const filter = maximum.filter(function(element){
// // // // //     return element % 2 === 0
// // // // // })
// // // // // const filters = maximum.filter(function(element){
// // // // //     return element % 2 !== 0
// // // // // })

// // // // // const sums = maximum.reduce(function(Accumulator, element){
// // // // // return Accumulator + element 
// // // // // })

// // // // // console.log(sums)
// // // // // console.log(filter)
// // // // // console.log(filters)
// // // // // console.log(values)

// // // // // //ARROR FUNCTION
// // // // // const hello = (name , age) => {console.log(`hello ${name}`)
// // // // // console.log(`you are ${age} years old`)}
// // // // // hello("mubarak", 33)

// // // // // setTimeout(function(){
// // // // //     console.log("mubarak the goat")
// // // // // }, 3000);


// // // // const numbers = [1,2,3,4,5,6];

// // // // const square = numbers.map((element)  => Math.pow(element, 2))
// // // // const cubes = numbers.map((element)  => Math.pow(element, 3))
// // // // const isEven = numbers.filter((element)  => element % 2 === 0)
// // // // const total = numbers.reduce((accumulator, element) => accumulator + element)
// // // // console.log(square)
// // // // console.log(cubes)
// // // // console.log(isEven)
// // // // console.log(total)

// // // const person1 = {
// // //     firstName: "mubarak",
// // //     lastName: "olalekan",
// // //     age: 19,
// // //     isStudent: true,
// // //     sayHello: function(){console.log(`hi im mubarak olalekan`)}

// // // }
// // // const person2 = {
// // //     firstName: "ridwan",
// // //     lastName: "olalekan",
// // //     age: 21,
// // //     isStudent: true,
// // //     sayHello: function(){console.log(`hi im ${this.firstName}`)},
// // //     eat: () => console.log("im done eating"),
// // // }
// // //     person2.sayHello()

// //  class product{
// //     constructor(name, price){
// //          this.name = name
// //          this.price = price
// //     }
// //     display(){
// //         console.log(`product ${this.name}`)
// //         console.log(`price  ${this.price.toFixed(2)}`)
        
// //     }
// //     calTotal(saleTax){
// //         return this.price + (this.price * saleTax)
// //     }
// //  }
// //  const saleTax = 0.05;
// //  const product1 = new product("shirt", 199);
// // const total = product1.calTotal(saleTax);
// //  product1.display()
// //  console.log(`total price (with tax) is :$${total.toFixed(2)}`)

// //static
// // class mathUtil{
// //     static PI = 3.142

// //     static getDiameter(radius){
// //         return radius *2
// //     }
// //     static getcircumference(radius){
// //         return 2 * this.PI *radius
// //     }
// //     static getArea(radius){
// //         return  this.PI * radius * radius
// //     }
// // }
// // console.log(mathUtil.PI)
// // console.log(mathUtil.getDiameter(5))
// // console.log(mathUtil.getcircumference(5))
// // console.log(mathUtil.getArea(10))

// class user{
//     static userCount = 0

//     constructor(username){
//         this.username = username;
//         user.userCount++;
//     }
//     static getUserCount(){
//         console.log(`there are ${user.userCount} users online`)
//     }
//     sayHello(){
//         console.log(`hi my username is ${this.username}`)
//     }
// }
// const user1 = new user("mubarak")
// const user2 = new user("patrick")
// const user3 = new user("olalekan")
// const user4 = new user("abolore")
// console.log(user1.username)
// console.log(user2.username)
// console.log(user3.username)
// console.log(user4.username)
// user1.sayHello()
// user2.sayHello()
// user3.sayHello()
// user4.sayHello()
// user.getUserCount()

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;


    }

}
class rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age)
        this.runSpeed = runSpeed;
    }
}
class fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age)
        this.swimSpeed = swimSpeed;
    }
}
class bird extends Animal{
    constructor(name, age, flySpeed){
        super(name, age)
        this.flySpeed = flySpeed;
    }
}
const Rabbit = new rabbit("bunny", 15, 250);
const Fish = new fish("patrick", 20, 350);
const Bird = new bird("faster", 50, 550);

console.log()