// const add = function (a,b){
//     return a+b;
// };
// console.log(add(55,1));


// const add = function (a,b){
//     console.log(arguments);
//     return a+b;
// };
// console.log(add(55,1,1001));


// const add = (a,b) => {
//     // can't print out arguments in this ES6 scheme
//     // console.log(arguments);
//     return a+b;
// };
// console.log(add(55,1,1001));



// const user = {
//     name: 'Andrew',
//     cities: ['a','b','c'],
//     printPlacesLived: function (){
//         console.log(this.name);
//         console.log(this.cities);

//         this.cities.forEach(function(city){
//             console.log(this.name + ' has lived in '+ city)
//         });//XXX WRONG!!: this.name is in a new inner function that can't accessed.

//     }
// };
// user.printPlacesLived();


// const user = {
//     name: 'Andrew',
//     cities: ['a','b','c'],
//     printPlacesLived: function (){
//         console.log(this.name);
//         console.log(this.cities);
//         const that = this;

//         this.cities.forEach(function(city){
//             console.log(that.name + ' has lived in '+ city)
//         });//this.name is in a new inner function that can't accessed.

//     }
// };
// user.printPlacesLived();


const user = {
    name: 'Andrew',
    cities: ['a','b','c'],
    printPlacesLived (){
        return this.cities.map((city) => this.name + ' has lived in '+ city);
    }
};
console.log(user.printPlacesLived());



const multiplier = {
    numbers: ['2','3','4'],
    multiplyBy: '2',
    multiply (){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());