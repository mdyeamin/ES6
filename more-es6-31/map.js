const numbers = [4, 6, 8, 10];

// function doubleOld(number) {
//     const result = number * 2;
//     return result
// }
const doubleIt = number => number * 2;

const output2 = [];
for (let number of numbers) {
    const result = doubleIt(number)
    output2.push(result);

}
// console.log(output2);

// const output = numbers.map(doubleIt);
// const output = numbers.map(number => number * 2);
const output = numbers.map(x => x * 2);
console.log(output);

const square = numbers.map(x => x * x);
console.log(square);