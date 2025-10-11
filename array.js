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
// const friends = ['Tom','Jhon', 'Micheal', 'Oliver'];
// const lengths = friends.map(frnd => frnd.length);
// const firstLetters = friends.map(friend => friend[0]);
// console.log(lengths);
// console.log(firstLetters);
//
const Numbers = [1,5,6,4,15];
const result = Numbers.forEach(n => console.log(n));
console.log(result);
//
// const players = [75,65,67,71,55,59];
// const selected = players.filter(p => p>70);
// console.log(selected);
//
const friends = ['tom', 'john','micheal','oliver','tim','joshna'];
const oldFriends = friends.filter(friend => friend.length > 4 );
console.log(oldFriends);
//
const players = [75,65,67,60,71,55,59];
const selected = players.find (player => player>80);
console.log(selected);
//
const numberss = [10,25,30,50];
const index = numberss.findIndex(num => num > 27);
console.log(index);
//
const Students =[
    {name:'John',age:20},
    {name:'Adam',age:22},
    {name:'Tom',age:19},
    {name:'Lucy',age:21},
];
const StudentInfo = Students.map((Student,index,array)=>{
    return `${Student.name},${index+1} of ${array.length} Students.`;
});
console.log(StudentInfo);
//
let price = [30,45,20,60,10];
let increasedPrice = price.map(price => price + 13);
console.log(increasedPrice);
//
let names = ['Messi','Maradona','Pele','Zidne','Ronaldo'];
let longNames = names.filter(name => name.length > 5);
console.log(longNames);
//
let numbersss = [10,20,25,30,35];
let firstOver20 = numbersss.find(num => num>20);
console.log(firstOver20);
//
let heights = [65,70,68,72,68,73];
let tallPeople = heights.filter(height => height > 69);
console.log(tallPeople);
//
let nums = [7,10,15,20,25,30];
let dividedBy3 = nums.map(n=> n /3);
console.log(dividedBy3);
//
let frd = ['Leoardo','Brad Pitt','Kate Winslet','Audrey Hepburn'];
let upperCaseFrd = frd.map(frnd => frnd.toUpperCase());
console.log(upperCaseFrd);