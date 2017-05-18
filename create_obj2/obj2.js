// Modify your VehicleConstructor (from earlier) to use this & new
// (and follow the JS conventions talked about in the previous chapters).
// To recap, here were the requirements from Part I:
// Then make the following modifications:
// Have the Vehicle constructor also take in a “speed”
// Store the speed as an attribute
// Create a private variable called distance_travelled that starts at 0
// Create a private method called updateDistanceTravelled that increments distance traveled by speed
// Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise
// Add a method called checkMiles that console.logs the distance_travelled
// Bonus: Use ES6 Class!

function VehicleConstructor(name, wheels, passengers, noise, speed){
  if(!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name, wheels, passengers, noise, speed)
  }
  var self = this;
  var distance_traveled = 0;
  function newDistanceTraveled(){
    distance_traveled += self.speed;
    return distance_traveled;
  }

  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.makeNoise = noise;
  this.speed = speed;

  this.call = function(){
    console.log("All Aboard the " + this.wheels + " wheeled " + this.name + "!  Please hold on tight, and HERE WE GO! *as you speed off... you hear the* " + this.name + " go " + this.makeNoise);
  }
  this.move = function(){
    this.call();
    newDistanceTraveled();
  }
  this.checkMiles = function(){
    console.log("The " + this.name + " has traveled for " + distance_traveled + " miles already!");
  }
}


var bike = new VehicleConstructor("Bike", 2, 1, '"ring ring!"', 15);
var sedan = new VehicleConstructor("Sedan", 4, 4, '"honk honk!"', 65);
var bus = new VehicleConstructor("Bus", 6, 1, '"beep beep!"', 40);

bus.pickup = function(newPassengers){
  this.passengers += newPassengers;
}

bike.move();
bike.checkMiles();
sedan.move();
sedan.checkMiles();
bus.move();
bus.pickup(14);
console.log("14 passengers came aboard the bus and now there are " + bus.passengers + " passengers total!");
bus.checkMiles();
