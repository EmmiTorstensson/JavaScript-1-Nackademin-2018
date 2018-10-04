// Arbeta med arrayer 

// skapa en tom array
let cars1 = [];

// skapa en arrray som innehåller data 
let cars2 = ["Volvo", "Saab", "BMW"];
// Detta är en array-literal

// Skapa en array med en konstruktor 
let cars3 = new Array("1, 2, 3");
let cars4 = new Array(); // En tom array

// Att komma åt data
console.log(cars2[0]);
console.log(cars2[1]);
console.log(cars2[2]);
console.log(cars2[2]);
console.log(cars2[3]);


let bil1 = cars2[0];
console.log(bil1);

// ändra ett element 
cars2[0] = "Mazda";
console.log(cars2);
console.log(bil1);

// En array i JS kan innehålla olika typer
let person = ["Emmi", "Torstensson", 27, true];
// Du kan skapa fyra olika variablar istället för en array men tänk vad myclet rader det hade blivit.


// Hitta antal element
let antal = person.length;
console.log(antal);

// Sortera en array
console.log(cars2);
cars2.sort();
console.log(cars2);


// Arbeta med en "stack"
let stack = [];
stack.push("JavaScpript1");
console.log(stack); 
stack.push("HTML, CSS");
console.log(stack); 
stack.push("JavaScript2");
console.log(stack); 

// TA bort ett element 
stack.pop(); //sista elementet 
console.log(stack);
let kurs = stack.pop();
console.log(stack);
console.log(kurs);

let test1 = new Array(10, 20, 30);
console.log(test1);
console.log(test1.length);
let test2 = new Array(10);
console.log(test2);
console.log(test2.length);
let test3 = [10];
console.log(test3);
console.log(test3.length);
let test4 = new Array("10");
console.log(test4);
console.log(test4.length);