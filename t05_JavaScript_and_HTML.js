/****************************
Name of task: Introduction
****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
console.log("Running task 05_JavaScript_and_HTML")
// Variables
let username = "Victor"
let age = 15
let money = 9999999999
let year = 2026
var answer
/*****************
Main Code
*****************/
console.log("Hi "+ username);
console.log("As of " + year + " you are " + age + " years old");
console.log("You were born in", + year - age);
console.log("In 10 years will will be", age + 10 ,"years old");
console.log("You have " + money + " dollars");
answer = money/2
console.log("If you spend half of your money, now you have", + money / 2, "dollars");
console.log("Then you get $3, now you have", + answer+3);

OUTPUT.innerHTML = "<h1>Hi " + username + "</h1>";
/*****************
Functions
*****************/

