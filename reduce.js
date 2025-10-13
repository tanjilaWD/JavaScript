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