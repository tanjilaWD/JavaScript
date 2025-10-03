function oddAverage(numbers){
    const odds = [];
    for (const number of numbers){
        if(number % 2 === 1){
            odds.push(number);
        }
    }
    let sum = 0;
    for(const number of odds){
        sum += number;
    }
    console.log(sum);
}
const numbers = [42,13,58,65,81,96,7];
const avg = oddAverage(numbers);
//
function OddAverage(numbers){
    const Odds =[];
    for(const number of numbers){
        if(number % 2 === 1){
            Odds.push(number);
        }
    }
    let sum = 0;
    for(const number of Odds){
        sum += number;
    }
    const count = Odds.length;
    const avg = sum / count;
    return avg;
}
const numbers1 = [42,13,58,65,81,96,7];
const avg1 = OddAverage(numbers);
console.log('Average of the odd numbers is:',avg);
//
const Numbers = [7];
const Avg = oddAverage(Numbers);
console.log('Average of the odd numbers is:', Avg);
//
function OddAverage(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 !== 0){
            odds.push(number);
        }
    }
    if(odds.length === 0){
        return 0;
    }
    let sum = 0;
    for (const number of odds){
        sum += number;
    }
    const avg = sum / odds.length;
    return avg;
}
const numbers11 = [2,4,6,8,10];
const avg11 = OddAverage(numbers11);
console.log('Average of the odd numbers is:', avg11);
//
function oddAverage(arr){
    const odds = arr.filter(num => num % 2 !== 0);
    if(odds.length === 0){
        return "No odd numbers found";
    }
    const sum = odds.reduce((acc,val) => acc + val, 0);
    return(sum/odds.length).toFixed(2);
}
//
function multiplyoddByTwo(arr){
    const odds = arr.filter(num => num % 2 !== 0);
    return odds.map(num=> num * 2);
}
//
function checkodd(arr){
    const odds = arr.filter(num => num % 2 !== 0);
    if(odds.length === 0){
        return 'No odd numbers found';
    }else{
        return 'Odd numbers found';
    }
}
//
const students = ['abul', 'babul','cabul','abul','babul','dabul'];
// const numbers = [1,5,61,5,87,7,5,81,61];
function noDuplicate(array){
    const unique =  [ ];
    for(const item of array){
        if(unique.includes(item)=== false){
            unique.push(item);
        }
    }
    return unique;
}
const uniqueArray = noDuplicate(students);
console.log(uniqueArray);
//
const numBers =[1,5,61,5,87,7,5,81,61];
function NoDuplicate(Array){
    const unique= [ ];
    for(const item of Array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}const uniqueArray1 = NoDuplicate(numBers);
console.log(uniqueArray1);
//
let a = 5;
let b = 7;
console.log(a,b);
const temp = a;
a = b ;
b = temp;
console.log(a,b);