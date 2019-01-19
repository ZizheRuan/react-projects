class Person {
    //if just 'age', the default is Undefined, 
    // but there must be an 'age' instead of nothing.
    constructor(name = 'Anonymous', age = 0){ 
        this.name = name;
        this.age = age;
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
}


const me = new Student('Andrew Mead','26','Computer Science');
console.log(me);
console.log(me.getDescription());
const other = new Student();
console.log(other);
console.log(other.getDescription());