// Arbeta med typer (datatyper)

// 1. string
let firstName = "Emmi";
let lastName = 'Torstensson';   //Man kan ha enkla appostrofer också
console.log(firstName, lastName);
console.log("It's very nice");

// 2. number
let age = 27;
const PI = 3.14159;
let price = 5.50;
let quantity = 10;
let total = price * quantity;
console.log(total);

// boolean (antingen true eller false)
let again = false
if(again)
    console.log("inne i if-satsen");
again = true;
if(again)
console.log("inne again i for-satsen");

// 4. undefined (OBS! Detta är en typ i JS) 
let name; 
console.log(name); //ger resultatet "undifined"

var mobile; 
mobile = "123-456789" //JS skapar automatiskt en string
console.log(mobile);

// console.log(adress); //let istället för var. Då säger cosolen till vart det är fel.
let adress;
adress = "Hemfridsvägen 17";

console.log("--------------------");
console.log(typeof firstName);
console.log(typeof age);
console.log(typeof again);

