const mongoose = require("mongoose");
require("dotenv").config();

const Cat = require("./models/cat");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  // create a new isntacne of a cat object and add to the DB
  await Cat.create({ name: "Guinness Hutton", color: "black & white", hasClaws: false, location: "The Wirral" });
  console.log("Created a new cat");
  
  
  await Cat.create({ name: "Garfield", color: "ginger", hasClaws: true, location: "New York" });
  console.log("Created a new cat");

  mongoose.disconnect();
}

seed();
