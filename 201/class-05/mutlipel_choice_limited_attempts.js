let question = prompt("What is the answer?");

let answers = [1,2,3,4,5];
let attempts = 5;

while(attempts > 0) {
  for(let i = 0; i < answers.length; i++) {
    if(question == answers[i]){
      alert("That is correct.")
      attempts = 0;
    }
  }
  if(attempts > 0) {
    question = prompt("Incorrect, try again.")
    attempts--;
  }
}
