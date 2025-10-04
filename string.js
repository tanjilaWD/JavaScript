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
