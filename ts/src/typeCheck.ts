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

function getAnimal1(animal: Cat | Dog) {
  if (animal instanceof Cat) {
    animal.helloCat();
  } else if (animal instanceof Dog) {
    animal.helloDog();
  }
}

getAnimal1(new Cat());
getAnimal1(new Dog());

function getAnimal2(animal: Cat | Dog) {
  if ("helloCat" in animal) {
    animal.helloCat();
  } else {
    animal.helloDog();
  }
}

getAnimal2(new Cat());
getAnimal2(new Dog());

// 类型谓词
function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).helloCat !== undefined;
}

function getAnimal3(animal: Cat | Dog) {
  if (isCat(animal)) {
    animal.helloCat();
  } else {
    animal.helloDog();
  }
}

getAnimal3(new Cat());
getAnimal3(new Dog());

export {};
