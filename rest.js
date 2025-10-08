const [first,second,...rest]=[10,20,30,40,50];
console.log(first);
console.log(second);
console.log(rest);
//
const person = {name:'Tanjila',age:25, city:'Dhaka', country:'Bangladesh'};
const {name, city,...details}= person;
console.log(name);
console.log(city);
console.log(details);
//
function multiply(multiplier, ...numbers){
    console.log(numbers);
}
multiply(2,1,2,3);
multiply(3,4,5,6);
//
