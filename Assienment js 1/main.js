//1
var num1 = prompt('enter your number');
console.log(num1);
//2-
// Taking input from the user
var number = parseInt(prompt("Enter a number:"));

// Checking if the number is divisible by both 3 and 4
if (number % 3 === 0 && number % 4 === 0) {
    console.log("yes");
} else {
    console.log("no");
//3-
// Taking input from the user for two integers
var firstNumber = parseInt(prompt("Enter the first integer:"));
var secondNumber = parseInt(prompt("Enter the second integer:"));

// Finding the maximum of the two numbers using Math.max
var maximum = Math.max(firstNumber, secondNumber);

// Printing the maximum number
console.log("The maximum number is: " + maximum);
//4-
// Taking input from the user for an integer
var number = parseInt(prompt("Enter an integer:"));

// Checking if the number is negative or positive
if (number < 0) {
    console.log("negative");
} else if (number > 0) {
    console.log("positive");
} else {
    console.log("The number is zero.");
}
}
//5-
// Taking input from the user for three integers
var firstNumber = parseInt(prompt("Enter the first integer:"));
var secondNumber = parseInt(prompt("Enter the second integer:"));
var thirdNumber = parseInt(prompt("Enter the third integer:"));

// Finding the maximum and minimum of the three numbers
var maxNumber = Math.max(firstNumber, secondNumber, thirdNumber);
var minNumber = Math.min(firstNumber, secondNumber, thirdNumber);

// Printing the maximum and minimum numbers
console.log("The maximum number is: " + maxNumber);
console.log("The minimum number is: " + minNumber);
//6-
var number = parseInt(prompt("Enter an integer:"));

// Checking if the number is even or odd
if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}
//8-
if (
    character === 'a' ||
    character === 'e' ||
    character === 'i' ||
    character === 'o' ||
    character === 'u'
) {
    console.log("The character is a vowel.");
} else if (character >= 'a' && character <= 'z') {
    console.log("The character is a consonant.");
} else {
    console.log("Invalid input. Please enter a valid alphabet.");
}























