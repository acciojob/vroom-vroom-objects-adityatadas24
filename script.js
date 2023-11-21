// Complete the js code
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getMakeModel = function() {
  return this.make + " " + this.model;
};

function SportsCar(make, model, topSpeed) {
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

SportsCar.prototype = Object.create(Car.prototype);
// SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// var car = new Car("Toyota", "Camry");
// console.log(car.getMakeModel()); 

// var sportsCar = new SportsCar("Ferrari", "488 GTB", 202);
// console.log(sportsCar.getMakeModel()); 
// console.log(sportsCar.getTopSpeed());

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
