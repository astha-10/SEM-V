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
    constructor(name, breed) {
      super(name); // Call the parent constructor
      this.breed = breed;
    }
  
    bark() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const myDog = new Dog('Buddy', 'Golden Retriever');
  myDog.speak(); // Output: Buddy makes a sound.
  myDog.bark();  // Output: Buddy barks.
  