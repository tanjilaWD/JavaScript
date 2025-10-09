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
const product = {
    name: 'Laptop',
    price: 50000,
    brand: 'Dell'
};
const {name1, ...others1}=product;
console.log(others1);
//
const project ={
    id: 101,
    title:'Web app',
    budget: 3000,
    client:'Tech corp'
    }
    const {title, ...others2} = project
    console.log(others2);
    //

const programmer ={
    name: 'Tanjila',
    language: 'JavaScript',
    experience:5,
    specialty:'Frontend',
    tools:'react'
}
const{language,specialty, ...details1}=programmer;
console.log(details1);
//
const Num = [10,20,3,30,300,3000];
const [first1,second1, ...restArrey]=Num;
console.log(restArrey);
//
function sumRest(a,b, ...rest){
    const total = rest.reduce((sum,n)=> sum + n, 0);
    return total;
}
console.log(sumRest(2,3,5,10,20));
//
function addToArray(arr, ...elements){
    const newArray = [...arr, ...elements];
    return newArray;
}
console.log(addToArray([1,2,3],4,5,6));
