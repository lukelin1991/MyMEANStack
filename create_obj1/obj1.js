// We are going to create our very own constructor.
// Create a VehicleConstructor that takes in the name,
// number of wheels, and the number of passengers.
///Then complete the following tasks:
// Each vehicle should have a makeNoise method
// Using the constructor, create a Bike
// Redefine the Bike’s makeNoise method to print “ring ring!”
// Create a Sedan
// Redefine the Sedan’s makeNoise method to print “Honk Honk!”
// Using the constructor, create a Bus
// Add a method to Bus that takes in the number of passengers
//to pick up and adds them to the passenger count

function VehicleConstructor(name, wheels, passengers, noise){
  var vehicle = {};

  vehicle.name = name;
  vehicle.wheels = wheels;
  vehicle.passengers = passengers;
  vehicle.makeNoise = noise;

  vehicle.call = function(){
    console.log("All Aboard the " + vehicle.wheels + " wheeled " + vehicle.name + "!  Please hold on tight, and HERE WE GO! *as you speed off... you hear the* " + vehicle.name + " go " + vehicle.makeNoise);
  }
  return vehicle;
}

var bike = VehicleConstructor("Bike", 2, 1, '"ring ring!"');
var sedan = VehicleConstructor("Sedan", 4, 4, '"honk honk!"');
var bus = VehicleConstructor("Bus", 6, 1, '"beep beep!"');

bus.pickup = function(newPassengers){
  bus.passengers += newPassengers;
}

bike.call();
sedan.call();
bus.call();

bus.pickup(14);
console.log("14 passengers came aboard the bus and now there are " + bus.passengers + " passengers total!");
