const car = {
    color:"red",
    speed: 0,
    drive() {
        this.speed += 10;
    }
};

const user = {
    name:"Alex",
    getName() {
        return this.name;
    }
};

class Animal {
    move() {
        console.log("I am moving");
    }
    speak() {
        console.log("Animal sound");
    }
};


class Cat extends Animal{
    speak() {
        console.log("Meow");
    }
};

class Dog extends Animal{
    speak() {
        console.log("Gav");
    }
};

const dog = new Dog();
dog.move();
dog.speak();

const cat = new Cat();
cat.move();
cat.speak();

function Human(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}

const chris = new Human('Chris','Coyier');
console.log(chris.firstName);
console.log(chris.lastName);

const zell = new Human('Zell','Liew');
console.log(zell.firstName);
console.log(zell.lastName);

class Humann {
    constructor (firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
    };
}
const chriss = new Humann('Chris','Coyier');
console.log(chriss.firstName);
console.log(chriss.lastName);

const Humannn = {
    init(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
    };
}
