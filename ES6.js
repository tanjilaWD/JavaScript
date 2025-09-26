const money = 25;
const rich = money + 25;
console.log(rich);
//
let count = 0;
count = count + 10;
console.log(count);
//
const numbers = [23,4,23,12,56];
numbers[1] = 55;
console.log(numbers);
//
const number = [23,4,23,12,56];
number[1] = 55;
number.push(8,9,65);
console.log(number);
//
const student ={
    name: 'Tanjila',
    class: 12,
}
student.name = 'Bithi';
console.log(student);
//
function add (num1, num2){
    const result = num1 + num2;
    return result;
}
const sum = add(5,7);
console.log(sum);
//
function Add(num1, num2){
    const result = num1 + num2;
    console.log(num1,num2,result);
    return result;
}
const Sum = Add(5);
console.log(Sum);
//
function ADD(num1, num2 = 0){
    const result = num1 + num2;
    console.log(num1,num2,result);
    return result;
}
const SUM = ADD(5);
console.log(SUM);
//
function i(num1 = 0, num2 = 0){
    const result = num1 + num2;
    console.log(num1, num2,result);
    return result;
}
const s = i();
console.log(s);
const total = i(17,19);
console.log(total);
//
