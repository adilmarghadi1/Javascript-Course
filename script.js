console.log("Hello World")
console.log("Hello\nWorld")
console.log("Hell" + "o")


// 1- Exercise

// Write a program that takes in two numbers 6 and 3 and perform the following operations on them:

let firstNum = 6;
let secondNum = 3

console.log(firstNum + secondNum)
console.log(firstNum - secondNum)
console.log(firstNum * secondNum)
console.log(firstNum / secondNum)


// Coding Exercise
// Write the output of the statements on paper before executing the code.

console.log(4 + 5); 
console.log("4 + 5"); 
console.log("4" + "5");

// --------------------- //

const country = "Morocco"
console.log(`I Live in ${country}`)
const x = 3;
const y = 10;
console.log(`${x} + ${y} = ${x+y}`) // Show 3 + 10 = 13

// ----------------------//

const name = prompt("Enter Ur Name")
alert(`Hello ${name}`)

// ----------- //

const firstName = prompt("Enter firstName: ")
const secondName = prompt("Enter Second Name: ")

alert(`Hello, ${firstName} ${secondName}`)


// ------------------------------ //
 

//  Problem statement#
// Write a program that asks for a temperature in degrees celsius, then displays it on the Fahrenheit scale.

// F = c * 9/5 + 32

let celsius = prompt("Enter Temp in Celsius : ")
let Fahrenheit = celsius * 9/5 + 32
alert(`Temp in Fahrenheit : ${Fahrenheit}`)


// --------------------------//

// Problem Statement#

// Observe the following program and add the necessary code to swap the values of variables number1 and number2.

let num1 = 1;
let num2 = 2;

let num3
num3 = num1;

num1 = num2;

num2 = num3;

alert(`The num1 is ${num1} and the num2 is ${num2}`)



// ---------- Conditions ------------- //

let number = Number(prompt("Enter a number : "))
if (number >= 0)
{
    console.log(`the number ${number} is positive or zero`)
}

else {
    console.log("the number is negative ")

}


// -------------------------//

let number = 4;

if ((number >= 0) && (number <= 100)) {
  console.log(`${number} is between 0 and 100, both included`);
}


// ------------- //

const number = -1;

if ((number < 0) || (number > 100)) {
  console.log(`${number} is not in between 0 and 100`);
}


// ----------------- //

console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false



// -------- //

const weather = prompt("What's the Weather")

if (weather === 'sunny')
{
    console.log("T-Shirt Time!")
}

else if (weather === 'rainy'){
    console.log("Just stay inside")
}

else {
    console.log("Not a vaild weather type ")
}



// --------------- //

const weather = prompt("Whats the weather : ")
switch (weather) {
    case 'sunny':
        console.log("T-Shirt Time")
        break;
    case 'rainny':
        console.log('Rainy')
        break;
    default:
        console.log("Not a valid weather")
}

// Problem statement#
// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.



let num1 = prompt("ENter first Number: ")
let num2 = prompt("Enter second number: ")

if (num1 > num2)
{
    console.log(`${num1} is greater than ${num2}`)
}

else {
    console.log(`${num2} is greater than ${num1}`)
}




// --------------- The While Loop ---------//


let number=1;

while (number <=5)
{
    console.log(number)
    number++;
}

// ---------- for loop ------------//

for (let number=1; number <= 5; number++)
{
    console.log(number);
}



// Problem Statement#
// Write a program that launches a carousel for 10 turns, showing the turn number each time.


for (let i=1; i<=10; i++)
{
    console.log("Turn number : " + i)
}

let number =1;
while (number!=10)
{
    console.log('Turn number' + number)
    number++;
}


// ------------------------ //

// Problem statement#
// Check the following program that shows even numbers (divisible by 2) between 11 and 1010.


for (let i=1; i<=10 ; i++)
{
    if (i % 2==0)
    {
        console.log(i + " is even")
    }
    else {
        console.log(i + " is odd")
    }
}




// ------------------------------- //

// Write a program that continues to ask the user for a number until the entered number is less than or equal to 50.


let number = Number(prompt("Enter a number less than 50 "));

while (number>50)
{
    alert("Please Enter a number is less or equal 50")
    number = Number(prompt("Enter a number less than 50 "));

}

alert("Good Bro")


// Problem statement#
// Write a program that asks the user for a number, then show the multiplication table for this number.


let user = Number(prompt("Enter a number "))

for (let i=1; i<=10; i++)
{
    console.log(`${user} * ${i} = ${user * i}`)
}



// ---------------------- //

// Coding Challenge: Neither Yes nor No
// Learn how to write a code that doesn't stop prompting for user input unless the user enters 'y' or 'n'. Good luck!


let user = prompt("")
while ((user != 'n') && (user != 'y'))
{
    user = prompt("")
}

console.log("You just lost!")





// -------------------------------------------//


// Problem statement#
// Write a program that shows all numbers between 11 and 100100 with the following exceptions:

// If the number is divisible by 3, it should display Fizz
// If the number is divisible by 5, it should display Buzz
// If the number is divisible both by 5 and by 3, it should display FizzBuzz


