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
const weather = {
    city: 'Dhaka',
    temperature: 29,
    forecst:[
        {day: "Monday", temp:30},
        {day: "Monday", temp:31},
        {day: "Monday", temp:28},
        {day: "Monday", temp:29},
        {day: "Monday", temp:27},
        {day: "Monday", temp:30},
        {day: "Monday", temp:32},
    ]
};
console.log(JSON.stringify(weather));
//
const movie ={
    title: "Inception",
    releaseYear:['Lenovo Dicaprio','Tom Hardy','Ellen Page'],
};
const movieJSON = JSON.stringify(movie);
console.log(movieJSON);

const movieObjet = JSON.parse(movieJSON);
console.log(movieObjet);
//
const projectSystem ={
    projects: [
        {
            name: " portfolio website ",
            description: 'A personal web portfolio',
            teamMembers: ['Tanjila', 'Nayaeem', "Sara"],
            deadlines: '2025-12-01',
            tasks:[
                {title: 'Design UI', assignee: 'Tanjila', status: 'Done'},
                {title:'Develop Backend', assignee: 'Nayeem', status: 'In Progress'},
                {title: 'Testing', assignee: 'Sara', status: 'pending'}
            ]
        }
    ]
};
console.log(JSON.stringify(projectSystem));