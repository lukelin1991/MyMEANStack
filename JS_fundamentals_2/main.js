// function whatTheFunc(x, y){
//   if (x > y){
//     var temp = x;
//     x = y;
//     y = temp;
//   }
//   var sumnum = 0;
//   for(var i = x; i < y+1; i++){
//     sumnum += i;
//   }
//   return sumnum;
// }
// console.log(whatTheFunc(-2, 10));




// function minArr(x){
//   var min = x[0];
//   for(var i = 1; i < x.length; i++){
//     if (min > x[i]){
//       min = x[i];
//     }
//   }
//   return min;
// }
//
// console.log(minArr([3, 6, -2, 12, -5]));




// function avgarr(y){
//   var avg = 0;
//   var sumnum1 = 0;
//
//   for (var i = 0; i < y.length; i++){
//     sumnum1 += y[i];
//   }
//   avg = sumnum1/y.length;
//   return avg;
// }
//
// console.log(avgarr([3, 6, 2, 9, -2, -1, 0]));




// var b = {};
// b.chicken = function(y){
//   var avg = 0;
//   var sumnum1 = 0;
//
//   for (var i = 0; i < y.length; i++){
//     sumnum1 += y[i];
//   }
//   avg = sumnum1/y.length;
//   return avg;
// }
//
// console.log(b.chicken([3, 6, 2, 9, -2, -1, 0]));
// console.log(b);



// var a = {};
// a.turkey = function(x, y){
//   if (x > y){
//     var temp = x;
//     x = y;
//     y = temp;
//   }
//   var sumnum = 0;
//   for(var i = x; i < y+1; i++){
//     sumnum += i;
//   }
//   return sumnum;
// }
//
// console.log(a.turkey(-2, 10));


// var c = {};
// c.vegetables = function(x){
//   var min = x[0];
//   for(var i = 1; i < x.length; i++){
//     if (min > x[i]){
//       min = x[i];
//     }
//   }
//   return min;
// }
//
// console.log(c.vegetables([3, 6, -2, 12, -5]));


var person = {
  "name" : "Luke",
  "distance_traveled": 0,
}

person.say_name = function(){
  console.log(person.name);
}
person.say_name();

person.say_something = function(x){
  console.log(`${person.name} says ${x}`); // ` under the ESC sign..`
}
person.say_something("I am cool");

person.walk = function(){
  person.distance_traveled += 3;
  console.log(`${person.name} is walking for ${person.distance_traveled} million miles`);
}

person.walk();

person.run = function(){
  person.distance_traveled += 10;
  console.log(`${person.name} is running for ${person.distance_traveled} million dollars! yay him`);
}

person.run();

person.crawl = function(){
  person.distance_traveled += 1;
  console.log(`${person.name} is crawling for ${person.distance_traveled} miles total and died at the end`);
}

person.crawl();
// console.log(person);
