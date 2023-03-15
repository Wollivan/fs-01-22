require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Cat = require("./models/cat");
const bp = require("body-parser");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(bp.json()); // allows us access to the request.body

// connect to the databse (pretty important step)
mongoose.connect(process.env.DATABASE_URL);

// READ
app.get("/cats", async (request, response) => {
  // try to do this code, but if it errors, instead of crashing the server, stop, and move to the catch
  try {
    const cats = await Cat.find(request.query); // e.g. { location: "Liverpool" }
    response.status(200).json(cats);
  } catch (error) {
    console.log(error);
    response.status(404).json(error);
  }
});

// CREATE
app.post("/cats", async (request, response) => {
  try {
    const newCat = await Cat.create(request.body);
    response.status(200).json(newCat);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});

// DELETE e.g localhost:8080/cats/90869868728729
app.delete("/cats/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const deletedCat = await Cat.findByIdAndDelete(id);
    response.status(200).send(deletedCat);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

/*

  Query
  /cats?location=Leicester

  Params
  /cats/leicester

  Body (in the call on the front end)
  { location: "Leicester" }

*/
