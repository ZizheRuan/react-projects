const square = function (x){
    return x * x;
}



// const squareArrow = (x) => {
//   return x * x;  
// };

const squareArrow = (x) => x * x;
//Only in this case.

console.log(squareArrow(4));



const getFirstName = (x) => x.split(' ')[0];

console.log(getFirstName('Mike Jen'));