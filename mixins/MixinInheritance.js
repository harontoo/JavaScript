let SayMixin = {
    say(phrase){
        console.log(phrase);
    }
};

let SayHiMixin = {

    __proto__ : SayMixin,
    sayHi(){
        super.say(`Hi ${this.name}`);
    },   
    sayBye(){
        super.say(`Bye ${this.name}`);
    }
 };

 class Person {
    constructor(name)
    {
        this.name = name;
    }
 };

 Object.assign(Person.prototype,SayHiMixin);

 new Person("Dude").sayHi();