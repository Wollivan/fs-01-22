let question = confirm("Do you like blueberries?");

const parent = document.getElementById("parent");
const child = document.createElement("p");

if (question == true) {
  child.textContent = "Nice me too!";
} else {
  child.textContent = "Why not? They make you live longer!";
}

parent.appendChild(child);
