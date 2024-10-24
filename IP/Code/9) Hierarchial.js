// Parent class
class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  // Child class inheriting from Animal
  class Dog extends Animal {
    bark() {
      console.log(`${this.name} barks.`);
    }
  }
  
  // Another child class inheriting from Animal
  class Cat extends Animal {
    meow() {
      console.log(`${this.name} meows.`);
    }
  }
  
  const myDog = new Dog('Buddy');
  const myCat = new Cat('Whiskers');
  
  myDog.speak(); // Output: Buddy makes a sound.
  myDog.bark();  // Output: Buddy barks.
  
  myCat.speak(); // Output: Whiskers makes a sound.
  myCat.meow();  // Output: Whiskers meows.
  