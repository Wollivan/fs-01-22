require('dotenv').config();
const express = require('express');
const cors = require('cors');
// Read in the shopping list from our "Database" (flat file)
const data = require('./shopping-list.json');

const app = express();

// middleware
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/', (request, response) => {
  response.send('hello from the home route!');
});

app.get('/bananas', (request, response) => {
  response.json({ 'bananas': 'are cool' });
});

app.get('/shoppingList', (request, response) => {
  // query params for example
  console.log('Query Params', request.query);
  
  const type = request.query.type;
  const filteredData = data.filter((item)=>{
    return item.type === type
  })
  
  response.status(200).send(filteredData);
});

app.get('/throw-an-error', (request, response) => {
  // When something bad happens, you can "throw" an error and the
  // error handler middleware will catch and handle it
  throw new Error('You did something really, really bad!');
});

// When you use a try-catch and an error "just happens" in your code,
// use the 'catch' to call upon the error handler and give the user something useful
app.get('/async-error', (request, response, next) => {
  try {
    // we are generating an error on purpose
    // This should cause an error that'll end up in the catch() below
    let listException = new List(1337);
    let badListItems = listException.getItems();
    response.send(badListItems);
  } catch (error) {

    // next can be used to pass an error to express for the error middleware to handle
    next(error);

    // The following is BAD. DO NOT handle errors inline, this is not the Express way
    // response.status(500).send('error from async-error');
    // response.status(500).send(error.message);
  }
});

// Not Found
app.get('*', (request, response) => {
  response.status(404).send('not found');
});

// error handling middleware must be the last app.use()
app.use((error, request, response, next) => {
  console.error(error);
  response.status(500).send(error.message);
});

// the main thing!
app.listen(PORT, () => console.log(`listening on ${PORT}`));
