/*
push = add
pop = remove
shift = samne thake ber hobe
unshift = sas a ase age bosbe
 */


/*push */
const numbers = [12,87,98,45]; 
numbers.push(44);
console.log(numbers);
//
numbers.push(11,22,33,44,55,66);
console.log(numbers);
//
const friends = ['Mim','Bithi','Popy'];
friends.push ('Tanjila');;
console.log(friends);


/*pop */
const best_friends = ['Mim','Bithi','Popy'];
best_friends.pop();
console.log(best_friends);
//
const friends1 = ['balam', 'kalam', 'salam', 'gelam'];
const pop1 = friends1.pop();
console.log(pop1);


/* shift */
const friends2 = ['balam', 'kalam', 'salam', 'gelam'];
friends2.shift();
console.log(friends2);

/*unshift */
const teachers = ['Assistant sir', 'class sir', 'PT sir'];
teachers.unshift('Head sir');
console.log(teachers);


//JavaScript push-pop Methods Practice
const add = [10,20,30,40,50]
add.push(60);
console.log(add);
//
const name = ['sajib', 'sagor', 'sakib', 'shole'];
name.push('sumon');
console.log(name);
//
const game = ['aaa','bbb','ccc','ddd'];
game.pop();
console.log(game);
//
const num = [24,36,48,60];
num.unshift(12);
console.log(num);
//
const bookName = ['a','b','c','d','e'];
bookName.shift();
console.log(bookName);
