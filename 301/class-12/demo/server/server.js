require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Cat = require("./models/cat");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());

// connect to the databse (pretty important step)
mongoose.connect(process.env.DATABASE_URL);

app.get("/cats", async (request, response) => {
  console.log("Query String: ", request.query);

  // try to do this code, but if it errors, instead of crashing the server, stop, and move to the catch
  try {
    const cats = await Cat.find(request.query);
    response.status(200).json(cats);
  } catch (error) {
    console.log(error);
    response.status(404).json(error);
  }
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
