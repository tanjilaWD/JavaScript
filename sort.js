const friends = ['Zara','Bob','Anna','Chris'];
friends.sort();
console.log(friends);
//
const numbers = [3,5,4,2,7,1,6,9];
numbers.sort();
console.log(numbers);

//
// const number = [30,5,100,12];
// number.sort();
// console.log(number);
//
const names = ['litu','asif','jamal','abidur','borhan'];
names.sort();
console.log(names);
//
const number = [30,5,100,12];
number.sort((a,b)=> a - b);
console.log(number);
//
const num = [30,5,100,12];
num.sort((a,b)=> b-a);
console.log(num);
//
const friend =[
  {name:'Zara', age:25},
  {name:'Bob', age: 20},
  {name:'Anna', age: 30}
];
friend.sort((a,b) => a.age - b.age);
console.log(friend);
//
const arr = [50,12,25,8,15];
arr.sort((a,b)=> a-b);
console.log(arr);
//
const i = [13,2,45,9,6];
i.sort((a,b) => b - a);
console.log(i);
//
const f = [
    {name:'Sara', age: 22},
    {name:'Ali', age: 29},
    {name:'Tariq', age:35}
];
f.sort((a,b)=> a.age - b.age);
console.log(f);
//
const Name = ['Tanjila','Feeha','Ali'];
Name.sort();
console.log(Name);