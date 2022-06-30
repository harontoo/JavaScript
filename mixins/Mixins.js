//mixin
let SayMixin = {
    sayHi(){
        console.log(`Hello ${this.name}`);
    },
    sayBye(){
        console.log(`Bye ${this.name}`);
    }
};

//Usage
class User{
    constructor(name)
    {
        this.name = name;
    }
};

//Copy the methods
Object.assign(User.prototype,SayMixin);

new User("Dude").sayHi();