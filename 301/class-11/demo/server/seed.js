const mongoose = require("mongoose");
require("dotenv").config();

const Cat = require("./models/cat");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  // create a new isntacne of a cat object and add to the DB
  await Cat.create({ name: "Dusty Blackwell", color: "black", hasClaws: true, location: "Norwich" });
  console.log("Created a new cat");

  mongoose.disconnect();
}

seed();
