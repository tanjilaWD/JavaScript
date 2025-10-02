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
