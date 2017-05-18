// Have the Vehicle constructor also take in a “speed” Store the speed as an attribute
// Create a private variable called distance_travelled that starts at 0
// Create a private method called updateDistanceTravelled that increments distance traveled by speed
// Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise
// Add a method called checkMiles that console.logs the distance_travelled

function VehicleConstructor(name, wheels, passengers, noise, speed){
  if(!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name, wheels, passengers, noise, speed)
  }
  var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
  this.distance_traveled = 0;
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;
  this.vin = vinMake();

  function vinMake(){
    var vin = ""
    for (var i = 0; i < 17; i++){
      vin += char[Math.floor(Math.random()*36)];
    }
    return vin;
  }
}


VehicleConstructor.prototype.makeNoise = function(noise){
  var noise = noise || "honk honk";
  console.log(noise);
  return this;
}

VehicleConstructor.prototype.move = function(){
  this.makeNoise();
  updateDistanceTraveled();
  return this;
}

VehicleConstructor.prototype.checkMiles = function(){
  console.log(this.distance_traveled);
  return this;
}

VehicleConstructor.prototype.updateDistanceTraveled = function(){
  this.distance_traveled += this.speed;
  console.log(this.distance_traveled);
}

var sedan = new VehicleConstructor("Sedan", 4, 4, '"honk honk!"', 65);
sedan.makeNoise().checkMiles().updateDistanceTraveled();
console.log(sedan.vin);
