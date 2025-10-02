function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
const tanjilaToFeet = inchToFeet(75);
console.log(tanjilaToFeet);
//
function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + 'ft' + inchRemaining + 'inch.';
    return result;
}
const tanjilaHeight = inchToFeet2(75);
console.log(tanjilaHeight);
//
function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}
console.log(mileToKilometer(10));
//
function mileToYard(mile){
    return mile * 1760;
}
console.log(mileToYard(13));
//
function kwToCalorie(kwh){
    return kwh * 860;
}
console.log(kwToCalorie(5));
//
function hourToSec(hour){
       return hour * 60* 60;
}
console.log(hourToSec(2));
//
function cmToMeter(cm){
    return cm/100;
}
console.log(cmToMeter(250));
//
function inchToCm(inch){
    return inch* 2.54;
}
console.log(inchToCm(12));
//
function poundToKm(pound){
    return pound * 0.453;
}
console.log(poundToKm(10));
//
function yardToMeter(yard){
    return yard * 0.91;
}
console.log(yardToMeter(5));
//
function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }else{
        return false;
    }
}
const isLipi1 = isLeapYear(2043);
const isLipi2 = isLeapYear(2052);
console.log(isLipi1);
console.log(isLipi2);
//
function isLeapYear2(year){
    if(year % 400 === 0){
        return true;
    }
    else if (year % 400 !== 0 && year % 100 === 0){
        return false;
    }
}
//
function isLeapYear3(year){
    if (year % 400 === 0){
        return true;
    }
    else if (year % 100 === 0){
        return false;
    }
    else if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isLip1 = isLeapYear3(2100);
const isLip2 = isLeapYear3(2400);
const isLip3 = isLeapYear3(1900);
const isLip4 = isLeapYear3(2052);
console.log(isLip1,isLip2,isLip3,isLip4);
//
function calculateTax(income){
    if(income <= 50000){
        return income * 0.10;
    }
    else if(income <= 100000){
        return income * 0.20;
    }
    else if(income <= 200000){
        return income * 0.30;
    }
    else{
        return income * 0.40;
    }
}
console.log(calculateTax(450000));
console.log(calculateTax(12000));
console.log(calculateTax(240000));
//
function oddAverage(numbers){
     for(const number of numbers){
        console.log(number);
     }
}
const nums = [12,13,65,11,24,31];
oddAverage(nums);
//
function oddAveragee(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            odds.push(number);
        }
    }
}