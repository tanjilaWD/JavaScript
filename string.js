const first = 'jaan';
const last = 'pakhi';
const name = first + ' ' + last + ' ' + 'Tanjila';
console.log(name);
//
const a = 10;
const b = 20;
const result = ' The sun of ' + a + ' and ' + b + ' is ' + (a+b);
console.log(result);
//
const Name = 'Tanjila';
const Age = 30;
console.log('Name: ' + Name + ' , Age: ' + Age );
console.log(`Name: ${Name} , Age: ${Age}`);
//
const i = 10;
const j = 20;
const math = `The sum of ${a} and ${b} is ${a+b}`;
console.log(math);
//
const getName = function(){
    return 'Tanjila';
}
const message = `Na bolle Sadia, ase amr ${getName()}!`;
console.log(message);
//
const isAge = 20;
const status = `You are ${isAge >= 18 ? 'Adult' : 'Tanjila'}`;
console.log(status);
//
const user = {name: 'Bithi', age: 21};
const info = `Name: ${user.name}, Age: ${user.age}`;
console.log(info);
//
const fruits = ['Apple','Banana','Mango'];
const second = 'My second favorite fruit is: ${fruits[1]}.';
const list = `My favorite fruits are: ${fruits.join(',')}.`;
console.log(list);
//
const title = 'Welcome';
const body = 'This is  a dynamic template.';
const html = `<div>
<h1>${title}</h1>
<p>${body}</p>
</div>`;
console.log(html);
//
const radius = 5;
const area = `Circle area is ${Math.PI * radius ** 2}.`;
console.log(area);
//
const greet = function(name){
    return `Hello, ${name}`;
};
console.log(greet('Bithi'));
//
const x = 20;
const y = 80;
const results = ' The difference between ' + (x+y) + ' and '+ x + ' is '+ y;
console.log(results)
//
const isName = 'Bithi';
const isAgee = 20;
const isSalary = 50000;
const employee = 'Name: ' + isName + ' Age: ' + isAgee + ' Salary: ' + isSalary ;
console.log(employee);
//
const isFruit = ['Apple', 'Banana', 'Mango'];
const third = `My favorite fruit is: ${isFruit[2]}`;
console.log(third);
//
const A = 50;
const B = 10;
const tem = 'The division of a and b is ' + (A/B);
console.log(tem);
//
const person = {
    firstName: 'Amir',
    lastName: 'Kumar'
}
const fullName = ' Full Name: ' +  person.firstName  +  person.lastName;
console.log(fullName);
//
const animals = ['Cat', 'Dog','Elephant'];
const fev = `My favorite animals are ${animals[0]}  ${animals[1]} ${animals[2]}`;
console.log(fev);
//
const student ={
    name:'Tanjila Khatun',
    age: 20,
    results: [80,78,97]
} 
function showStudentInfo(student){
    const total = student.results[0]+ student.results[1]+ student.results[2];
    const avg = total / 3;

console.log('Student Name:', student.name);
console.log('Age:', student.age);
console.log('Marks:', student.results);
console.log('Average Marks:', avg.toFixed(2));
}
showStudentInfo(student);

