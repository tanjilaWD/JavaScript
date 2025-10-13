const numbers = [4,5,7,1,2,66];
let sum = 0;
for(const num of numbers){
    sum = sum + num;
}
console.log(sum);
//
// numbers.reduce((accumulator,currentValue)=> doSomeWork, initialValue)

//
const numberss = [4,5,7,1,2,66];
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total);
//
const Numbers = [32,34,73,13,22,5];
const totall = Numbers.reduce((p , c) => p + c, 0);
console.log(totall);
//
const products = [
    {id:1, name: 'lenovo', price:65000},
    {id:2, name: 'dell', price: 45000},
    {id:3, name:'hp', price:40000},
    {id:4, name:'mac', price: 165000},
];
const names = products.map(p => p.name);
console.log(names);

const expensive = products.filter(p => p.price > 50000);
console.log(expensive);

const affordable = products.find(p => p.price < 50000);
console.log(affordable);

const totalll = products.reduce((accumolator, current) => accumolator + current.price, 0);
console.log(totalll);
//
const nums = [5,10,15,20,25];
const totalValue = nums.reduce((accumolator,  current)=> accumolator + current, 0);
console.log(totalValue);
//
const owner = [
    {name: 'shampoo', price: 100},
    {name: 'soap', price: 50},
    {name: 'toothpaste', price: 75}
];
const totalPrice = owner.reduce((accumolator, current)=> accumolator + current.price, 0);
console.log(totalPrice);
//
const product = [
    {name:'Pen', price:5},
    {name: 'Book', price: 50},
    {name: 'Bag', price:100}
];
const productPrice = product.reduce((accumolator, current)=> accumolator + current.price,0);
console.log(productPrice);
//
const numbers1 =[1,2,3,4,5];
const add = numbers1.reduce((accumolator,current)=> accumolator * current, 1);
console.log(add);
//
const numbers2 =[10,20,30,40,50];
const maxValue = numbers2.reduce((max, current)=> current > max ? current : max);
console.log(maxValue);
//
const numbers3 = [100,200,300];
const summ = numbers3.reduce((accumolator,current)=> accumolator + current, 50);
console.log('Sumation =', summ);
