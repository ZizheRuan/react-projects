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

const me = new Person('Andrew Mead','26');
console.log(me.getDescription());