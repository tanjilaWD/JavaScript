// function doubleAll (numbers){
//     const double = [ ];
//     for (const num of numbers){
//         const value = num * 2;
//         double.push(value);
//     }
//     return double;
// }
// const numbers = [4,5,2,8,10];
// console.log(doubleAll(numbers));

// const numbers = [4,5,2,8,10];
// const result = numbers.map(num => num * 2);
// console.log(result);

//
const numbers = [12,10,8,15,7];
const fiveBonus = numbers.map(num => num + 5);
const halves = numbers.map(num => num / 2);
console.log(fiveBonus);
console.log(halves);
//
const friends = ['Tom','Jhon', 'Micheal', 'Oliver'];
const lengths = friends.map(frnd => frnd.length);
const firstLetters = friends.map(friend => friend[0]);
console.log(lengths);
console.log(firstLetters);
//
const Numbers = [1,5,6,4,15];
const result = Numbers.forEach(n => console.log(n));
console.log(result);
//
