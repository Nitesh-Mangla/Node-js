// this is class pratices

class Testing {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName
  }

// prototype method
   userName() {
    return this.firstName +" "+this.lastName;
  }
}

let t = new Testing("Nitesh", "Mangla");
console.log(t.userName());
