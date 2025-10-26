const user ={
    id: 1,
    name: 'Amir',
    job:'Actor'
};
const userJSON = JSON.stringify(user)
console.log(userJSON);
//
const shop = {
    owner : 'Alia',
    address:{
        street: 'xyz',
        city: 'khulna',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
//
const User ={
    name:"Tanjila",
    email:"tanjila@gmail.com",
    address: 'Dhaka, Bangladesh',
    orderHistory:[
        {product:'Laptop', price: 80000},
        {prodect:'Headphone', price: 3000},
        {product:'Mouse', price: 1000}
    ]
};
const jsonData = JSON.stringify(User);
console.log(jsonData);
//
const cart = {
    products : [
        {id: 1, name: 'Keyboard', price:1200},
        {id:2, name: 'Monitor, price: 15000'}
    ],
    totalPrice : 16200,
    userDetails: {
        name: 'Tanjila',
        id: 101,
        contact: '01728387'
    }
};
console.log(JSON.stringify(cart));
//