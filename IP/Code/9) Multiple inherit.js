// Mixin with additional properties/methods
const CanFly = {
    fly() {
      console.log(`${this.name} is flying.`);
    }
  };
  
  const CanSwim = {
    swim() {
      console.log(`${this.name} is swimming.`);
    }
  };
  
  // Parent class
  class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  
  // Create a class that inherits behavior using mixins
  class Duck extends Animal {}
  
  // Adding mixin behavior to Duck class
  Object.assign(Duck.prototype, CanFly, CanSwim);
  
  const myDuck = new Duck('Donald');
  myDuck.fly();  // Output: Donald is flying.
  myDuck.swim(); // Output: Donald is swimming.
  