for (let i =1; i<=100; i++)
{
    if (i % 3 === 0)
        console.log("Fizz")
    else if (i % 5 === 0)
        console.log("Buzz")

    else if (i % 3 === 0 && i % 5 === 0)
        console.log("FizzBuzz")
    
    else
        console.log(i)
}



// --------------------------------------------//

// Funtions

function presentation(name, age)
{
    console.log(`My name is ${name} and my age is ${age} `)
}

presentation("adil", 21)


// ANother way to declare a function

const hello = function(name) {
    const message = `Hello ${name}!`
    return message;
}
console.log(hello("adil"))


const hello = (name) => {
    const message = `Hello ${name}`
    return message;
}

console.log(hello("adil"))

// ---------//

function hello(firstName, lastName) {
    firstName = prompt("Enter first name ")
    lastName = prompt("Enter second name ")

}
hello()


// ----------------------------------- //

// Problem statement#
// Complete the below program so that the min() function returns the minimum of its two received numbers.

function min(a,b)
{
    if (a<b)
    {
        console.log(a)
    }

    else {
        console.log(b)
    }
}

min(2,3)


// ----------------------------- //


// Problem statement#
// Complete the below program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.


function calculate(a, operation, b)
{
    if (operation === '+')
    {
        let sum = a + b;
        console.log(sum)
    }
    else if (operation === '-')
    {
        let diff = a - b;
        console.log(diff)
    }

    else if (operation === '*')
    {
        let mul = a * b;
        console.log(mul)
    }

    else if (operation === '/')
    {
        let divi = a / b;
        console.log(divi)
    }

    else {
        console.log("I don't Know")
    }

    
}

calculate(3, '+', 4)

// swicth
function calculate(num1,operator,num2){
		switch(operator){
      case "+":
        	console.log(num1 + num2);
        break;
        
      case "-":
        	console.log(num1 - num2);
        break;
        
      case "*":
        	console.log(num1 * num2);
        break; 
        
      case "/":
        	console.log(num1 / num2);
        break;        
      default:
       console.log(undefined);
    	}
}

calculate(12,'+',2);
calculate(12,'-',2);
calculate(12,'*',2);
calculate(12,'/',2);




// ---------------------------//

// Objects

const pen = {
    color:"blue",
    brand : "bic"
}

pen.price = "2.2"
console.log(`My pen is ${pen.brand} and it cost ${pen.price}`)



// Problem statement#
// Create a Dog object with the following properties:

// name
// species
// size
// describe() - display all attributes of an object
// bark() - returns “Woof!”


var dog = {
	name: 'Tim',
  species: 'German Shepherd',
  size: '3 foot',
  bark(){
		console.log("Woof!");
	},
  describe(){
      console.log(`${this.name} belongs to ${this.species} species and its size is ${this
      .size}`);
  }
};
dog.bark();
dog.describe();

 // ---------------------------- //

//  Arrays

const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
console.log(movies.length); // 3

const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
console.log(movies[0]); // "The Wolf of Wall Street"
console.log(movies[1]); // "Zootopia"
console.log(movies[2]); // "Babysitting"

for (let i=0; i<movies.length - 1; i++)
{
    console.log(movies[i])
}

movies.forEach(movie => {
    console.log(movie)
})


for (let movie of movies)
{
    console.log(movie)
}


const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
movies.unshift("Pacific Rim");
console.log(movies[0]); // "Pacific Rim"



const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
movies.pop(); // Remove the last array element
console.log(movies.length); // 2
console.log(movies[2]); // undefined



const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
movies.splice(0, 1); // Remove 1 element starting at index 0
console.log(movies.length); // 2
console.log(movies[0]); // "Zootopia"
console.log(movies[1]); // "Babysitting"




// ------------------------------------------------//

// Problem statement#

// Create an array named musketeers containing values - “Athos”, “Porthos” and “Aramis”
// Add the “D’Artagnan” value to the array
// Remove Aramis



var musketeers = ["Athos", "Porthos", "Aramis"];
musketeers.push("D’Artagnan")
musketeers.splice(2,1)


//Problem statement#
// Write a function that takes as input an array and calculates the sum of its elements. Your function should also handle negative values.

let input1 = [3, 11, 7, 2, 9, 10];
let input2 = [-1, 110, 1, 1, 0];

function sumArray(values){ 	
    let sum = 0;
  	for (value of values){
    		sum += value;
    	}
 		console.log(sum);
}
sumArray(input1);
sumArray(input2);

// --------------//

// Problem statement#
// Write a program that creates an array of the following elements, then returns the maximum element in the array.

let input1 = [3, 11, 7, 2, 9, 10];
let input2 = [-1,-2,-100,3];

function maxElement(values){
  	var max = values[0];
  	for (value of values){
    		if(value > max) 
			{
				max = value;
			}
			
    	}
 		console.log(max);
}
maxElement(input1);
maxElement(input2);


// Problem statement#
// Write a program that creates an array of the following elements, then returns the  minimum element.

