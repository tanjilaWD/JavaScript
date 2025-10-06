function add(a,b){
    const result = a + b;
    return result;
}
const sum = add(5,90);
console.log(sum);
//
function Add(a,b){
    return a + b;
}
const Sum = Add(3,90);
console.log(Sum);
//
const add3 = (a,b) => a + b;
const SUM = add3(5,30);
console.log(SUM);
//
const add4 = (num1,num2,num3,num4) => num1+num2+num3+num4;
const sum4 = add4(5,30,4,6);
console.log(sum4);
//
const student = {
    name: 'Tanjila',
    age: 20
}
const getName = person => person.name;
const getAge = (person) => person.age;
const age = getAge(student);
console.log(age);
//
const getThird = numbers => numbers[3];
const third = getThird([5,34,6,26,6]);
console.log(third);
//
const getPi = () => Math.PI;
console.log(getPi());
//
const doMath = (x,y,z) =>{
    const summ = x + y + z;
    const mult = x*y*z;
    const result = summ + mult;
    return result;
}
const result = doMath(3,5,8);
console.log(result);
//
const Person ={
    name:'Bithi',
    greetRegular: function(){
        console.log('Hello' + this.name);
    },
    greetArrow: ()=>{
        console.log('Hello,' + this.name);
    }
};
Person.greetRegular();
Person.greetArrow();
//
const greet = (name = 'Guest')=> `Hello, ${name}!`;
console.log(greet());
console.log(greet('Tanjila'));
//
const getObject = ()=>({ key:'value'});
console.log(getObject());
//
function getFirstElement(arr){
    return arr[0];
}
console.log(getFirstElement([10,20,30]));
//
function multiplyThreeNumbers(a,b,c){
    return a*b*c;
}
console.log(multiplyThreeNumbers(2,3,4));
//
const getUnkown = () => 'unknown';
console.log(getUnkown());
//
const perSon ={
    name:'Tanjila',
    money: 100
};
const divideMoney = (obj)=> obj.money/5;
console.log(divideMoney(perSon));
//
const sumFirstLast = (arr) => arr[0] + arr[arr.length -1];
console.log(sumFirstLast([10,20,30,40]));
//
const addNumbers =(a = 10, b = 5)=> a+b;
console.log(addNumbers(2,3));
console.log(addNumbers(2));
console.log(addNumbers());