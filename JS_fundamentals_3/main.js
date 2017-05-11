// function personConstructor(name){
//   return person = {
//     "name": name,
//     "distance_traveled": 0,
//     "say_something": function(x){
//       console.log(`${person.name} says ${x}`);
//     },
//   };
// };
//
// console.log(personConstructor("luke")); // makes the object/name
//
// person.say_name = function(){ // saying the name
//   console.log(person.name);
// }
// person.say_name();
//
// person.say_something('i like chicken'); // saying something
//
// person.walk = function(){
//   person.distance_traveled += 3;
//   console.log(`${person.name} is walking ${person.distance_traveled} miles.... oh joy..`);
// }
// person.walk();
//
// person.run = function(){
//   person.distance_traveled += 10;
//   console.log(`${person.name} has been running for ${person.distance_traveled} minutes.... oh joy..`);
// }
// person.run();
//
// person.crawl = function(){
//   person.distance_traveled += 1;
//   console.log(`${person.name} is crawling away from ${person.distance_traveled} people, so scary..`);
// }
// person.crawl();



function ninjaConstructor(name, cohort){
  return ninja = {
    "name":name,
    "cohort":cohort,
    "beltlevel":"yellow-belt"
  }
}

console.log(ninjaConstructor("john", "online-Cohort"));
ninja.levelUp = function(){
  if (ninja.beltlevel == "yellow-belt"){
    ninja.beltlevel = "red-belt";
  }
  else if (ninja.beltlevel == "red-belt"){
    ninja.beltlevel = "black-belt";
  }
  return this;
}
console.log(ninja.levelUp());
