function Car(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year; 
}

Car.prototype.printInfo = function(){
  console.log(`Make: ${this.make} Model: ${this.model} Year: ${this.year}`);
}

function Bike(make, model, year){
  Car.call(this, make, model, year)
}
Bike.prototype = Object.create(Car.prototype)
Bike.prototype.constructor = Bike

const audi = new Car('Audi', 'A6', '2019'); 
audi.printInfo()

const hero = new Bike('hero', 'shine', '2019')
hero.printInfo()
console.log(hero)