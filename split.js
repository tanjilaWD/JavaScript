// const drink = '  water';
// const liquid = 'water';
// if(drink === liquid){
//     console.log('pani hani dami jani');
// }else{
//     console.log('somudre pani dekhte valo khaite kalo');
// }

//
/*
const drink = '  water';
const liquid = 'water';
console.log(drink.trim());
console.log(liquid.trim());
*/
//
const drink = ' water';
const liquid = 'water';
if(drink.trim() === liquid.trim()){
    console.log('pani hani dami jani');
}else{
    console.log('somudre pani dekhte vlo khaite kalo');
}
//
const address = 'andorKilla';
const part = address.slice(2,5);
console.log(part);

const part2 = address.slice(5);
console.log(part2);
//
const sentence = 'i am a good and hardworking person';
console.log(sentence.split(' '));
//
const friendStr = 'Rahim,kahim,dahim,lahim,fahim,sahim';
const friends = friendStr.split(',');
console.log(friends);
//
const realFriend = ['Rahim','kahim','dahim','lahim','fahim','sahim'];
console.log(realFriend.join('|'));
//
const first = 'Abid';
const middle = 'Khan';
const last = 'Islam';
const name = first + middle + last;
console.log(name);
//
const str1 = 'Hello';
const str2 = 'World';
const result = str1.concat(' ', str2);
console.log(result);
//
const result2 = 'I'.concat(' love ', 'JavaScript ');
console.log(result2);