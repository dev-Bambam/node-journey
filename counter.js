 function Person(name, age) {
  this.name = name;  // `this` refers to the newly created object
  this.age = age;
  
  // Arrow function
  this.greet = () => {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  };
}

const person2 = new Person('Bambam', 25);
person2.greet();  // Output: "Hi, my name is Bambam and I'm 25 years old."