function secondMinimum(values){
  sndMin = values [0];
    for (value of values)
    {
        if (value < sndMin)
        {
            sndMin = value;
        }
    }
  return sndMin;
}





//-------------------------------------------//

const name = "adil"
for (let i = 0; i < name.length; i++)
{
    console.log(name[i])
}

const name='adil'
for (const letter of name)
{
    console.log(letter)
}


// ------------------------------- //


const monthList = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
const months = monthList.split(","); // `,` is the separator in monthList.
console.log(months)
//months is the array containing substrings at distinct array indices

// -----//


const name = 'adil'
console.log(name.indexOf('i'))

const names = "hello adil"
console.log(names.endsWith('adil')) // true


// -------------------- //

// Problem statement#
// Write a program that returns the length of a given word, and its lowercase, and uppercase version.


function length(word)
{
    return word.length
}

length('hello')
function lowerCase(word){
    return word.toLowerCase()
}

function upperCase(word){
    return word.toUpperCase()
}


// ----------------------------------- //

// Problem statement#
Write a program that returns the total number of vowels in a word.

let word = "This is a string"; 

function vowels(word){
    var count=0;
    for (w of word)
    {
        if (w=='a' || w == 'e' || w=='i' || w == 'o' || w=='u')
        {
            count++;
        }
    }
    return count;
}



// ==========================================//


Problem statement#
Write a program that returns the given word in reverse order.


function reverse(word)
{
	let reversedWord = ""
	for (let i=word.length - 1; i>=0; i--)
	{
		reversedWord+=word[i]

	}
	return reversedWord
}

console.log(reverse("Adil"))



// ================================================//

// Object oriented Programming



class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0; // XP is always zero for new characters
  }
  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this
      .strength} as strength and ${this.xp} XP points`;
  }
}


const aurora = new Character("adil", 100, 20)
console.log(aurora.describe())



// ===========================//

// Problem Statement#
// A Dog is defined by:

// A name property
// A species property
// A size property
// A bark() method that returns “Grrr! Grrr!” for Dogs taller than 60 emote, and for others, it simply returns “Woof! Woof!”.

class Dog{
  constructor(name,species,size){
  		this.name = name;
    	this.species = species;
    	this.size = size;
  	}
  bark(){
	  if(this.size > 60)
	  {	
		console.log(this.name + " is a " + this.species + " dog measuring " + this.size) //Fang is a boarhound dog measuring 75
		console.log(this.name + " barks: Grrr! Grrr!"); //Fang barks: Grrr! Grrr!
	  } 
	  else
	  {
	    console.log(this.name + " is a " + this.species + " dog measuring " + this.size) //Snowy is a terrier dog measuring 22
	  	console.log(this.name + " barks: Woof! Woof!"); //Snowy barks: Woof! Woof!
	  }
  	}
}
let object = new Dog("Fang","boarhound", 75);
object.bark();

let object1 = new Dog("Snowy","terrier", 22);
object1.bark();

// Map 

const numbers = [21,12,23,1,3]

const double = numbers.map(x => x*2)


// FIlter

const numbers = [1, 5, 10, 15];
// Keep only the number greater than or equal to 10
const bigOnes = numbers.filter(x => x >= 10);

console.log(numbers); // [1, 5, 10, 15] (no change)
console.log(bigOnes); // [10, 15]



 
// ===============================================//

// DOM


window.addEventListener("load", e => {
  console.log("The page has been loaded!");
});





// ================ //

// Problem statement#
// Start with the following HTML content and write the JavaScript code that counts the number of clicks on the myButton button by updating the clickCount element. The deactivate button stops the counting.

// If you get stuck, you can refer to the given solution!


// HTML

<html>
 <head>
 </head>
 <body>
	<button id="myButton">Click me!</button>
	<p>You clicked on the button <span id="clickCount">0</span> times</p>
	<button id="deactivate">Deactivate counting</button> </body>
</html>


// Javascript


var count = 0;
let clickCount = document.getElementById('clickCount')
let btn = document.getElementById('myButton')
 
      document.getElementById('myButton').addEventListener("click", function() {
     document.getElementById('clickCount').textContent =  count++;
})
 

 document.getElementById("deactivate").addEventListener("click", function() {
       let count = 0;
document.getElementById('clickCount').innerHTML = count
 })

 
 // ================================== //


Problem statement#
The following HTML code defines a list of desserts, empty for now.

Write the JavaScript code that adds a new dessert to the list when the user clicks on the button. The dessert name is chosen by the user.
 
If you get stuck, you can refer to the given solution.


// HTML
<html>
 <head>
 </head>
 <body>
	<h1>My favourite desserts</h1>

	<ul id="desserts">
	</ul>

   <p><button id="addButton">Add a dessert</button></p>
  </body>
</html>


// Javascript
let btn = document.getElementById('addButton');
let ull = document.getElementById("desserts");
 
 
let count = 0;
btn.addEventListener("click", function() {
     
     let user = prompt("Enter : ")
      let list = document.createElement('li')
      list.textContent = user
        ull.appendChild(list)
   
   
})



