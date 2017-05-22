function each(array, callback) {
  for(var index = 0; index < array.length; index++) {
    callback(array[index], index);
  }
  return array;
}
var arr = [1,2,3,4,5,6,7,8,9,10];

each(arr, function(element, index) {
  console.log(element);
});


function map(array, callback) {
  var results = [];

  each(array, function(element, index) {
    results.push(callback(element, index));
  });

  return results;
}

var result = map(arr, function(element, index) {
  return String.fromCharCode(97 + element);
  // return element + index;
  // return element - index;
});

console.log(result);

function find(array, callback) {
  for(var index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      return array[index];
    }
  }
}

result = find(result, function(element) {
  return element === 'z';
});

console.log(result);


function filter(array, callback) {
  var results = [];

  each(array, function(element, index) {
    if (callback(element, index)) {
      results.push(element);
    }
  });

  return results;
}

result = filter(arr, function(element, index) {
  //  do stuff to determine if we want this element
  return element % 2 !== 0;
});

console.log(result);


function reduce(array, callback, memo) {
  var arr = [].concat(array);

  if (memo === undefined) {
    memo = arr.pop();
  }

  each(arr, function(element, index) {
    memo = callback(memo, element, index);
  });

  return memo;
}

result = reduce(arr, add, reduce(result, add));

function add(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(result);
