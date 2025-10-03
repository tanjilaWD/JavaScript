/*
function add(num1,num2){
    const result = num1 + num2;
    return result;
}
const sum = add(5,7);
console.log(sum);
*/

/*
function add(num1, num2){
    const result = num1 + num2;
    console.log(num1,num2,result);
    return result;
}
const sum = add(5);
console.log(sum);
*/

/*
function add(num1,num2 = 0){
    const result = num1 + num2;
    console.log(num1,num2,result);
    return result;
}
const sum = add(5);
console.log(sum);
*/

function add(num1 = 0, num2 = 0){
    const result = num1 + num2;
    console.log(num1,num2,result);
    return result;
}
const sum = add();
console.log(sum);
const total = add(17,19);
console.log(total);