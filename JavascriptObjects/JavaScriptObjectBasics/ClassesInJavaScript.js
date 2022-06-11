class Person {
    name;

    constructor(name)
    {
        this.name = name;
    }

    introduceSelf()
    {
        console.log(`Hi,I'm ${this.name}`);
    }

};

const giles = new Person('Giles');
giles.introduceSelf();

class Professor extends Person {
    teaches;
    constructor(name,teaches)
    {
        super(name);
        this.teaches=teaches;
    }

    introduceSelf()
    {
        console.log(`My name is ${this.name} and I will be your ${this.teaches} professor.`)
    }
    grade()
    {
        const grade = Math.floor(Math.random()*(5+1)-1);
        console.log(grade);
    }
};

const walsh = new Professor('Walsh', 'Psychology');
walsh.introduceSelf();
walsh.grade();

//Encapsulation
class Student extends Person {
    #year;

    constructor(name,year)
    {
        super(name);
        this.#year =year;
    }

    introduceSelf()
    {
        console.log(`Hi,I'm ${this.name},and I'm in year ${this.#year}`)
    }

    canStudyArchery()
    {
        return this.#year>1;
    }
};

const summers = new Student('Summers',2);
summers.introduceSelf();
console.log(summers.canStudyArchery());
