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
function smallerofTwo(Arr){
    return Arr[0] < Arr[1] ? Arr[0] : Arr[1];
}
console.log(smallerofTwo([20,45,78]));
//
function checkAge(age){
    if(age < 18) return 18;
    else if (age > 45) return 45;
    else return age;
}
console.log(checkAge(12));
console.log(checkAge(60));
console.log(checkAge(30));
//
function sumDivisionBy4(arr){
    let sum = 0;
    for(let num of arr){
        if(num % 4 === 0){
            sum += num;
        }
    }
    return sum;
}
console.log(sumDivisionBy4([2,4,5,7,8,32,45]));
//
function processNumber(num){
    if(num < 20){
        return num * 2;
    }else{
        return num/20
    }
}
console.log(processNumber(10));
console.log(processNumber(40));
//
function sumNegative(arr){
    let sum = 0;
    for(let num of arr){
        if(num < 0){
            sum += num;
        }
    }
    return sum;
}
console.log(sumNegative([5,-3,-10,7,-2]));
//
function sumDivisionBy3(arr){
    let sum = 0;
    for(let num of arr){
        if(num % 3 === 0){
            sum += num;
        }
    }
    return sum;
}
console.log(sumDivisionBy3([3,6,7,11,12]));


//
function shopping(L,S,Su){
    const lPrice = 1200;
    const sPrice = 750;
    const suPrice = 450;

    const totalPrice = lPrice*L + sPrice*S + suPrice*Su;
    return totalPrice;
}
 console.log(shopping(5,2,5)); // output: 9750
