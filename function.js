function fanOffKor() {
    console.log('bosha thake uthe dara');
    console.log('walk toward the switch');
    console.log('click the switch to off of the fan');
}
fanOffKor();
//
function vatkhao(){
    console.log('hand wash kore asho');
    console.log('bosho');
    console.log('plate e khabar dhabar nao');
    console.log('gopat gopat kore khao');

}
vatkhao();
//
function am_khao(){
    console.log('ei nao am khao');
}
am_khao();
//
function familyMem(){
    console.log('Tanjila');
    console.log('Sathy');
    console.log('Feeha');
}
familyMem();
//
function doubleIt (number){
    const doubled = number * 2;
    console.log(doubled);
}
doubleIt(15);
doubleIt(88);
doubleIt(873);
//
function square (number){
    const borgo = number * number;
    console.log('square of', number, 'is:', borgo);
}
square(4);
square(12);
//
function add (num1,num2){
    const sum = num1 + num2;
    console.log(sum);
}
add(5,71);
//
function addAll(a,b,c,d,e){
    const total = a + b+ c+ d+ e;
    console.log(total);
}
addAll(3,4,5,6,7);
//
function difference (num1, num2){
    const diff = num1 - num2;
    console.log(num1, num2, 'difference is', diff);
}
const fatherAge = 40;
const myAge = 10;
difference(fatherAge,myAge);
//
function addNumbers (a,b){
    return a + b;
}
const result = addNumbers (5,8,9,6);
console.log(result);
//
function addNum (a,b){
    let sum = 0;
    for(const num of arguments){
        sum = sum + num;
    }
    console.log(sum);
}
addNum(5,8,9,6);
//
function SUM(fAge, sAge){
    const totalAge = fAge + sAge;
    console.log(totalAge)
}
SUM(45,15);
//
function calculator(x,y){
    const adD = x * y;
    console.log(adD);
}
calculator(20,15);
//
function sub (a,b,c){
    const marks = a + b + c;
    console.log(marks);
}
sub(60,70,80);
//
function calculateAge(birthYear){
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    return age;
}
console.log('Your age is:', calculateAge(2004), 'years');
//
function tenTimes(number){
    const result = number * 10;
    return result;
}
const output = tenTimes(5);
console.log(output);
//
function add(price1, price2){
    const total = price1 + price2;
    return total;
}
const bill = add(5,80);
console.log(bill);
//
const potato = 35;
const onion = 62;
const shirt = 500;
const pant = 1250;
function add(price1,price2){
    return price1 + price2;
}
const bill1 = add(potato, onion);
const bill2 = add(shirt, pant);
const final = add(bill1, bill2);
console.log(final);
//
function doMath(num1,num2){
    const sum = num1 + num2;
    const diff = num1 = num2;
    const multiply = sum * diff;
    const result1 = multiply / 2;
    return result1;
}
const result1 = doMath(10,5);
console.log(result1);
//
function isEven(num){
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(5));
console.log(isEven(110));
//
function isOdd(num){
    if(num % 2 ===1){
        return true;
    }
    return false;
}
console.log(isOdd(10));
console.log(isOdd(7));
//
function ten(Num){
    if(Num > 10){
        return true;
    }
    return false;
}
console.log(ten(60));
//
function checkDivisibleBy13(num){
    if (num % 13 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(checkDivisibleBy13(26));
console.log(checkDivisibleBy13(30));
//
function calculateBill(rice, curry, drinks){
    return rice + curry + drinks;
}
console.log(calculateBill(50,120,30));
//
function checkVotingEligibility(age){
    if(age >= 18){
        return 'Eligible for Voting';
    }else{
        return 'Not Eligible';
    }
}
console.log(checkVotingEligibility(21));
//
function getStringLength(str){
    return str.length;
}
console.log(getStringLength('Hello'));
//
function calculateAverage(a,b,c){
    return(a + b+ c) / 3;
}
console.log(calculateAverage(10,20,30));
//
function checkNegative(num){
    if(num < 0){
        return num * -1;
    }else{
        return num;
    }
}
console.log(checkNegative(-5));
console.log(checkNegative(20));
//
function evenSizedString(str){
    const size = str.length;
    console.log(str, size);
}
evenSizedString('Dhaka');
//
function evenSizedString1(str){
    const size = str.length;
    if(size % 2 === 0){
        console.log('Even Size');
    }else{
        console.log('Odd Size');
    }
}
evenSizedString1('Dhaka');
//
function evenSizedString0(str){
    const size = str.length;
    if(size % 2 === 0){
        return true;
    }else{
        return false;
    }
}
const isEven0 = evenSizedString0('Human');
console.log(isEven0);
//
function dobuleOrTriple(num, doDouble){
    if(doDouble === true){
        const result = num * 2;
        return result;
    } else{
        const result = num * 3;
        return result;
    }
}
console.log(dobuleOrTriple(5, true));
console.log(dobuleOrTriple(5,false));
//
function numberOfElement(nums){
    const len = nums.length;
    return len;
}
const len = numberOfElement([12,45,78,45,121245,4,5]);
console.log(len);