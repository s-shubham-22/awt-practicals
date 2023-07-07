'use strict';

/*
Define a class representing a vehicle with properties like make, 
model, and year. Implement methods to display the vehicle details 
and calculate the mileage.

Create child classes like Car and Motorcycle that inherit from the 
Vehicle class and add specific properties and methods.
*/

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  display() {
    console.log(`Make: ${this.make}\nModel: ${this.model}\nYear: ${this.year}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }

  display() {
    super.display();
    console.log(`Doors: ${this.doors}`);
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year, type) {
    super(make, model, year);
    this.type = type;
  }

  display() {
    super.display();
    console.log(`Type: ${this.type}`);
  }
}

let car = new Car('Honda', 'Civic', 2010, 4);
let motorcycle = new Motorcycle('Harley Davidson', 'Sportster', 2015, 'Cruiser');

car.display();
console.log();
motorcycle.display();
