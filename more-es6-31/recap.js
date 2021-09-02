// 1. let and const
const hubby = 'omor sani';
let phone = 'iphone 15';
phone = 'samsung 17';

// 2 default parameter
// 5 spread or three dost (...)

function maxNumber(array = []) {
    const max = Math.max(...array)
    return max
}
const biggest = maxNumber();
console.log(biggest);
// 3. template string 
const myNotes = `i am mojnu of ${hubby} i don't have a laili.`;
console.log(myNotes);

// 4 arrow function
const square = x => x * x;
console.log(square(9));