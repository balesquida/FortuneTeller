
let motherName = prompt("Write your mother’s first name");
let StreetName = prompt("Write the name of the street you grew up on");
let favouriteColour = prompt("Your favourite colour as a child");
let age = Number(prompt("Your age"));
let number = Number(prompt("A number between 1 and 10"));
console.log ("You will meet your best friend in  " + number + " years");
console.log ("Your best friend’s name will be " +motherName + " "+ StreetName);
console.log ("You will get married in " + (age + number) + "years and you will have " + (age % number) + " children");
console.log ("In " + (age / number) + " years you are going to dye your hair red")