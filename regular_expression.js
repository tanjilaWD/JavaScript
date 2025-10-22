const sentence = 'I have an apple.';
const pattern = /apple/ ;
console.log(pattern.test(sentence));
//
const Sentence = 'I have an apple and another apple.';
const newSentenct =  Sentence.replace(/apple/g, 'banana');
console.log(newSentenct);
//
const email = 'example@mail.com';
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailPattern.test(email));
//
const phone = '01934568329';
const phonePattern = /^01[3-9]\d{8}$/;
console.log(phonePattern.test(phone));
//
const sen = 'I bought an orange';
const SenRep = sen.replace(/orange/g, 'grape');
console.log(SenRep); 
//
const text = 'I like to have apple and banana';
const pattern1 = /ana/ ;
console.log (pattern1.test(text));
//
const i = 'I am eating apple. apple is good. apple helps me a lot.';
const newi = i.replace(/apple/g, 'js');
console.log(newi);