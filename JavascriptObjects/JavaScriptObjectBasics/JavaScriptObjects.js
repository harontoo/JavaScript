const Person = {
    name:['Bob','Smith'],
    age:32,
    bio:function () {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function(){
        console.log(`Hi,I'm ${this.name[1]}.`);
    }

};

console.log(Person);
//dot notation
Person.bio();
Person.introduceSelf();
//bracket notation
console.log(Person['age']);

Person['height'] = 24;
console.log(Person.height);
console.log({[Person.name[0]]:'Shmurda'});

//Constructor
function PersonCtr(name) {
    this.name = name;
    this.introduceSelf = function() {
      console.log(`Hi! I'm ${this.name}.`);
    }
  }

  const salva = new PersonCtr('Salva');
  salva.name;
  salva.introduceSelf();
  
  const frankie = new PersonCtr('Frankie');
  frankie.name;
  frankie.introduceSelf();
  const s = salva;
  s.name="sw"
  salva.introduceSelf();

  console.log(salva==s);