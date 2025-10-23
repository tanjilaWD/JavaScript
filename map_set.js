const mySet = new Set([1,2,3,4,5]);
console.log(mySet);
//
const numbers = [1,2,3,4,4,5];
const uniqueNumbers = new Set(numbers);
console.log(uniqueNumbers);
//
const numbers0 = [1,2,3,4,4,5];
const uniqueArray = [... new Set(numbers)];
console.log(uniqueArray);
//
const myset = new Set();
myset.add(10);
myset.add(20);
myset.add(10);
myset.add(30);
console.log(myset);

console.log(myset.has(20));

myset.delete(10);
console.log(myset);
//
const myMap = new Map();
myMap.set('name','Tanjila');
myMap.set('age', 20);
console.log(myMap);
//
const  num = [1,2,2,3,4,4,5];
const numdup = new Set(num);
console.log(numdup);
//
