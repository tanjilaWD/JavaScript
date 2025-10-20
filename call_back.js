function greeting(greatingHandler){
    console.log(greatingHandler);
}
function morningGreet(){
    console.log('Good morning');
}
greeting(morningGreet);
//
function greeting1(greatingHandler1){
    greatingHandler1()
}
function morningGreet1(){
    console.log('good morning');
}
greeting1(morningGreet1);
//
function calculate(a, b, callback){
    const result = a + b;
    callback(result);
}
function printResult(value){
    console.log('Result is:', value);
}
calculate(5,10,printResult);
//
const numbers = [1,2,3,4,5];
const doubleNumbers = numbers.map(num => num * 2);
console.log(doubleNumbers);
//
const numbers1 = [1,2,3,4,5];
const result1 = numbers1.map(function(num){
    return num * 2;
});
console.log(result1);