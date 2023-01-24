let myArray = [
  "Tim",
  28,
  "Pepper", 
  ["Tino", 22, "Russel"] 
];

for(let i = 0; i < myArray.length; i++) {
  // console log each item in the array
  // console.log(myArray[i])
}

// Comparison Operators

// == equal to
// <= less than or equal to
// >=  greater than or equal to
// === strictly equal to (value and variable type)
// != not equal to
// !== strictly not equal to (not same value and variable type)



// Logical Operators

// && and 
// || or
// !a not

let fruit = prompt("What is your favourite fruit?")

switch(fruit) {
    case "mango":
      console.log("Mango is an interesting choice.")
      break;
    case "papaya":
      console.log("Papaya is an excellent choice.")
      break;
    case "kiwi":
      console.log("Kiwi is a nationality right?")
      break;
    case "dorian":
      console.log("Why do you hate people?")
      break;
    default:
      console.log("Wow, I've never heard of that fruit!")
}

if(fruit == "mango") {
  console.log("Mango is an interesting choice.")
}else if(fruit == "papaya") {
  console.log("Papaya is an excellent choice.")
} else if(fruit == "kiwi") {
  console.log("Kiwi is a nationality right?")
}else if( fruit == "dorian") {
  console.log("Why do you hate people?")
}else {
  console.log("Wow, I've never heard of that fruit!")
}

if(a == b && c == d) {
  
}
