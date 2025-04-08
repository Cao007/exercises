"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 类型保护
class Cat {
    helloCat() {
        console.log("hello cat");
    }
}
class Dog {
    helloDog() {
        console.log("hello dog");
    }
}
function getAnimal1(animal) {
    if (animal instanceof Cat) {
        animal.helloCat();
    }
    else if (animal instanceof Dog) {
        animal.helloDog();
    }
}
getAnimal1(new Cat());
getAnimal1(new Dog());
function getAnimal2(animal) {
    if ("helloCat" in animal) {
        animal.helloCat();
    }
    else {
        animal.helloDog();
    }
}
getAnimal2(new Cat());
getAnimal2(new Dog());
// 类型谓词
function isCat(animal) {
    return animal.helloCat !== undefined;
}
function getAnimal3(animal) {
    if (isCat(animal)) {
        animal.helloCat();
    }
    else {
        animal.helloDog();
    }
}
getAnimal3(new Cat());
getAnimal3(new Dog());
