// Intrduction to Javascript ES6
import createPrompt from "prompt-sync";

const prompt = createPrompt();
// let name = prompt("What is your name? ");
// console.log(name);
// console.log(typeof (name));


// Exercise 1
// var a = "3";
// var b = "8";

// /***********Do not change the code above 👆*******/
// //Write your code on lines 7 - 9:
// var c;
// c = a;
// a = b;
// b = c;
// /***********Do not change the code below 👇*******/

// console.log("a is " + a);
// console.log("b is " + b);


// Exercise 2
// var message = "Hello";
// var name = "Saumya";
// console.log(message + " there, " + name);
// console.log(name.length);

// Exercise 3 + Exercise 4
// let msg = prompt("Enter a message: ");
// console.log("You have written " + msg.length + " characters. You have " + (140 - msg.length) + " characters remaining.");
// console.log("The message is: " + msg.slice(0, 140));

// Exercise 5
// let name = prompt("Enter your name: ");
// console.log("Hello, " + name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase() + "!");

// Exercise 6
// var dogAge;
// dogAge = prompt("Enter your dog's age: ");
// var humanAge = (dogAge - 2) * 4 + 21;
// console.log("Your dog is " + humanAge + " years old in human years.");

// Exercise 7
// function getMilk(money) {
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   let Bottles = Math.floor(money / 1.5);
//   console.log("buy " + Bottles + " bottles of milk");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
// }

// getMilk(12);

// Exercise 8
// function lifeInWeeks(age) {
//   /************Don't change the code above************/
//   //Write your code here.
//   var remainingAge = 90 - age;
//   var remainingDays = remainingAge * 365;
//   var remainingWeeks = remainingAge * 52;
//   var remainingMonths = remainingAge * 12;
//   console.log("You have " + remainingDays + " days, " + remainingWeeks + " weeks, and " + remainingMonths + " months left.");
//   /*************Don't change the code below**********/
// }

// lifeInWeeks(51);

// Exercise 9
//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

// function bmiCalculator(weight, height) {
//   var bmi = Math.round(weight / (height * height));
//   return bmi;
// }


// // If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

// var bmi = bmiCalculator(65, 1.8);

// // bmi should equal 20 when it's rounded to the nearest whole number.

