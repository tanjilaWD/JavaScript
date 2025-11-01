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
