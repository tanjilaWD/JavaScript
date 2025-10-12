// const score = [30,45,55,80,90];
// const hasPassed = score.some(score => score >= 50);
// console.log(hasPassed);

//
const score = [60,70,55,80,90];
const allPassed = score.every(score => score >= 50);
console.log(allPassed);

//
const scores = [60,45,55,80,90];
const allpassed = scores.every(scores => scores >= 50);
console.log(allpassed);
//

const nested = [1,2,[3,4,[5,6]]];
const flattened = nested.flat(2);
console.log(flattened);
//
const numbers = [10,25,150,90,60];
const hasBigNumber = numbers.some(num => num > 100);
console.log(hasBigNumber);
//
const divisibleByFive = [6,10,25,150,90,60];
const allDivisible = divisibleByFive.every(num => num % 5 === 0);
console.log(allDivisible);
//
const words = ['hi','welcome','hello','bye'];
const hasHello = words.includes('hello');
console.log(hasHello);
//
const age = [15,22,34,53,23];
const allAdults = age.every(age => age > 18);
console.log(allAdults);