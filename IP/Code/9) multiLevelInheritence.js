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
      super(name);
      this.breed = breed;
    }
    bark() {
      console.log(`${this.name} barks.`);
    }
  }
  
  // Grandchild class inheriting from Dog
  class Puppy extends Dog {
    constructor(name, breed, age) {
      super(name, breed);
      this.age = age;
    }
    play() {
      console.log(`${this.name}, the puppy, is playing.`);
    }
  }
  
  const myPuppy = new Puppy('Max', 'Labrador', 1);
  myPuppy.speak(); // Output: Max makes a sound.
  myPuppy.bark();  // Output: Max barks.
  myPuppy.play();  // Output: Max, the puppy, is playing.
  