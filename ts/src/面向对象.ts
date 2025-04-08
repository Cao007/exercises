abstract class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract makeSound(): void;
  move(): void {
    console.log(`${this.name} is moving`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("Tom");
dog.makeSound(); // Woof! Woof!
dog.move(); // Tom is moving

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeSound(): void {
    console.log("Meow! Meow!");
  }
}
const cat = new Cat("Kitty");
cat.makeSound(); // Meow! Meow!
cat.move(); // Kitty is moving
