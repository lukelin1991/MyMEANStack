// problem 1 - rearranged:
var first_variable;
console.log(first_variable);

first_variable = "Yipee I was first!";
console.log(first_variable);

function firstFunc(){
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}

firstFunc();

// problem 2 - rearranged..?:
var food;

function eat() {
  var food;
  food = "half-chicken";
  console.log(food);

  food = "gone";       // CAREFUL!
  console.log(food);
}

food = "Chicken";

console.log(food);
eat();

//problem 3 - rearranged;
var new_word;
new_word = "NEW!";

function lastFunc() {
  new_word = "old";
}

console.log(new_word);
