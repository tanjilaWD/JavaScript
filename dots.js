const max = Math.max(5,23,45,1,89,34);
console.log(max);
//
// const numbers = [3,5,2,45,5,43,90,32,15];
// const arryMax = Math.max(numbers);
// console.log(arryMax);
//
const numbers = [3,5,2,45,5,43,90,32,15];
const arryMax = Math.max(...numbers);
console.log(arryMax);
//
const friends = [4,5,87,9];
const boundhu = friends;
boundhu.push(12);
console.log(boundhu);
console.log(friends);
//
const friendss = [4,5,87,9];
const dosto = [...friendss];
console.log(dosto);
friendss.push(100);
console.log(dosto);
console.log(friendss);
//
const sonkha = [...friendss, 9999];
console.log(sonkha);
//
const fruits = ['Apple','Banana'];
const moreFruits = ['Mango',...fruits, 'Orange'];
console.log(moreFruits);
//
const array1 = [1,2];
const array2 = [3,4];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);
//
const person = {name: 'Amit', age:30};
const clonePerson = {...person};
console.log(clonePerson);
//
const student = {name:'Rafi'};
const updateStudent = {...student, age:22,Roll:2335};
console.log(updateStudent);
//
const technologies = ['condition','array','loop'];
const newArray=['variable',...technologies];
console.log(newArray);
//
const fruitss = ['Apple','Banana','Mango'];
const myFruits = [...fruitss,'papaya','orange'];
console.log(myFruits);
//
const frontEnd = ['JavaScript'];
const backEnd = ['Node.js'];
const database = ['MongoDB'];
const fullstack = [...frontEnd,...backEnd,...database];
console.log(fullstack);
//
const website = {name:'Mysite', type:'e-commerce',status:'active'};
const updateWebsite = {...website, them:'dark'};
console.log(updateWebsite);
//
const young = {name:'Arif',age:30, country:'B Baria'};
const{country,...youngCopy}=young;
console.log(youngCopy);
//
const car = {make:'Toyota', model:'Corolla', year:2020};
const updateCar = {...car, year:2032};
console.log(updateCar);