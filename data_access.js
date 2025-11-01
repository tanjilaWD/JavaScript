const data = [{id:1, name:'Tanjila', address:'Khulna'},{ },{ },{ }];
console.log(data[0]);
console.log(data[0].address);
//
const products ={
    count: 5000,
    data:[
        {id: 1, name: 'Lenovo', price: 65000},
        {id:2, name: 'macbook', price: 16500}
    ]
};
console.log(products.data[1].price);

//
const user = {
    id: 5001,
    name: 'Bithi',
    address:{
        street:{
            second: 'xyz'
        },
        city: 'Dhaka'
    }
};
console.log(user.address.street.second);
//
const arr = [{id:1, name: 'mukta', address: 'mirpur'}];
console.log(arr[0].address);
//
const library = {name: 'city library', books:[
    {id:1, title: 'JS', price: 300},
    {id:2, title: 'python', price: 500}
]}
console.log(library.books[1].price);
//
const school = { name: 'Green High', students:[
    {id: 1, name: 'Samiha'},
    {id: 2, name: 'Kamal'}
]};
console.log(school.students[0].name);
//
const shop = {items:[
    {name: 'pen', stock: '100'},
    {name: 'notebook', stock: '50'}
]};
console.log(shop.items[1].stock);
//
const movie ={
    title: 'Inception',
    director:{ name: 'Nohan', age: 50},
    rating: 8.8
};
console.log(movie.director.name);
//
const game= {
    name:'football', players: [
        {id: 1, name: 'Lionel Messi'},
        {id: 2, name: 'Cristiano Ronaldo'}
    ]
};
console.log(game.players[0].name);
//
const vehicle = {
    type: 'car',
     features:{color:'red',
        brand:{
            name:'Toyta', model:'Corolla'
        }
     }
    };
console.log(vehicle.features.brand.name);    