function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Kitten(name, interests, goodWithDogs, goodWithKids, goodWithCats, imageFilename) {
  this.name = name;
  this.interests = interests;
  this.goodWithDogs = goodWithDogs;
  this.goodWithKids = goodWithKids;
  this.goodWithCats = goodWithCats;
  this.imageFilename = imageFilename;
  this.age = this.generateAge();
}

// mehtods get added to the contructor's prototype
Kitten.prototype.generateAge = function () {
  return randomAge(3, 12) + " months";
};

Kitten.prototype.meow = function () {
  console.log("Meow from " + this.name);
};

Kitten.prototype.render = function () {
  // get the "container/parent" for kitten profiles
  const containerElem = document.getElementById("kittenProfiles");

  // each kitten profile is an article
  const articleElem = document.createElement("article");
  containerElem.appendChild(articleElem);

  // add the heading
  const headingElem = document.createElement("h2");
  headingElem.textContent = this.name;
  articleElem.appendChild(headingElem);

  // add the bio
  const paraElem = document.createElement("p");
  paraElem.textContent = this.name + " is adorable and is " + this.age + " old.";
  articleElem.appendChild(paraElem);

  // add interests in an nordered list
  const ulElem = document.createElement("ul");
  articleElem.appendChild(ulElem);

  for (let i = 0; i < this.interests.length; i++) {
    const liElem = document.createElement("li");
    liElem.textContent = this.interests[i];
    ulElem.appendChild(liElem);
  }

  // Table time! (for the good withs)
  const tableElem = document.createElement("table");
  articleElem.appendChild(tableElem);

  // hedaer row
  const headerRow = document.createElement("tr");
  tableElem.appendChild(headerRow);

  // add header cells
  const kidsHeaderCell = document.createElement("th");
  const dogsHeaderCell = document.createElement("th");
  const catsHeaderCell = document.createElement("th");

  kidsHeaderCell.textContent = "Kids";
  dogsHeaderCell.textContent = "Dogs";
  catsHeaderCell.textContent = "Cats";

  headerRow.appendChild(kidsHeaderCell);
  headerRow.appendChild(dogsHeaderCell);
  headerRow.appendChild(catsHeaderCell);

  // add data row
  const dataRow = document.createElement("tr");
  tableElem.appendChild(dataRow);

  // add data cells
  const kidsDataCell = document.createElement("td");
  const dogsDataCell = document.createElement("td");
  const catsDataCell = document.createElement("td");

  kidsDataCell.textContent = this.goodWithKids;
  dogsDataCell.textContent = this.goodWithDogs;
  catsDataCell.textContent = this.goodWithCats;

  dataRow.appendChild(kidsDataCell);
  dataRow.appendChild(dogsDataCell);
  dataRow.appendChild(catsDataCell);

  // image
  const imgElem = document.createElement("img");
  imgElem.setAttribute("src", this.imageFilename);
  imgElem.setAttribute("alt", "frankie looking cute");
  articleElem.appendChild(imgElem);
};

const frankie = new Kitten("Frankie", ["cuddling", "chasing string", "catnip"], true, true, true, "frankie.jpeg");

const serena = new Kitten(
  "Serena",
  ["sitting in laps", "climbing curtains", "eating treats"],
  false,
  true,
  false,
  "serena.jpeg"
);

const jumper = new Kitten("Jumper", ["sunbeams", "yarn", "milk", "paper bags"], false, true, true, "jumper.jpeg");

frankie.render();
serena.render();
jumper.render();
