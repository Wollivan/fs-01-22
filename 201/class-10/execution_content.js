//global scope
const name = 'Dan';
function globalFunc() {
  console.log('I can be called anywhere');
}

//function scope
function scopyFunc(doggy) {
  function privateFunc() {
    const privatelet = 'woof!';
    return doggy + ' says ' + privateVar;
  }
  console.log(privateVar);
  console.log('doggy is only defined inside scopyFunc: ' + doggy );
  return privateFunc();
}

scopyFunc('Fido');

//object context
const teacherBot = {
  first: 'Dan',
  last: 'Schwartz',
  age: 35,
  speak: function() {
    return 'Hello humanoid, I am ' + this.first + ' ' + this.last;
  }
};

teacherBot.age    //35
teacherBot.speak  //'Hello humanoid, I am Dan Schwartz'
age               //age is not defined
