if(true){
    let message = 'This is inside an if block';
    console.log(message);
}
//
for(let i = 0; i < 3; i++){
    let loopMessage = 'This is inside a for loop block';
    console.log(loopMessage);
}
//
let count = 0;
while (count < 5){
    console.log(count);
    count++;
}
//
function add(a,b){
    const sum = a + b;
    return sum;
}
//
const smart = true;
if(smart){
    let message = 'prochur gorom';
    console.log('Batas dao');
}
//
// function add(a,b){
//     const total = a + b;
//     console.log(a,b);
//     return total;
// }
// console.log(a,b);
// add(5,7);
//
let name = 'Alex';
function sayHello(){
    console.log('Hello,' + name);
}
sayHello();
//
function outerFunction(){
    let outerVar = 'I am from outer function';
    function innerFunction(){
        console.log(outerVar);
    }
    innerFunction();
}
outerFunction();
//
let nam = 'John';
function first(){
    let nam = 'Tanjila';
    function second(){
        console.log(nam);
    }
    second();
}
first();