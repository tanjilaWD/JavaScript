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
