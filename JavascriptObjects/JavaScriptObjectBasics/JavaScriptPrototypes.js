const myObject = {
    city:'Madrid',
    greet()
    {
        console.log(`Greetings from ${this.city}`);
    }
};

myObject.greet();
console.log(myObject.toString());
console.log(Object.getPrototypeOf(myObject));

const personPrototype = {
    greet() {
      console.log(`hello, my name is ${this.name}!`);
    }
  }
  
  function Person(name) {
    this.name = name;
  }
  
  Person.prototype = personPrototype;
  Person.prototype.constructor = Person;


  console.log(Object.getPrototypeOf(Person));