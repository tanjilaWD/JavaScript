let x = 5;
let y = x;
console.log(x,y);
y = 7;
console.log(x,y);
//
let p = {
    job: 'web developer'
};
let q = p;
console.log(p,q);
//
let a = {
    job: 'web developer'
};
let b = a;
console.log(a,b);
b ={
job:'backend developer'
 };
 //
 let i = {
    job:'web developer'
 };
 let j = i;
 console.log(i,j);
 j.job = 'front-end developer';
 console.log(i,j);
 //
 function changeValue(num){
    num = 20;
    console.log('Inside function:', num);
 }
 let z = 10;
 console.log('Before function call:',z);
 changeValue(x);
 console.log('After function call:', x);
 //
 function updateJob (person){
    person.job = 'designer';
    console.log('Inside function:',person);
 }
 let employee ={job: 'developer'};
 console.log('Before function call:', employee);
 updateJob(employee);
 console.log('After function call:', employee);
 //
 let Num = 15;
 let copy = Num;
 copy = 25;
 console.log('Num', Num);
 console.log('copy', copy);
 //
 let arr =[1,2,3];
 let copyarr = arr;
 copyarr.push(88);
 console.log('arr', arr);
 console.log('copyarr', copyarr);
 //
 let language = {
    name: 'JS',
    age: 30
 };
 let newVersion = {...language};
 newVersion.location = 'Browser';;
 console.log('language', language);
 console.log('newVersion', newVersion);