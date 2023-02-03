console.log("Woops its all going wrong!");

function sum(a, b) {
  let theSum = a + b;
  return theSum;
}

function sumTwice(a, b, c, d) {
  let theSum = sum(a, b) + sum(c, d);

  return theSum;
}

console.log(sumTwice(12, 45, 67, 19));
