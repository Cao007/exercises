"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is moving`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log("Woof! Woof!");
    }
}
const dog = new Dog("Tom");
dog.makeSound(); // Woof! Woof!
dog.move(); // Tom is moving
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log("Meow! Meow!");
    }
}
const cat = new Cat("Kitty");
cat.makeSound(); // Meow! Meow!
cat.move(); // Kitty is moving
