// const user ={ name: 'Tanjila'};
// console.log(user.name);
// console.log(user.profile);
// console.log(user.profile.email);

const  user = {name: 'Tanjila', address:{
                       city: 'Dhaka'
}};
console.log(user?.address?.city);
console.log(user?.profile?.email);
//
let userAge = 0;
let age = userAge || 18;
console.log(age);
//
const UserAge = 0;
const Age = UserAge ?? 18;
console.log(Age);
//

const userName = null;
const name = userName ?? 'Anonymous';
console.log(name);

//
const u = {
    name: 'Bithi',
    address:{city: 'Dhaka'}
};
const city = u ?.address?.city??'City not available';
console.log(city);
//
const poosttalCode = user?.address?.poosttalCode?? 'Postal code not available';
console.log(poosttalCode);
//
