// function sum(num1, num2){
//     const total = num1 + num2;
//     return total;
// }
// const result = sum(5,7);
// console.log(result);
//
// const Result = sum (5, '7');
// console.log(Result);
//
// function multiply(Num1, Num2){
//     const mult = Num1 * Num2;
//     return mult;
// }
// const result0 = multiply(5,'seven');
// console.log(result0);
//
// const result1 = multiply([5,1], [7])
// console.log(result1);
//
// const reSult = multiply(5 + 7);
// console.log(reSult);
//
function multiply (nuM1, nuM2){
    if(typeof nuM1 !== 'number' || typeof nuM2 !=='number'){
        return 'please provide a number';
    }
    const mult = nuM1 * nuM2;
    return mult; 
}
const result = multiply(5,7);
console.log(result);
//
// function fullName(first,second){
//     const full = first + ' ' + second;
//     return full;
// }
// const full = fullName('Rahan','Sohan');
// console.log(full);
//
function fullName(first,second){
    if(typeof first !== 'string'){
        return 'First name should be a String';
    } else if(typeof second !== 'string'){
        return 'Second name should be a String';
    }
    const full = first + ' '+ second;
    return full;
}
const full = fullName('Rohan', 5);
console.log(full);
//
// function getPrice(product){
//     const price = product.price;
//     return price;
// }
// const price = getPrice({name: 'xyz', price: 35, color: 'Blue'});
// console.log(price);
//

function getPrice(product){
    if(typeof product !== 'object'){
        return 'please provide an object';
    }
    const price = product.price;
    return price;
}
const price = getPrice(35);
console.log(price);
//
// function getSecond(numbers){
//     console.log(typeof numbers);
//     const second = numbers[1];
//     return second;
// }
// const second = getSecond([1,25,67]);
// console.log(second);
//
function getSecond(numbers){
    if(Array.isArray(numbers) == false){
        return 'please provide an array';
    }
    const second = numbers[1];
    return second;
}
const second = getSecond(60);
console.log(second);
//
