let msgExpression;

showMsg();

function showMsg() {
  console.log("I am the showMsg function");
  
  msgExpression = function() {
    console.log("I am the msgExpression function expression")
  }

  
}

msgExpression();
