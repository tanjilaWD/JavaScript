const friends = ['balam', 'kalam', 'salam','gelam', 'pailam'];
const exist = friends.includes('gelam');
console.log(exist);
//
const friends1 = ['balam', 'kalam', 'salam','gelam', 'pailam'];
const exist1 = friends1.includes('Tanjila');
console.log(exist1);
//
const Friends = ['balam', 'kalam', 'salam','gelam', 'pailam'];
if(Friends.includes('khailam')){
    console.log('Friends');
} else{
    console.log('No food. We are fasting');
}
//includes case-sensitive
const friends10 = ['balam', 'kalam', 'salam','gelam', 'pailam'];
const index = friends10.indexOf('gelam');
console.log(index);
//upadan na thale -1 hobe
const friends100 = ['balam', 'kalam', 'salam','gelam', 'pailam'];
const index1 = friends100.indexOf('Khailam');
console.log(index1);
//
const fruits = ['apple','banana','mango','lici'];
if(fruits.includes('mango')){
    console.log("There are Mangoes")
}else{
    console.log("There are no Mangoes, climb the tree");
}
//
const Name = ['Babul','Alif','Choton'];
const index2 = Name.indexOf('Babul');
console.log(index2);
//
const best_friends = ['Rimon','Rifat','Rajib'];
const Rifat_index = best_friends.indexOf('Rifat');
console.log(Rifat_index);
//
const citys = ['Dhaka','Chittagong','Sylhet','rajshahi'];
if(citys.includes('RajShahi')){
    console.log('There are Rajshahi');
}else{
    console.log('There are no Rajshahi');
}
//
const girls_name = ['Dighi','Megh','Bristy','Borsha'];
if(girls_name.includes('Bristy')){
    console.log('I need umberalla');
}else{
    console.log('No rain no pain');
}
//
const games = ['Football', 'Criket','Volibol'];
if(games.includes('Badminton')){
    console.log('There are Badminton');
}else{
    console.log('There are no Badminton');
}