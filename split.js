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
//
const str0 = 'javaScript Essentials';
const extractedPart = str0.substring(4,8);
console.log(extractedPart);
//
const frnd = 'Raju,Rana, Hasan,Kabir,Mahi';
const frndArr = frnd.split(',');
console.log(frndArr);
//
const friendString = frndArr.join(',');
console.log(friendString);
//
const text = 'function if else while';
const textArray = text.split(' ');
console.log(textArray);
//
const language = ["JavaScript","Python","Java"];
const languagewithSemi = language.map(lang => lang + ';');
console.log('Language with semicolon:', languagewithSemi);
//
const loops = 'for,while,for-in,for-of,do-while';
const loopArray = loops.split(',');
console.log(loopArray);
//
const messyString = ' console log debug';
const cleand = messyString.trim();
console.log(cleand);
//
const st1 = 'push';
const st2 = 'pop';
const st3 = 'shift';
const st4 = 'unshift';
const combined = st1.concat('', st2,'' ,st3,'',st4);
console.log(combined);
//
const phrase = 'Hallo JavaScript Developers';
const extracted = phrase.substring(6,16);
console.log(extracted);
//
const codeStr = 'code more learn more';
const beforeLearn = codeStr.substring(0,10);
const afterLearn = codeStr.substring(15);
const removeLearn = beforeLearn + afterLearn;
console.log(removeLearn);