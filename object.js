const computer = {
    brand: 'Lenovo',
    price: 47000,
    processor: 'intel',
    ssd: '512gb'
};
const keys = Object.keys(computer);
console.log(keys);

const values = Object.values(computer);
console.log(values);
//
const profile = {
    name: 'Tanjila',
    age: 21,
    city:'Dhaka'
};
const profileKeys = Object.keys(profile);
const hasName = profileKeys.includes('name');
console.log(hasName);

if('email' in profile){
    console.log('email exists');
}else{
    console.log('No email. No spam');
}

if(profile.hasOwnProperty('email')){
    console.log('Email niye boroloki dekhai');
}else{
    console.log('Email chara jibon');
}

if(profile.city === 'Dhaka'){
    console.log('Jam er sohor Dhaka')
}else{
    console.log('Aram sob gram e');
}
//
const person1 = {
    name1: 'Bithi',
    age1: '20',
    country1: 'Bangladesh'
};
const entries = Object.entries(person1);
console.log(entries);
//
const profile1 = {
    name: 'Tanjila',
    age: 22,
    city: 'Dhaka'
};
for (const key in profile){
    const value = profile[key];
    console.log(key,value);
}

const profile2 = {name:'Tanjila', age: 22, city: 'Dhaka'};
const keys2 = Object.keys(profile);
for(const key of keys2){
    console.log(key, profile2[key]);
}
//
const Books = {
    Name: 'abc',
    writer: 'xyz',
    price: 200
};
console.log(Books);
//
const article = {
    title: 'Learning JS',
    category: 'Programinng'
};
if(article.hasOwnProperty('author')){
    console.log('There is another property.');
}else{
    console.log('There is no author property');
}
//
const laptop1 ={
    brand: 'Dell',
    model: 'Inspiron',
    price: 45000
};
for(const key in laptop1){
    const Value = laptop1[key];
    console.log(key,Value);
}
//
const phone ={
    brand: 'Samsung',
    model: 'Galaxy S21',
    price: 85000
};
const keys3 = Object.keys(phone);
for (const key of keys3){
    console.log(key, phone[key]);
};
//
const bike = {
    brand: 'Hero',
    price: 120000,
    model: 'Splendor'
};
const values3 = Object.values(bike);
console.log(values3);
//
const perSon = {
    name: 'Tanjila',
    age:'15',
    country: 'Bangladesh'
};
delete perSon.age;
console.log(perSon);
//
const adminUser = {
    user: 'admin',
    email: 'admin@11.com',
    role: 'superadmin'
};
Object.freeze(adminUser);
//attempt to modify the object
adminUser.role = 'user';
adminUser.password = '123456';
delete adminUser.email;
console.log(adminUser);
//
const user = {
    username: "johndoe",
    email: "john@gmail.com",
    password:'dkfmkvfk'
};
Object.seal(user);
//Attempt to modify the object
user.password = 'newpassword'; //Allowed
user.age = 30; // adding new property is not allowed
delete user.email // deleting property is not allowed
console.log(user);


//
const headphone = {
    brand: 'Sony',
    price: 3000,
    color: 'red'
};
Object.freeze(headphone);
 headphone.model = 'abc';
 console.log(headphone);
 //
 const player = {
    name: 'Messi',
    goals: 800,
    club: 'Inter Miami'
 };
 Object.freeze(player);
 player.runs = 400;
 console.log(player);
 //
 const books = {
    title: 'Harry Potter',
    author: 'JK Rowling',
    pages: 500
 };
 Object.seal(books);
 books.pages = 600;
 books.color = 'red';
 console.log(books);
 //
 const gadget = {
    name: 'iPhone',
    price: 120000,
    color: 'Black'
 };
 delete gadget.price;
 console.log(gadget);
 //
 const animal = {
    name: 'Tiger',
    location: 'Sundarban'
 };
 Object.freeze(animal);
 animal.location = 'xyz';
 console.log(animal);
 //
 const food = {
    name: 'Pizza',
    price: 500,
    size: 'Large'
 }
 Object.seal(food);
 food.price = 600;
 food.pis = 3;
 console.log(food);