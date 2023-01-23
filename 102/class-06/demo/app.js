let myName = prompt("What is your name?");

let time = prompt("What hour of the day is it? (0-23)");
let message;

if (time <= 11) {
  message = "Good morning " + myName + "!";
} else if (time <= 18) {
  message = "Good afternoon " + myName + "!";
} else if (time < 24) {
  message = "Good evening " + myName + "!";
} else {
  message = "C'mon " + myName + ", that is not a valid time!";
}

document.write(message);
