// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// breed

const frankie = {
  name: "Frankie",
  age: 0,
  interests: ["chasing string", "cuddling", "catnip"],
  isGoodWithKids: true,
  isGoodWithDogs: false,
  isGoodWithCats: true,
  getAge: function () {
    this.age = randomAge(3, 12) + " months";
  },
};
frankie.getAge();

console.log(frankie);

function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// get the parent element that already exists
const parentElement = document.getElementById("kittenProfiles");

// create a new article element
const article = document.createElement("article");
parentElement.appendChild(article);

// name
const h2 = document.createElement("h2");
h2.textContent = frankie.name;
article.appendChild(h2);

// bio
const p = document.createElement("p");
p.textContent = frankie.name + " is adorable and is " + frankie.age + " old.";
article.appendChild(p);

// list of interests
const ul = document.createElement("ul");
article.appendChild(ul);

for (let i = 0; i < frankie.interests.length; i++) {
  const li = document.createElement("li");
  li.textContent = frankie.interests[i];
  ul.appendChild(li);
}

// image
const img = document.createElement("img");
img.setAttribute("src", frankie.name + ".jpeg");
img.setAttribute(
  "alt",
  "cute picture of ' + frankie.name + ', who is an orange and white cat. You should really adopt her."
);
article.appendChild(img);

// object literals
// bracket and dot notation
// Math.random (and floor)
