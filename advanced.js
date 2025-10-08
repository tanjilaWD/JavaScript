// const actor ={
//     name: 'Tanjila',
//     age: 20,
//     phone:'01934129995',
//     money: 123334
// }

// const name = actor.name;
// const age = actor.age;
// const phone = actor.phone;
// const money = actor.money;
// console.log(name,age,phone,money);
//
// const {name,age,money,phone} = actor;
// console.log(name);
// console.log(age);
// console.log(money);
// console.log(phone);
//
// const {name, age:boyos, money,phone}= actor;
// console.log(name);
// console.log(boyos);
//
const book ={ title:'1984',author:'Tanjila'};
const {title:bookTitle, author:bookAuthor} = book;
console.log(bookTitle);
console.log(bookAuthor);
//
const numbers = [45,99];
const [first,second] = numbers;
console.log(first);
console.log(second);
//
function doubleThem(a,b){
    return[a*2,b*2];
}
const [prothom,ditiyo]=doubleThem(6,9);
console.log(prothom,ditiyo);
//
const person ={name1:'Feeha', age: 3};
const{name1,phone1 = 'N/A'} = person;
console.log(name1);
console.log(phone1);
//
function introduce({name2,age2}){
  console.log(`Name:${name2}, Age:${age2}`);
}
const user = {name2:'Arohi', age2:22, hobby:'Reading'};
introduce(user);
//
function sum0([a,b]){
    return a+b;
}
console.log(sum0([5,10]));
//
const numberss = [1,2,3,4,5,];
const [,secondd,fourth] = numberss;
console.log(secondd);
console.log(fourth);
//
const product = {name:'Laptop',price:50000,brand:'Dell'};
const{brand}=product;
console.log(brand);
//
const Item ={
    name:'Mobile',
    price:20000,
    phone:'Sumsung'
}
const phone = Item.phone;
const price = Item.price;
console.log(phone,price);

