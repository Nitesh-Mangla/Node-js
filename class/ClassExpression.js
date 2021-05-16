// withname
let expression = class {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName  = lastName
  }

  userName() {
    return this.firstName + " "+ this.lastName;
  }
}

// let e = new expression("Nitesh", "Mangla");
// console.log(e.userName());

// function based classes
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function(){
  console.log(`${this.name} bark`);
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} make a noise`);
  }
}
let ani = new Dog("Dog");
ani.speak();
