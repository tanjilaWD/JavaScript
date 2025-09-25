function sumOfNumbers(){

}
const result = sumOfNumbers();
console.log(result);
//
function sumOfNumber(number){
    console.log(number);
}
const Result = sumOfNumber([12,45,6,8,14]);
console.log(Result);
//
function sumOfNumBers(NumBers){
    let Sum = 0;
    for(const number of NumBers){
        Sum = Sum + number;
        console.log(Sum);
    }
}
const nums = [54,62,12,6];
const Sum = sumOfNumBers(nums);
//
function SumOfNumbers(Number){
    let SUM = 0;
    for(const number of Number){
        SUM = SUM + Number;
    }
    return SUM;
}
const Nums = [54,62,12,6];
const total = SumOfNumbers(Nums);
console.log('Sum of Numbers is', total);
//
function evenNumbersSum (numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 == 0){
            sum = sum + number;
        }
    }
    return sum;
}
const nums1 = [54,13,1,6];
const total1 = evenNumbersSum(nums1);
console.log('sum of even numbers is', total1);
//
function sumOddNumbers(arr){
    let sum = 0;
    for(let num of arr){
        if(num % 2!== 0){
            sum += num;
        }
    }
    return sum;
}
console.log(sumOddNumbers([5,15,8,7]));
//

