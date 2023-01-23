// function to get the users name
function getName() {
  let myName = prompt("Hey, what's your name?!");

  document.write(myName);
}

// function to get the time and gree the user
function getTime() {
  let time = prompt("What is the time?");

  let message;

  if (time <= 11) {
    message = "Good morning!";
  } else if (time <= 18) {
    message = "Good afternoon";
  } else if (time <= 23) {
    message = "Good evening";
  } else if (time == 24) {
    message = "Oh my goodness, go to sleep!";
  } else {
    message = "You are the weakest link... Goodbye!";
  }

  document.write(message);
}
