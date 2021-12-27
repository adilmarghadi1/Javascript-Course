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

