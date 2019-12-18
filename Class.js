class Car {
  constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year; 
  }
  printInfo(){
    console.log(`Make: ${this.make} Model: ${this.model} Year: ${this.year}`);
  }
  static isCarr(x){
    return x.constructor === this
  }
  static isCar(x){
    console.log('ahh')
    return this.isCarr(x)
  }

  printStatus(x){
    console.log(Car.isCar(x))
  }
}

const audi = new Car('Audi', 'A6', '2019'); 
audi.printInfo()
audi.printStatus(audi)

class Bike extends Car{
  constructor(make, model, year){
    super(make, model, year);
  }
}

const hero = new Bike('hero', 'shine', '2019')
hero.printInfo()

console.log(Bike.isCar(hero))