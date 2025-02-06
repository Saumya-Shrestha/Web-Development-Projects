import createPrompt from "prompt-sync";

const prompt = createPrompt();

// var name1 = prompt("What is your name? ");
// var name2 = prompt("What is your crush's name? ");

// var rand = Math.random() * 100;
// rand = Math.floor(rand) + 1;

// if (rand > 70) {
//   console.log("Your love score is " + rand + "%." + " You love each other like Kanye loves Kanye.");
// } else if (rand > 30 && rand <= 70) {
//   console.log("Your love score is " + rand + "%.");
// } else {
//   console.log("Your love score is " + rand + "%." + " You go together like oil and water.");
// }

// function bmiCalculator(weight, height) {
//   var bmi = Math.round(weight / Math.pow(height, 2));
//   var interpretation = "";
//   if (bmi < 18.5) {
//     interpretation = "Your BMI is " + bmi + ", so you are underweight.";
//   } else if (bmi >= 18.5 && bmi <= 24.9) {
//     interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
//   } else {
//     interpretation = "Your BMI is " + bmi + ", so you are overweight.";

//   }
//   return interpretation;
// }

// var bmi = bmiCalculator(68.25, 1.8);

// function isLeap(year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return "Leap year.";
//       } else {
//         return "Not leap year.";
//       }
//     } else {
//       return "Leap year.";
//     }
//   } else {
//     return "Not leap year.";
//   }
// }

// console.log(isLeap(2000));

// var GuestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
// var guestName = prompt("What is your name? ");
// if (GuestList.includes(guestName)) {
//   console.log("Welcome!");
// } else {
//   console.log("Sorry, maybe next time.");
// }

// var output = "";
// var count = 1;

// function FizzBuzz() {
//   if (count % 3 === 0 && count % 5 === 0) {
//     output.push("FizzBuzz");
//   } else if (count % 3 === 0) {
//     output.push("Fizz");
//   } else if (count % 5 === 0) {
//     output.push("Buzz");
//   } else {
//     output.push(count);
//   }
//   count++;
//   console.log(output);
// }

// function whosPaying(names) {
//   var x = Math.floor((Math.random() * names.length));
//   return names[x] + " is going to buy lunch today!";
// }

// var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
// console.log(whosPaying(names));

// var output = "";
// var count = 1;

// function FizzBuzz() {
//   while (count <= 100) {
//     if (count % 3 === 0 && count % 5 === 0) {
//       output.push("FizzBuzz");
//     } else if (count % 3 === 0) {
//       output.push("Fizz");
//     } else if (count % 5 === 0) {
//       output.push("Buzz");
//     } else {
//       output.push(count);
//     }
//     count++;
//   }
//   console.log(output);
// }

// function beer() {
//   var i = 99;
//   while (i > 0) {
//     console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
//     console.log("Take one down and pass it around, " + --i + " bottles of beer on the wall.");
//     if (i == 1) {
//       console.log(i + " bottle of beer on the wall, " + i + " bottle of beer.");
//       console.log("Take one down and pass it around, no more bottles of beer on the wall.");
//     }
//   }
//   console.log("No more bottles of beer on the wall, no more bottles of beer.");
//   console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
// }

// beer();

function fibonacciGenerator(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    var fib = [0, 1];
    for (var i = 2; i < n; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;
  }
}

console.log(fibonacciGenerator(15));


