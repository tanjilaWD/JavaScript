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
let x = null;
x ??= 75;
console.log(x);
//
let product = {};
product.stock ??= 0;
console.log(product.stock);
//
let productDetails = {discount: false};
productDetails.discount ||= 10;
console.log(productDetails.discount);
//
let vehicle = {};
console.log(vehicle?.engine ?? 'Engine info missing');
//
let restaurant = {};
console.log(restaurant?.menu ?? 'Menu not available');
//
let profile = {social: {}};
console.log(profile?.social?.twitter ?? 'Twitter handle not available');