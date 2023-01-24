let userPoints = 0;

alert("Welcome to my guessing game.");

let user = prompt("What can I call you?");

// ensure the user ACTUALLY gives their name
while (!user) {
  user = prompt("I really need your name, please give it.");
}

// lament at Ronald
if (user == "Ronald") {
  alert("Ugh, I knew it was you Ronald.");
}

alert("Hello there " + user + "! I'm so glad you decided to visit my website!");

// question one
let foodQuestion = prompt("What is one my favourite foods?.").toLowerCase();

let foodsILike = ["dumplings", "popcorn", "pizza", "pasta"];

for (let i = 0; i < foodsILike.length; i++) {
  if (foodQuestion == foodsILike[i]) {
    alert("Yes I love " + foodQuestion + "!");
    userPoints++;
  }
}

// question two
let musicQuestion = confirm("🎵 Do you love me?🎵");

if (musicQuestion == true) {
  alert("I know.");
  userPoints++;
} else {
  alert("Awww 😔");
}

alert("Well done " + user + "! You scored " + userPoints + "/2");
