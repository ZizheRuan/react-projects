class Person {
    //if just 'age', the default is Undefined, 
    // but there must be an 'age' instead of nothing.
    constructor(name = 'Anonymous', age = 0){ 
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`;
    } 
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);//let parent class do their job & define their items.
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription (){
        //complete overriden the same name function in the Parent Class
        let description = super.getDescription();
        if (this.hasMajor()){
            description += `, Their major is ${this.major}.`;
        }
        return description
    }
}

class Traveller extends Person {
    constructor (name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting (){
        let greeting = super.getGreeting();
        if (this.homeLocation){
            greeting += `, I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }

}


// const me = new Student('Andrew Mead','26','Computer Science');
// console.log(me);
// console.log(me.getDescription());
// console.log(me.hasMajor());

// const other = new Student();
// console.log(other);
// console.log(other.getDescription());
// console.log(other.hasMajor());

const me = new Traveller('Andrew Mead','26','Philadelphia');
console.log(me);
console.log(me.getGreeting());
// console.log(me.hasHomeLocation());

const other = new Traveller();
console.log(other);
console.log(other.getGreeting());
// console.log(other.hasHomeLocation());