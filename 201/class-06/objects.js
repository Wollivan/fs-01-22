// every property has a key and a value
// encapsulated inside {}
// each prop can be any type. Functions become methods
const person = {
  name: "Grace Hopper",
  age: 85,
  computerScientist: true,
  education: ["Vassar College", "Yale University"],
  walk: function() {
    console.log(this.name + " is walking!"); // contextual "this" refers to the object it is inside
  },
  birthplace: {
    date: "December 9 1906",
    location: "New York City, USA"
  }
}

// access using dot notation
console.log(person.name);

// or bracket notation
console.log(person["name"]);

// adds a proptery called serviceBranch
person.serviceBranch = "Navy";

// change the value of a property
person.age = 86;

console.log(person)
